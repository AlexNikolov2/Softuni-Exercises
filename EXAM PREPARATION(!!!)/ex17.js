function solve(arr){
    let numberSongs = Number(arr.shift());
    let playlist = {};
    for(let i = 0; i < numberSongs; i++){
        /* iteration to get the inital Songs
         */
        let line = arr.shift();
        let [songName, author, type] = line.split('|');
        playlist[songName] = {author, type};

    }

    let commandSet = arr.shift();

    while(commandSet !== 'Stop'){

        let command = commandSet[0];
        let songName = commandSet[1];
        let author = commandSet[2];
        let type = commandSet[3];

        switch(command){
            
        case 'Add':
            if(!playlist.hasOwnProperty(songName)){
                playlist[songName] = {author,type};
            console.log(`${songName} by ${author} in ${type} added to the collection!`); 
            }
        else if(playlist.hasOwnProperty(songName)) {
            console.log(`${songName} is already in the collection!`);
        }
        break;

        case 'Remove':
        if(!playlist.hasOwnProperty(songName)){
            delete playlist[songName];
            console.log(`Successfully removed ${songName}!`);
        }
        else{
            console.log(`Invalid operation! ${songName} does not exist in the collection.`);
        }
        break;
    case 'ChangeKey':
        let newType = commandSet[2]
        if(!playlist.hasOwnProperty(songName)){
            playlist[songName].type = newType
            console.log(`Changed the key of ${songName} to ${newType}!`);
        }
        else{
            console.log(`Invalid operation! ${songName} does not exist in the collection.`);
        }
        break;
    }
    commandSet = arr.shift();
    }

    let entries = Object.entries(playlist)
    let sorted = entries.sort((a, b) => {
        return (
            a[0].localeCompare(b[0]) ||
            a[1].author.localeCompare(b[1].author)
        );
    });
 
    sorted.forEach((element) => {
        console.log(
            `${element[0]} -> Composer: ${element[1].author}, Key: ${element[1].type}`
        );
    });
}
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )