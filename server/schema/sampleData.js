// Golfcourse
const golfcourses = [
  {
    id: "1",
    name: "Gavilan College",
    location: {
      city: "Gilroy",
      state: "California",
      zip: "95020",
    },
    holes: [
      {
        number: 1,
        par: 4,
        distance: 299,
      },
      {
        number: 2,
        par: 3,
        distance: 78,
      },
      {
        number: 3,
        par: 4,
        distance: 327,
      },
      {
        number: 4,
        par: 3,
        distance: 124,
      },
      {
        number: 5,
        par: 3,
        distance: 147,
      },
      {
        number: 6,
        par: 4,
        distance: 268,
      },
      {
        number: 7,
        par: 3,
        distance: 146,
      },
      {
        number: 8,
        par: 3,
        distance: 97,
      },
      {
        number: 9,
        par: 4,
        distance: 373,
      },
    ],
    par: 31,
  },
];

// Scorecards
const scorecards = [
  {
    id: "1",
    golfCourse: "1",
    players: [
      {
        name: "Tiger Woods",
        scores: [
          { hole: 1, strokes: 4 },
          { hole: 2, strokes: 5 },
          { hole: 3, strokes: 4 },
          { hole: 4, strokes: 3 },
          { hole: 5, strokes: 4 },
          { hole: 6, strokes: 3 },
          { hole: 7, strokes: 3 },
          { hole: 8, strokes: 4 },
          { hole: 9, strokes: 1 },
        ],
      },
      {
        name: "Phil Mickelson",
        scores: [
          { hole: 1, strokes: 5 },
          { hole: 2, strokes: 4 },
          { hole: 3, strokes: 5 },
          { hole: 4, strokes: 4 },
          { hole: 5, strokes: 2 },
          { hole: 6, strokes: 1 },
          { hole: 7, strokes: 5 },
          { hole: 8, strokes: 3 },
          { hole: 9, strokes: 6 },
        ],
      },
    ],
  },
];

// Players
const players = [
  {
    id: "1",
    name: "John Smith",
    course: "1",
    played: new Date("2022-05-01"),
    scores: [
      {
        holeNumber: 1,
        score: 4,
      },
      {
        holeNumber: 2,
        score: 5,
      },
      {
        holeNumber: 3,
        score: 3,
      },
      {
        holeNumber: 4,
        score: 4,
      },
      {
        holeNumber: 5,
        score: 4,
      },
      {
        holeNumber: 6,
        score: 3,
      },
      {
        holeNumber: 7,
        score: 4,
      },
      {
        holeNumber: 8,
        score: 5,
      },
      {
        holeNumber: 9,
        score: 4,
      },
    ],
  },
  {
    id: "2",
    name: "Jane Doe",
    course: "1",
    scores: [
      {
        holeNumber: 1,
        score: 5,
      },
      {
        holeNumber: 2,
        score: 4,
      },
      {
        holeNumber: 3,
        score: 4,
      },
      {
        holeNumber: 4,
        score: 6,
      },
      {
        holeNumber: 5,
        score: 5,
      },
      {
        holeNumber: 6,
        score: 4,
      },
      {
        holeNumber: 7,
        score: 5,
      },
      {
        holeNumber: 8,
        score: 4,
      },
      {
        holeNumber: 9,
        score: 5,
      },
    ],
  },
];

module.exports = { golfcourses, players, scorecards };
