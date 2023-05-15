interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    songDuration: 400,
    song: "One",
    details: {
        author: 'Metallica',
        year: 1988
    }
}


const song = 'New Song';

const { song:anothersong, songDuration:duration, } = audioPlayer;
const { author:author} = audioPlayer.details;

console.log('Song: ', anothersong)
console.log('Duration: ', duration)
console.log('Author: ', author)



const [ , , trunks = 'Not found' ]: string[] = ['Goku', 'Vegeta']
console.log('Personaje 3: ', trunks)





export{};