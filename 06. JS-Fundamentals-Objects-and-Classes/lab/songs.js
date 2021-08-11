function songList(input) {
    let n = Number(input.shift());
    let type = input.pop();
    let result = [];

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < n; i++) {
        let [typeList, name, time] = input[i].split('_');
        let song = new Song(typeList, name, time);

        if (song.typeList == type || type == 'all') {
            result.push(song.name);
        }
    }
    console.log(result.join('\n'));
}

songList([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )