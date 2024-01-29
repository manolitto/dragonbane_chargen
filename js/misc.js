function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function diceRoll(d) {
    return Math.floor(Math.random() * d) + 1;
}
