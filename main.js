const context = new AudioContext();
let ocillator;

let notes = [
  'C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'C1',
  'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4', 'C1',
  'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'C1',
  'G4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'C1',
  'C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'C1',
  'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4', 'C1',
];

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
