// LYRIC INFO
const songLyricsString = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye";

const songLyricsArray = songLyricsString.split(', ');

// INITIAL REDUX STATE
const initialState = {
  songLyricsString: songLyricsString,
  songLyricsArray: songLyricsArray,
  arrayPosition: 0,
  currentLyric: songLyricsArray[0]
}

console.log(initialState);

// REDUX REDUCER
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'NEXT_LYRIC':
      let newPosition = state.arrayPosition + 1;
      newState = {
        songLyricsString: state.songLyricsString,
        songLyricsArray: state.songLyricsArray,
        arrayPosition: newPosition,
        currentLyric: state.songLyricsArray[newPosition]
      }
      return newState;
    default:
      return state;
  }
}

// JEST TESTS + SETUP
const { expect } = window;

expect(
  reducer(initialState, { type: null })
).toEqual(initialState);

expect(
  reducer(initialState, { type: 'NEXT_LYRIC' })
).toEqual({
  songLyricsString: songLyricsString,
  songLyricsArray: songLyricsArray,
  arrayPosition: 1,
  currentLyric: songLyricsArray[1]
});

// REDUX STORE
const { createStore } = Redux;
const store = createStore(reducer);
console.log(store.getState());

// RENDERING STATE IN DOM
const render = () => {
  document.getElementById('lyrics').innerHTML = store.getState().currentLyric;
}

window.onload = function() {
  render();
}

// CLICK LISTENER
const userClick = () => {
  console.log('click');
  store.dispatch({ type: 'NEXT_LYRIC'} );
  console.log(store.getState());
}

// SUBSCRIBE TO REDUX STORE
store.subscribe(render);
