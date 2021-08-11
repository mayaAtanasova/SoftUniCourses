function sysReg(input) {
    let systems = [];
    for (let el of input) {
        let [systemName, componentName, subcomponentName] = el.split(' | ');
        // check system name, if it does not exist in the array of systems:
        if (systems.filter(el => el.systemName == systemName).length == 0) {
            //create new system object
            let system = {
                systemName,
                components: [],
            }
            //create new component
            let component = {
                componentName,
                subcomponents: [],
            }
            //populate subcomponent
            component.subcomponents.push(subcomponentName);
            // place component in system
            system.components.push(component);
            // place system in systems
            systems.push(system)
        } else {
            //if system name is alreay in the list of systems
            // check if it has the given component name
            //if yes add the subcomponent to that component
            let i = systems.findIndex(el => el.systemName == systemName);
            let j = systems[i].components.findIndex(x => x.componentName == componentName);
            if (j != -1) {
                systems[i].components[j].subcomponents.push(subcomponentName);
            } else {
                //if the given component is not in the system
                //create a new component and add it to the system
                let component = {
                    componentName,
                    subcomponents: [],
                }
                //populate subcomponent
                component.subcomponents.push(subcomponentName);
                // place component in system
                systems[i].components.push(component);
            }

        }
    }

    for (let system of systems) {
        system.components.sort(myLenSortComponents);
    }
    systems.sort(myLenSort);

    function myLenSort(a, b) {
        if (a.components.length > b.components.length) {
            return -1;
        } else if (a.components.length < b.components.length) {
            return 1;
        }else  /*if (a.components.length == b.components.length)*/ {
            if (a.components[0] > b.components[0]) {
                return 1
            } else {
                return -1
            }
        }
    }

    function myLenSortComponents(a, b) {
        if (a.subcomponents.length > b.subcomponents.length) {
            return -1;
        } else {
            return 1;
        }
    }


    for (let system of systems) {
        console.log(`${system.systemName}`);
        for (let component of system.components) {
            console.log(`|||${component.componentName}`);
            console.log(`||||||${component.subcomponents.join('\n||||||')}`);
        }
    }

}
sysReg([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])