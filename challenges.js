// TEST DATA
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],

    score: '4:0',

    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],

    date: 'Nov 9th, 2037',

    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// 5
// const { odds: { team1, x: draw, team2 } } = game;

// 1

for (const [index, player] of game.scored.entries()){
    console.log(`Goal ${index +1}: ${player}`);
}

// 2 

const odds = Object.values(game.odds)
let avg =0;
for (const odd of odds) avg += odd;
    avg /= odds.length;
    console.log(Math.floor(avg));

// 3

const oddsObject = Object.entries(game.odds)

for (const [team, odd] of oddsObject){
    const teamStr = team === 'x' ? 'draw': `victory ${game[team]}`
    console.log(`Odds of ${teamStr} ${odd}`);
}