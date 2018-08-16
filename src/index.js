let courseSlope = 127;
let courseRating = 70.7;

let monroe = {
  courseName: 'Monroe Country Club',
  courseRating: courseRating,
  courseSlope: courseSlope
};
let stonebridge = {
  courseName: 'Stonebridge Golf Club',
  courseRating: courseRating,
  courseSlope: courseSlope
};

const constant = 0.96;

let scores = [];
let adjustedScores = [];
let highestScore = 0;
let handicap = 0;

let data = {
  firstName: 'Patrick',
  lastName: 'Scully',
  greetGolfer: function() {
    console.log('Welcome', this.firstName);
  },
  rounds: {
    round_1: {
      score: 72,
      course: stonebridge
    },
    round_2: {
      score: 71,
      course: monroe
    },
    round_3: {
      score: 73,
      course: monroe
    },
    round_4: {
      score: 72,
      course: stonebridge
    },
    round_5: {
      score: 69,
      course: monroe
    }
  },
  getScores: function() {
    let roundNumber = [];
    let rounds = Object.keys(data.rounds);
    for (let i = 0; i < rounds.length; i++) {
      roundNumber.push(rounds[i]);
    }
    for (let i = 0; i < roundNumber.length; i++) {
      let round = roundNumber[i];
      scores.push(this.rounds[round].score);
    }
  },
  adjustScores: function() {
    let adjustedScore = 0;
    for (let i = 0; i < scores.length; i++) {
      adjustedScore =
        ((scores[i] - courseRating) * 113) / courseSlope;
      adjustedScores.push(adjustedScore);
    }
  },
  getHandicap: function() {
    for (let i = 0; i < adjustedScores.length; i++) {
      if (highestScore < adjustedScores[i]) {
        highestScore = adjustedScores[i];
      }
    }
    handicap = highestScore * constant;
    console.log('Your handicap is', handicap);
    console.log('The scores used to calculate were:', scores);
  }
};

data.greetGolfer();
data.getScores();
data.adjustScores();
data.getHandicap();
