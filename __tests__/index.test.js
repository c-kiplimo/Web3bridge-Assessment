
const { checkGuess } = require('../index');

test('checkGuess returns win or lose status', () => {
    const winningNum = 50;

    let result = checkGuess(winningNum, 50);
    expect(result).toMatch(/win|lose/);

    result = checkGuess(winningNum, 25);
    expect(result).toMatch(/win|lose/);
});

test('checkGuess returns lose status after 5 incorrect attempts', () => {
    const winningNum = 50;
    let result = '';

    for (let i = 0; i < 5; i++) {
        result = checkGuess(winningNum, i * 10);
    }

    result = checkGuess(winningNum, 10);
    expect(result).toBe('lose');
});
