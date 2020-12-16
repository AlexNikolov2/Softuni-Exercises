function ob(songs){
   let newSongs = []
   let numberOfSongs = songs.shift()
   let typeOfSongs = input.pop()

   class Song{
       constructor(type, name, time){
           this.type = type
           this.name = name
           this.time = time
       }
    }
   for(let i = 0; i < numberOfSongs; i++){
       let [type,name,time] = input[i].split('_')
       let song = new Song(type,name,time)
       newSongs.push(song)
   }
   if(typeOfSongs === 'all'){
       songs.array.forEach((i) => {
           console.log(i.name)
       });
   }
   else {
       let filtered = songs.filter((i) => i.type === typeOfSongs)
       filtered.forEach((i) =>)
   }

ob()