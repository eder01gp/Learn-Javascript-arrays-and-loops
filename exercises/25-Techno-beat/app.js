// Add your code here
const lyricsGenerator = (array) => {
    let song ="";
    let counter =0;

    for (let bool of array){
        if (bool==1){
            song = song.concat(" ","Drop the base");
            counter ++;
        }
        else {
            song = song.concat(" ","Boom");
            counter = 0;
        }
        if (counter == 3) {
            song = song.concat(" ","!!!Break the base!!!");        
            counter = 0;
        }
    }
    return song
 }

// Don't change anything bellow this line


console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
console.log(lyricsGenerator([0,0,1,1,0,0,0]));