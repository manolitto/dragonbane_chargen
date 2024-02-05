const ARMOR = {
    'leather armor': {ac: 1},
    'studded leather armor': {ac: 2},
    'chainmail': {ac: 4},
    'plate armor': {ac: 6},
};

const HELMET = {
    'open helmet': {ac: '+1'},
    'great helmet': {ac: '+2'}
};

const WEAPON = toLookup({
    'knife': {grip: '1h', range: 'str', damage: 'd8', durability: 6, features: ['subtle', 'piercing', 'can be thrown']},
    'dagger': {grip: '1h', range: 'str', damage: 'd8', durability: 9, features: ['subtle', 'piercing', 'slashing', 'can be thrown']},
    'handaxe': {grip: '1h', range: 'str', damage: '2d6', durability: 9, features: ['toppling', 'slashing', 'can be thrown']},
    'broadsword': {grip: '1h', range: '2', damage: '2d6', durability: 15, features: ['piercing', 'slashing']},
    'warhammer (light)': {grip: '1h', range: '2', damage: '2d6', durability: 12, features: ['bludgeoning', 'toppling']}
});

const ITEM = toLookup({
    'flint & tinder': {weight: 0},
});
