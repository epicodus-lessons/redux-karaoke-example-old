// LYRIC INFO
const chorusString = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye";

const chorusArray = chorusString.split(', ');

// INITIAL REDUX STATE
const initialState = {
  songLyricsString: songLyricsString,
  songLyricsArray: songLyricsArray,
  arrayPosition: 0,
  currentPhrase: songLyricsArray[0]
}

console.log(initialState);

// CLICK LISTENER
const userClick = () => {
  console.log('click');
}
