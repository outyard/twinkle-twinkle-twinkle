(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window["Octavian"] = require("octavian");
},{"octavian":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _modes = require('./modes');

var _modes2 = _interopRequireDefault(_modes);

exports['default'] = function () {
  var _this = this;

  var mode = this.mode;

  if (!_modes2['default'][mode]) {
    throw new Error('Invalid mode, try: ' + Object.keys(_modes2['default']).join(', '));
  }

  var notes = _modes2['default'][mode].map(function (i) {
    return _this.root[i]();
  });
  this.notes = this.notes.concat(notes);
};

module.exports = exports['default'];
},{"./modes":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _Note = require('../note');

var _Note2 = _interopRequireDefault(_Note);

var _addAdditionalNotes = require('./add-additional-notes');

var _addAdditionalNotes2 = _interopRequireDefault(_addAdditionalNotes);

var Chord = (function () {
  function Chord() {
    var signature = arguments[0] === undefined ? 'A4' : arguments[0];
    var mode = arguments[1] === undefined ? undefined : arguments[1];

    _classCallCheck(this, Chord);

    this.root = new _Note2['default'](signature);
    this.mode = mode;
    this.notes = [this.root];

    if (mode) {
      _addAdditionalNotes2['default'].call(this);
    }
  }

  _createClass(Chord, [{
    key: 'signatures',
    get: function () {
      return this.notes.map(function (n) {
        return n.signature;
      });
    }
  }, {
    key: 'pianoKeys',
    get: function () {
      return this.notes.map(function (n) {
        return n.pianoKey;
      });
    }
  }, {
    key: 'frequencies',
    get: function () {
      return this.notes.map(function (n) {
        return n.frequency;
      });
    }
  }, {
    key: 'addInterval',
    value: function addInterval(i) {
      this.notes.push(this.root.interval(i));
      return this;
    }
  }]);

  return Chord;
})();

exports['default'] = Chord;
module.exports = exports['default'];
},{"../note":8,"./add-additional-notes":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var modes = Object.defineProperties({
  major: ['majorThird', 'perfectFifth'],
  majorSixth: ['majorThird', 'perfectFifth', 'majorSixth'],
  majorSeventh: ['majorThird', 'perfectFifth', 'majorSeventh'],
  majorSeventhFlatFive: ['majorThird', 'diminishedFifth', 'majorSeventh'],
  majorSeventhSharpFive: ['majorThird', 'minorSixth', 'majorSeventh'],
  minor: ['minorThird', 'perfectFifth'],
  minorSixth: ['minorThird', 'perfectFifth', 'majorSixth'],
  minorSeventh: ['minorThird', 'perfectFifth', 'minorSeventh'],
  minorMajor: ['minorThird', 'perfectFifth', 'minorSeventh'],
  dominantSeventh: ['majorThird', 'perfectFifth', 'minorSeventh'],
  diminished: ['minorThird', 'diminishedFifth'],
  diminishedSeventh: ['minorThird', 'diminishedFifth', 'majorSixth'],
  halfDimished: ['minorThird', 'diminishedFifth', 'minorSeventh'] }, {
  maj: {
    get: function get() {
      return this.major;
    },
    enumerable: true
  },
  '6': {
    get: function get() {
      return this.majorSixth;
    },
    enumerable: true
  },
  maj6: {
    get: function get() {
      return this.majorSixth;
    },
    enumerable: true
  },
  '7': {
    get: function get() {
      return this.majorSeventh;
    },
    enumerable: true
  },
  maj7: {
    get: function get() {
      return this.majorSeventh;
    },
    enumerable: true
  },
  maj7b5: {
    get: function get() {
      return this.majorSeventhFlatFive;
    },
    enumerable: true
  },
  'maj7#5': {
    get: function get() {
      return this.majorSeventhSharpFive;
    },
    enumerable: true
  },
  min: {
    get: function get() {
      return this.minor;
    },
    enumerable: true
  },
  m: {
    get: function get() {
      return this.minor;
    },
    enumerable: true
  },
  min6: {
    get: function get() {
      return this.minorSixth;
    },
    enumerable: true
  },
  m6: {
    get: function get() {
      return this.minorSixth;
    },
    enumerable: true
  },
  min7: {
    get: function get() {
      return this.minorSeventh;
    },
    enumerable: true
  },
  m7: {
    get: function get() {
      return this.minorSeventh;
    },
    enumerable: true
  },
  'm#7': {
    get: function get() {
      return this.minorMajor;
    },
    enumerable: true
  },
  'min#7': {
    get: function get() {
      return this.minorMajor;
    },
    enumerable: true
  },
  'm(maj7)': {
    get: function get() {
      return this.minorMajor;
    },
    enumerable: true
  },
  dom7: {
    get: function get() {
      return this.dominantSeventh;
    },
    enumerable: true
  },
  dim: {
    get: function get() {
      return this.diminished;
    },
    enumerable: true
  },
  dim7: {
    get: function get() {
      return this.diminishedSeventh;
    },
    enumerable: true
  },
  m7b5: {
    get: function get() {
      return this.halfDiminshed;
    },
    enumerable: true
  }
});

exports['default'] = Object.freeze(modes);
module.exports = exports['default'];
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _Note = require('./note');

var _Note2 = _interopRequireDefault(_Note);

var _Chord = require('./chord');

var _Chord2 = _interopRequireDefault(_Chord);

exports['default'] = {
  Note: _Note2['default'],
  Chord: _Chord2['default']
};
module.exports = exports['default'];
},{"./chord":3,"./note":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var alternateNames = {
  Ab: 'G#',
  'A#': 'Bb',
  Bb: 'A#',
  'C#': 'Db',
  Db: 'C#',
  'D#': 'Eb',
  Eb: 'D#',
  'F#': 'Gb',
  Gb: 'F#',
  'G#': 'Ab'
};

exports['default'] = function (signature) {
  var _signature$match$slice = signature.match(/([A-G][b#]{0,1})(\d)/).slice(1, 3);

  var _signature$match$slice2 = _slicedToArray(_signature$match$slice, 2);

  var note = _signature$match$slice2[0];
  var octave = _signature$match$slice2[1];

  if (!alternateNames[note]) {
    return null;
  }
  return alternateNames[note] + octave;
};

module.exports = exports['default'];
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _pianoKeys = require('./piano-keys');

var noteIndex = swapKeysAndValues(_pianoKeys.pianoKeys);

exports['default'] = function (pianoKey) {
  return noteIndex[pianoKey];
};

function swapKeysAndValues(object) {
  return Object.keys(object).reduce(function (newObject, key) {
    var value = object[key];
    newObject[value] = key;
    return newObject;
  }, {});
}
module.exports = exports['default'];
},{"./piano-keys":12}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _parseNote = require('./parse-note');

var _parseNote2 = _interopRequireDefault(_parseNote);

var _getAlternateName = require('./get-alternate-name');

var _getAlternateName2 = _interopRequireDefault(_getAlternateName);

var _getNoteFromPianoKey = require('./get-note-from-piano-key');

var _getNoteFromPianoKey2 = _interopRequireDefault(_getNoteFromPianoKey);

var _pianoKeys$frequencies = require('./piano-keys');

var _validateNote = require('./validate-note');

var _validateNote2 = _interopRequireDefault(_validateNote);

var _intervals = require('./intervals');

var _intervals2 = _interopRequireDefault(_intervals);

var _Chord = require('../chord');

var _Chord2 = _interopRequireDefault(_Chord);

var Note = (function () {
  function Note(note) {
    var _this = this;

    _classCallCheck(this, Note);

    var parsedNote = _parseNote2['default'](note);
    Object.keys(parsedNote).forEach(function (key) {
      return _this[key] = parsedNote[key];
    });
    _validateNote2['default'](this.signature);
  }

  _createClass(Note, [{
    key: 'signature',
    get: function () {
      return '' + this.letter + '' + (this.modifier || '') + '' + this.octave;
    },
    set: function (note) {
      this.constructor(note);
      return this.signature;
    }
  }, {
    key: 'pianoKey',
    get: function () {
      return _pianoKeys$frequencies.pianoKeys[this.signature];
    }
  }, {
    key: 'frequency',
    get: function () {
      return _pianoKeys$frequencies.frequencies[this.pianoKey];
    }
  }, {
    key: 'alternateName',
    get: function () {
      return _getAlternateName2['default'](this.signature);
    }
  }, {
    key: 'interval',
    value: function interval(i) {
      if (typeof i === 'number') {
        return Note.fromPianoKey(this.pianoKey + i);
      }

      var validIntervals = Object.keys(_intervals2['default']);
      if (validIntervals.indexOf(i) === -1) {
        throw new Error('' + i + ' is an invalid interval,\n                       try: ' + validIntervals.join(', '));
      }

      return this[i]();
    }
  }, {
    key: 'toChord',
    value: function toChord(mode) {
      return new _Chord2['default'](this.signature, mode);
    }
  }], [{
    key: 'fromPianoKey',
    value: function fromPianoKey(pianoKey) {
      var note = _getNoteFromPianoKey2['default'](pianoKey);
      return new this(note);
    }
  }]);

  return Note;
})();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function () {
    var interval = _step.value;

    Note.prototype[interval] = function () {
      return this.interval(_intervals2['default'][interval]);
    };
  };

  for (var _iterator = Object.keys(_intervals2['default'])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

exports['default'] = Note;
module.exports = exports['default'];
},{"../chord":3,"./get-alternate-name":6,"./get-note-from-piano-key":7,"./intervals":9,"./parse-note":11,"./piano-keys":12,"./validate-note":13}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var intervals = Object.defineProperties({
  downOctave: -12,
  minorSecond: 1,
  majorSecond: 2,
  minorThird: 3,
  majorThird: 4,
  perfectFourth: 5,
  diminishedFifth: 6,
  perfectFifth: 7,
  minorSixth: 8,
  majorSixth: 9,
  minorSeventh: 10,
  majorSeventh: 11,
  perfectOctave: 12
}, {
  augmentedFourth: {
    get: function get() {
      return this.diminishedFifth;
    },
    enumerable: true
  },
  third: {
    get: function get() {
      return this.majorThird;
    },
    enumerable: true
  },
  fifth: {
    get: function get() {
      return this.perfectFifth;
    },
    enumerable: true
  }
});

exports["default"] = Object.freeze(intervals);
module.exports = exports["default"];
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var validNoteLetters = 'ABCDEFG';
var validSharpNotes = 'ACDFG';
var validFlatNotes = 'ABDEG';
var validModifiers = '#b';

exports['default'] = function (note) {
  var letter = note.charAt(0).toUpperCase();
  var modifier = note.charAt(1) || null;

  if (modifier === 'b' && validFlatNotes.indexOf(letter) === -1) {
    letter = validNoteLetters.charAt(validNoteLetters.indexOf(letter) - 1);
    modifier = null;
  }

  if (modifier === '#' && validSharpNotes.indexOf(letter) === -1) {
    letter = validNoteLetters.charAt(validNoteLetters.indexOf(letter) + 1);
    modifier = null;
  }

  validateLetter(letter);
  validateModifier(modifier);

  return { letter: letter, modifier: modifier };
};

function validateLetter(letter) {
  if (validNoteLetters.indexOf(letter) === -1) {
    throw new Error('Invalid note letter');
  }
}

function validateModifier(modifier) {
  if (modifier && validModifiers.indexOf(modifier) === -1) {
    throw new Error('Invalid modifier');
  }
}
module.exports = exports['default'];
},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _normalizeNote2 = require('./normalize-note');

var _normalizeNote3 = _interopRequireDefault(_normalizeNote2);

exports['default'] = function (note) {
  var noteSegments = note.match(/([A-Ga-g])([#b]{0,1})([0-9])/);

  if (!noteSegments) {
    throw new Error('Invalid note format: ' + note + '.');
  }

  var noteWithModifier = noteSegments.slice(1, 3).join('');

  var _normalizeNote = _normalizeNote3['default'](noteWithModifier);

  var letter = _normalizeNote.letter;
  var modifier = _normalizeNote.modifier;

  var octave = noteSegments[3];

  return {
    letter: letter,
    modifier: modifier || null,
    octave: parseInt(octave, 10)
  };
};

module.exports = exports['default'];
},{"./normalize-note":10}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pianoKeys = {
  A0: 1,
  Bb0: 2,
  "A#0": 2,
  B0: 3,
  C1: 4,
  Db1: 5,
  "C#1": 5,
  D1: 6,
  Eb1: 7,
  "D#1": 7,
  E1: 8,
  F1: 9,
  Gb1: 10,
  "F#1": 10,
  G1: 11,
  Ab1: 12,
  "G#1": 12,
  A1: 13,
  Bb1: 14,
  "A#1": 14,
  B1: 15,
  C2: 16,
  Db2: 17,
  "C#2": 17,
  D2: 18,
  Eb2: 19,
  "D#2": 19,
  E2: 20,
  F2: 21,
  Gb2: 22,
  "F#2": 22,
  G2: 23,
  Ab2: 24,
  "G#2": 24,
  A2: 25,
  Bb2: 26,
  "A#2": 26,
  B2: 27,
  C3: 28,
  Db3: 29,
  "C#3": 29,
  D3: 30,
  Eb3: 31,
  "D#3": 31,
  E3: 32,
  F3: 33,
  Gb3: 34,
  "F#3": 34,
  G3: 35,
  Ab3: 36,
  "G#3": 36,
  A3: 37,
  Bb3: 38,
  "A#3": 38,
  B3: 39,
  C4: 40,
  Db4: 41,
  "C#4": 41,
  D4: 42,
  Eb4: 43,
  "D#4": 43,
  E4: 44,
  F4: 45,
  Gb4: 46,
  "F#4": 46,
  G4: 47,
  Ab4: 48,
  "G#4": 48,
  A4: 49,
  Bb4: 50,
  "A#4": 50,
  B4: 51,
  C5: 52,
  Db5: 53,
  "C#5": 53,
  D5: 54,
  Eb5: 55,
  "D#5": 55,
  E5: 56,
  F5: 57,
  Gb5: 58,
  "F#5": 58,
  G5: 59,
  Ab5: 60,
  "G#5": 60,
  A5: 61,
  Bb5: 62,
  "A#5": 62,
  B5: 63,
  C6: 64,
  Db6: 65,
  "C#6": 65,
  D6: 66,
  Eb6: 67,
  "D#6": 67,
  E6: 68,
  F6: 69,
  Gb6: 70,
  "F#6": 70,
  G6: 71,
  Ab6: 72,
  "G#6": 72,
  A6: 73,
  Bb6: 74,
  "A#6": 74,
  B6: 75,
  C7: 76,
  Db7: 77,
  "C#7": 77,
  D7: 78,
  Eb7: 79,
  "D#7": 79,
  E7: 80,
  F7: 81,
  Gb7: 82,
  "F#7": 82,
  G7: 83,
  Ab7: 84,
  "G#7": 84,
  A7: 85,
  Bb7: 86,
  "A#7": 86,
  B7: 87,
  C8: 88
};

exports.pianoKeys = pianoKeys;
var frequencies = {
  10: 46.2493,
  11: 48.9994,
  12: 51.9131,
  13: 55,
  14: 58.2705,
  15: 61.7354,
  16: 65.4064,
  17: 69.2957,
  18: 73.4162,
  19: 77.7817,
  1: 27.5,
  20: 82.4069,
  21: 87.3071,
  22: 92.4986,
  23: 97.9989,
  24: 103.826,
  25: 110,
  26: 116.541,
  27: 123.471,
  28: 130.813,
  29: 138.591,
  2: 29.1352,
  30: 146.832,
  31: 155.563,
  32: 164.814,
  33: 174.614,
  34: 184.997,
  35: 195.998,
  36: 207.652,
  37: 220,
  38: 233.082,
  39: 246.942,
  3: 30.8677,
  40: 261.626,
  41: 277.183,
  42: 293.665,
  43: 311.127,
  44: 329.628,
  45: 349.228,
  46: 369.994,
  47: 391.995,
  48: 415.305,
  49: 440,
  4: 32.7032,
  50: 466.164,
  51: 493.883,
  52: 523.251,
  53: 554.365,
  54: 587.33,
  55: 622.254,
  56: 659.255,
  57: 698.456,
  58: 739.989,
  59: 783.991,
  5: 34.6478,
  60: 830.609,
  61: 880,
  62: 932.328,
  63: 987.767,
  64: 1046.5,
  65: 1108.73,
  66: 1174.66,
  67: 1244.51,
  68: 1318.51,
  69: 1396.91,
  6: 36.7081,
  70: 1479.98,
  71: 1567.98,
  72: 1661.22,
  73: 1760,
  74: 1864.66,
  75: 1975.53,
  76: 2093,
  77: 2217.46,
  78: 2349.32,
  79: 2489.02,
  7: 38.8909,
  80: 2637.02,
  81: 2793.83,
  82: 2959.96,
  83: 3135.96,
  84: 3322.44,
  85: 3520,
  86: 3729.31,
  87: 3951.07,
  88: 4186.01,
  8: 41.2034,
  9: 43.6535
};
exports.frequencies = frequencies;
},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = validateNote;

var _pianoKeys = require('./piano-keys');

var validNotes = Object.keys(_pianoKeys.pianoKeys);

function validateNote(signature) {
  if (validNotes.indexOf(signature) === -1) {
    throw new Error('Out of range');
  }
}

module.exports = exports['default'];
},{"./piano-keys":12}]},{},[1]);
