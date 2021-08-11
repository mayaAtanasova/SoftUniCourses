function shoot(input){
    let streak = input[0];
    let targets = streak.split(' ').map(i=>Number(i));
    let counter = 0;

    for (let i = 1; i < input.length; i++){
        let index = input[i];
        if (index == 'End'){
            break;
        }else{
            if (index <= targets.length - 1){
                if (targets[index] != -1){
                    for (let j = 0; j < targets.length; j++){
                        if (j != index && targets[j] != -1){
                            if (targets[j] > targets[index]){
                                targets[j] -= targets[index];
                            }else{
                                targets[j] += targets[index];
                            }
                        }
                    }
                    targets[index] = -1;
                    counter++;
                }
            }
        }
    }
console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}
shoot(['30 30 12 60 54 66', 5, 2, 4,0, 'End']);