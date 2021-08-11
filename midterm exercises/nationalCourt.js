function natCourtService(input) {
    let people = Number(input.pop());
    let [em1, em2, em3] = input.map(Number);
    let efficiency = em1 + em2 + em3;
    let time = 0;

    while (people > 0) {
        time += 1;
        people -= efficiency;
        if (time > 0 && time % 4 === 0) {
            time += 1;
        }
    }

    console.log(`Time needed: ${time}h.`);
}

natCourtService(['5','6','4', '20'])