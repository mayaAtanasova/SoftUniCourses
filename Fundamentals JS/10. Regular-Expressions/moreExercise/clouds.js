function jumpingOnClouds(c, k) {
    let n = c.length;
    let e = 100;
    let start = 0;
    let jumpIndex = (start + k) % n;
    while (jumpIndex != 0) {
        e -= 1;
        if (c[jumpIndex] === 1) {
            e -= 2;
        }
        jumpIndex = (jumpIndex + k) % n;
    }
    e -= 1;
    if(c[0] === 1){
        e -= 2;
    }
    console.log(e);
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)