const BASE_SKILL = {
    Acrobatics: 'AGL',
    Awareness: 'INT',
    Bartering: 'CHA',
    BeastLore: 'INT',
    Bluffing: 'CHA',
    Bushcraft: 'INT',
    Crafting: 'STR',
    Evade: 'AGL',
    Healing: 'INT',
    HuntingFishing: 'AGL',
    Languages: 'INT',
    MythsLegends: 'INT',
    Performance: 'CHA',
    Persuasion: 'CHA',
    Riding: 'AGL',
    Seamanship: 'INT',
    SleightOfHand: 'AGL',
    Sneaking: 'AGL',
    SpotHidden: 'INT',
    Swimming: 'AGL',
}

const MOVEMENT = {
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

const KIN_ABILITY = {
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

const PROFESSION_START_GEAR = {
    Artisan: [
        ['warhammer (small)', 'leather armor', 'black-smith’s tools', 'torch', 'flint & tinder', 'D8 food rations', 'D8 silver'],
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
