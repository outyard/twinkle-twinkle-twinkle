const context = new AudioContext();
let ocillator;

let twinkleNotes = [
  'C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'C1',
  'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4', 'C1',
  'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'C1',
  'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'C1',
  'C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'C1',
  'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4', 'C1',
];

let marioNotes = [
'E5', 'E5', 'E5',
'C5', 'E5', 'G5', 'G4',
'C5', 'G4', 'E4',
'A4', 'B4', 'Bb4', 'A4',
'G4', 'E5', 'G5', 'A5',
'F5', 'G5', 'E5', 'C5', 'D5', 'B4',
'C5', 'G4', 'E4',
'A4', 'B4', 'Bb4', 'A4',
'G4', 'E5', 'G5', 'A5',
'F5', 'G5', 'E5', 'C5', 'D5', 'B4',
'G5', 'F#5', 'F5', 'D5', 'E5',
'G4', 'A4', 'C5',
'A4', 'C5', 'D5',
'G5', 'F#5', 'F5', 'D5', 'E5',
'C6', 'C6', 'C6',
'G5', 'F#5', 'F5', 'D5', 'E5',
'G4', 'A4', 'C5',
'A4', 'C5', 'D5',
'D#5', 'D5', 'C5',
'C5', 'C5', 'C5',
'C5', 'D5', 'E5', 'C5', 'A4', 'G4',
'C5', 'C5', 'C5',
'C5', 'D5', 'E5',
'C5', 'C5', 'C5',
'C5', 'D5', 'E5', 'C5', 'A4', 'G4',
'E5', 'E5', 'E5',
'C5', 'E5', 'G5',
'G4',
'C5', 'G4', 'E4',
'A4', 'B4', 'Bb4', 'A4',
'G4', 'E5', 'G5', 'A5',
'F5', 'G5', 'E5', 'C5', 'D5', 'B4',
'C5', 'G4', 'E4',
'A4', 'B4', 'Bb4', 'A4',
'G4', 'E5', 'G5', 'A5',
'F5', 'G5', 'E5', 'C5', 'D5', 'B4',
'E5', 'C5', 'G4',
'G4', 'A4', 'F5', 'F5', 'A4',
'B4', 'A5', 'A5', 'A5', 'G5', 'F5',
'E5', 'C5', 'A4', 'G4',
'E5', 'C5', 'G4',
'G4', 'A4', 'F5', 'F5', 'A4',
'B4', 'F5', 'F5', 'F5', 'E5', 'D5', 'C5',
'G4', 'E4', 'C4',
'C5', 'G4', 'E4',
'A4', 'B4', 'A4',
'G#4', 'Bb4', 'G#4',
'G4', 'F#4', 'G4',
];

let notes = twinkleNotes;

let markov;

generateMoreNotes(notes);

function generateMoreNotes(notes) {
  markov = new Markov();
  markov.addStates(notes.slice(0, 8).join(' '));
  markov.addStates(notes.slice(9, 17).join(' '));
  markov.addStates(notes.slice(18, 26).join(' '));
  markov.addStates(notes.slice(27, 35).join(' '));
  markov.addStates(notes.slice(36, 44).join(' '));
  markov.train(80);

  let numNotes = notes.length;
  for (let i = 0; i < 100; ++i) {
    let newNotes = markov.generateRandom(10);
    newNotes = newNotes.split(' ');
    for (let j = 0; j < newNotes.length; ++j) {
      notes.push(newNotes[j]);
    }
  }
}

let noteIndex = 0;

document.querySelector('button').addEventListener('click', () => {
  oscillator = context.createOscillator();

  oscillator.start(context.currentTime);
  play();
});

function play() {
  if (noteIndex >= notes.length) {
    oscillator.stop(context.currentTime);
    return;
  }

  let note = new Octavian.Note(notes[noteIndex]);
  oscillator.frequency.value = note.frequency;
  oscillator.type = 'triangle';
  oscillator.connect(context.destination);

  let notesText = document.querySelector('#notes');
  notesText.innerHTML = '';
  for (let i = 0; i < notes.length; ++i) {
    if (noteIndex === i) {
      notesText.innerHTML += '<span style="background: yellow">' + notes[i] + '</span>';
    } else {
      notesText.innerHTML += notes[i];
    }
    if (i < notes.length - 1) {
      notesText.innerHTML += ' ';
    }
  }

  ++noteIndex;
  setTimeout(function() {
    oscillator.frequency.value = 1;
  }, 50);
  setTimeout(play, 200);
}
