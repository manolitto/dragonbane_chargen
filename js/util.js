function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function diceRoll(d) {
    return Math.floor(Math.random() * d) + 1;
}

function getBest3of4D6(label) {
    let rolls = [diceRoll(6), diceRoll(6), diceRoll(6), diceRoll(6)];
    console.info(`Rolled ${rolls} for ${label}`)
    rolls.sort().shift();
    return rolls.reduce((acc, curr) => acc + curr, 0);
}

function toLookup(keyValueMap) {
    return Object.entries(keyValueMap)
        .reduce((prev, curr) => {
            prev[curr[0]] = {name:curr[0], ...curr[1]};
            return prev;
            }, {}
        );
}

function randomNumOutOf(num, array) {
    const arrCopy = [...array];
    while (arrCopy.length > num) {
        const i = Math.floor(Math.random() * arrCopy.length);
        arrCopy.splice(i, 1);
    }
    return arrCopy;
}