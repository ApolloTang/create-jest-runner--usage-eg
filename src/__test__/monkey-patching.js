const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Hold on original getWinner() on a reference so we can restore
// it later.
const originalGetWinner = utils.getWinner

// We replace (monkey patch) the original function with a fake one.
//
// Instead of picking randomly a winner between two players,
// this fake one always return the first player as winner.
//
// We need to do this b/c we want the winner to be deterministic
// so we can test the game app.
utils.getWinner = (p1, p2) => p1

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// Restore the original getWinner()
utils.getWinner = originalGetWinner

