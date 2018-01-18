'use strict';
const expect        = require('chai').expect;
const puzzles       = require('../index');

const wordset = ['can', 'will', 'jump', 'cat', 'dog', 'walk', 'run', 'eat', 'fast',
    'slow', 'red', 'blue', 'green', 'waffle', 'soup', 'jet', 'car', 'bus', 'cannot',
    'tell', 'listen', 'able', 'to'];


describe('puzzles', () => {

    describe('even or odd', () => {

        it('evenOrOdd function exported', () => {
            expect(puzzles.evenOrOdd).to.be.a('function');
        });

        it('5 is Odd', () => {
            expect(puzzles.evenOrOdd(5)).to.equal('Odd')
        });

        it('4 is Even', () => {
            expect(puzzles.evenOrOdd(4)).to.equal('Even')
        });

    });

    describe('words in reverse', () => {

        it('wordsInReverse function exported', () => {
            expect(puzzles.wordsInReverse).to.be.a('function');
        });

        it('a b c d => d c b a', () => {
            expect(puzzles.wordsInReverse('a b c d')).to.equal('d c b a');
        });

    });

    describe('count positives, sum negatives', () => {

        it('countPositivesSumNegatives function exported', () => {
            expect(puzzles.countPositivesSumNegatives).to.be.a('function');
        });

        it('[1, -1, 2, -2, 5, -4] => [ 3, -7 ]', () => {
            expect(puzzles.countPositivesSumNegatives([1, -1, 2, -2, 5, -4])).to.deep.equal([ 3, -7 ]);
        });

    });

});

function countPositivesSumNegatives(nums) {
    let count = 0;
    let sum = 0;
    nums.forEach(num => {
        if (num > 0) {
            count++;
        } else {
            sum += num;
        }
    });
    return [ count, sum ];
}

function evenOrOdd(n) {
    return n % 2 ? 'Even' : 'Odd';
}

function wordsInReverse(str) {
    const words = str.split(' ');
    words.reverse();
    return words.join(' ');
}



function random() {
    return Math.round(Math.random() * 2000) - 1000;
}

function words(num) {
    const result = [];
    const length = wordset.length;

    for (let i = 0; i < num; i++) {
        const index = Math.floor(Math.random() * length);
        result.push(wordset[index]);
    }

    return result;
}