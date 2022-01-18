window.addEventListener('keydown', (e) => {
  keyDat = e.keyCode;

  //check if key exists as sound
  if (checkKey(keyDat)) {
    triggerKey(keyDat);
  }
});

let keys = document.querySelectorAll('.key');
let sounds = document.querySelectorAll('audio');

console.log(keys);

//check if key exists as sound
function checkKey(keyDat) {

  let returnVal = false;

  //check through keys for matching key data attribute, return true if found
  keys.forEach(element => {

    let checkAgainst = parseInt(element.attributes.item('data-key').nodeValue);

    if (checkAgainst === keyDat) {
      returnVal = true;
    }
  });

  return returnVal;
}

function triggerKey(keyDat) {

  keyAudio = find(keyDat, sounds);
  key = find(keyDat, keys);

  playKey(key);
  playAudio(keyAudio);
}

function find(keyDat, searchArray) {

  let returnElement;

  searchArray.forEach(element => {
    if (keyDat === parseInt(element.attributes.item('data-key').nodeValue)) {
      returnElement = element;
    }
  });

  return returnElement;
}

function playKey(key) {
  key.classList.toggle('playing');
  setTimeout(_ => {
    key.classList.toggle('playing');
  }, 100);
}

function playAudio(keyAudio) {
  keyAudio.play();
}