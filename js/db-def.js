
const SKILL_ATTR = {

    'Acrobatics':     'agl',
    'Awareness':      'int',
    'Bartering':      'cha',
    'Beast Lore':      'int',
    'Bluffing':       'cha',
    'Bushcraft':      'int',
    'Crafting':       'str',
    'Evade':          'agl',
    'Healing':        'int',
    'Hunting & Fishing': 'agl',
    'Languages':      'int',
    'Myths & Legends':   'int',
    'Performance':    'cha',
    'Persuasion':     'cha',
    'Riding':         'agl',
    'Seamanship':     'int',
    'Sleight of Hand':  'agl',
    'Sneaking':       'agl',
    'Spot Hidden':     'int',
    'Swimming':       'agl',
    
    'Crossbows':  'agl',
    'Axes':       'str',
    'Bows':       'agl',
    'Hammers':    'str',
    'Knives':     'agl',
    'Brawling':   'str',
    'Slings':     'agl',
    'Swords':     'str',
    'Spears':     'str',
    'Staves':     'agl',
};

const KIN_MOVEMENT_TABLE = {
    Human: 10,
    Halfling: 8,
    Dwarf: 8,
    Elf: 10,
    Mallard: 8,
    Wolfkin: 12
}

const AGE_TRAINED_SKILL = {
    young: {prof: 6, free: 2},
    adult: {prof: 6, free: 4},
    old:   {prof: 6, free: 4}
}

const AGE_ATTR_ADJUST = {
    young: {STR:  0, CON: +1, AGL: +1, INT:  0, WIL:  0, CHA: 0},
    adult: {STR:  0, CON:  0, AGL:  0, INT:  0, WIL:  0, CHA: 0},
    old:   {STR: -2, CON: -2, AGL: -2, INT: +1, WIL: +1, CHA: 0},
}

const KIN_INNATE_ABILITY = {
    Human: 'Adaptive',
    Halfling: 'Hard To Catch',
    Dwarf: 'Unforgiving',
    Elf: 'Inner Peace',
    Mallard: ['Ill-tempered','Webbed Feet'],
    Wolfkin: 'Hunting Instincts'
};

const PROFESSION_KEY_ATTR = {
    Artisan: 'STR',
    Bard: 'CHA',
    Fighter: 'STR',
    Hunter: 'AGL',
    Knight: 'STR',
    Mage: 'WIL',
    Mariner: 'AGL',
    Merchant: 'CHA',
    Scholar: 'INT',
    Thief: 'AGL',
}

const PROFESSION_START_GEAR = {
    Artisan: [
        ['warhammer (light)', 'leather armor', 'black-smith’s tools', 'torch', 'flint & tinder', 'D8 food rations', 'D8 silver'],
        ['handaxe', 'leather armor', 'carpentry tools', 'torch', 'rope (hemp)', 'flint & tinder', 'D8 food rations', 'D8 silver'],
        ['knife', 'leather armor', 'tanner’s tools', 'lantern', 'lamp oil', 'flint & tinder', 'D8 food rations', 'D8 silver']
    ],
    Bard: [
        [],
        [],
        []
    ],
    Fighter: [
        [],
        [],
        []
    ],
    Hunter: [
        [],
        [],
        []
    ],
    Knight: [
        [],
        [],
        []
    ],
    Mage: [
        [],
        [],
        []
    ],
    Mariner: [
        [],
        [],
        []
    ],
    Merchant: [
        [],
        [],
        []
    ],
    Scholar: [
        [],
        [],
        []
    ],
    Thief: [
        [],
        [],
        []
    ],
}

const PROFESSION_SKILLS = {
    Artisan: ['Axes', 'Brawling', 'Crafting', 'Hammers', 'Knives', 'Sleight of Hand', 'Spot Hidden', 'Swords'],
    Bard: [
    ],
    Fighter: [
    ],
    Hunter: [
    ],
    Knight: [
    ],
    Mage: [
    ],
    Mariner: [
    ],
    Merchant: [
    ],
    Scholar: [
    ],
    Thief: [
    ],
}

const PROFESSION_HEROIC_ABILITY = {
    Artisan: ['Master Blacksmith', 'Master Carpenter', 'Master Tanner'],
    Bard: ['Musician'],
    Fighter: ['Veteran'],
    Hunter: ['Companion'],
    Knight: ['Guardian'],
    Mage: [],
    Mariner: ['Sea Legs'],
    Merchant: ['Treasure Hunter'],
    Scholar: ['Intuition'],
    Thief: ['Backstabbing'],
}

const RANDOM_MEMENTO_TABLE = [
    'Your trusty old shoes',
    'A simple silver medallion',
    ['A letter from an old friend','A letter from an old relative'],
    'A ragged old journal',
    'A bracelet passed down in your family',
    'A wooden figurine you got as a child',
    'A strangely shaped stone',
    ['A copper coin from a treasure sought by your mother','A copper coin from a treasure sought by your father'],
    'An old pewter tankard',
    'A horn taken as a trophy from a monster',
    'A fang taken as a trophy from a beast',
    'A couple of simple dice made of bone',
    'A locket containing a lock of hair',
    'An ornate key',
    'A hand-drawn map you inherited',
    'A ring with an inscription',
    'A bone whistle',
    ['Your mother’s ragged old hat','Your father’s ragged old hat'],
    'A griffin feather',
    'A beautifully carved pipe'
];

const RANDOM_APPEARANCE_TABLE = [
    'Ugly scar across your cheek',
    'Strange headgear',
    'Abnormally pale and pasty',
    'A constant smile on your lips',
    'Icy, penetrating gaze',
    'A bit of extra weight around the middle',
    'Thin and wiry',
    'Abnormal amounts of body hair',
    'Balding',
    'Prominent tattoo',
    'Foul body odor',
    'Glorious hairstyle',
    'Limp',
    'Filthy',
    'Honest blue eyes',
    'Silver tooth',
    'Heavily perfumed',
    'Different-colored eyes',
    'Hissing voice',
    'Weathered face'
];

