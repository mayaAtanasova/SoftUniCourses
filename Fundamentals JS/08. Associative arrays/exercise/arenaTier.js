function fight(input) {
    let pool = [];
    for (let el of input) {
        if (el == 'Ave Cesar') {
            break; //to print
        }
        if (el.includes(' vs ')) {
            let [name1, name2] = el.split(' vs ');
            let id1 = pool.findIndex(x => x.name == name1);
            let id2 = pool.findIndex(x => x.name == name2);
            //ony if both gladiators are present in the pool
            if (id1 != -1 && id2 != -1) {
                let g1techs = Object.keys(pool[id1].techniques);
                // let g2techs = Object.keys(pool[id2].techniques);
                g1techs.forEach(t => {
                    if (pool[id2].techniques.hasOwnProperty(t)) {
                        //compare the skill levels
                        let sl1 = pool[id1].techniques[t]
                        let sl2 = pool[id2].techniques[t];
                        if (sl1 > sl2) {
                            //if the first one has better skills, remove the second from the pool
                            pool.splice(id2, 1);
                        } else {
                            // if the second one is better, remove the first from the pool
                            pool.splice(id1, 1);
                        }
                    }
                });
            }
        } else {
            let [name, technique, skill] = el.split(' -> ');
            skill = Number(skill);
            //look for the gladiator in the pool
            if (!pool.some(x => x.name == name)) {
                //if he is not there, create him
                let gladiator = {};
                gladiator['name'] = name;
                // create a subobject with his techniques and skill levels
                let techniques = {};
                techniques[technique] = skill;
                gladiator['techniques'] = techniques;
                //and put him in the pool
                pool.push(gladiator);
            } else {
                //if such a gladiator already exists
                //go to the index of his name
                //check if he has such a technique
                //check is to update or add it
                let gladTechniques = pool[pool.findIndex(x => x.name == name)].techniques;
                if (!gladTechniques.hasOwnProperty(technique)) {
                    // if the technique is not present, add it:
                    gladTechniques[technique] = skill;
                } else {
                    //if the technique is there, check the skill level
                    // if it is smaller, put the larger skill level for this technique
                    if (gladTechniques[technique] < skill) {
                        gladTechniques[technique] = skill;
                    }
                }
            }
        }
    };
    pool.forEach(g => {
        g['totalScore'] = Object.values(g.techniques).reduce((a, b) => a + b);
    });
    let sortedPool = pool.sort((a, b) => b.totalScore - a.totalScore || b.name - a.name);
    sortedPool.forEach(g => {
        console.log(`${g.name}: ${g.totalScore} skill`);
        let techs = Object.entries(g.techniques).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        techs.forEach(t => {
            console.log(`- ${t[0]} <!> ${t[1]}`);
        })
    })
}
fight([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])