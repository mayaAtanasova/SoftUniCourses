function modify(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}

let worker1 = modify({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
)
console.log(worker1);