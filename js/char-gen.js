function createRandomCharacter() {
    const age = getAge();
    const kin = getKin();
    const profession = randomItem(Object.values(PROFESSION));
    const str = Math.min(getBest3of4D6('STR') + AGE_ATTR_ADJUST[age].STR, 18);
    const con = Math.min(getBest3of4D6('CON') + AGE_ATTR_ADJUST[age].CON, 18);
    const agl = Math.min(getBest3of4D6('AGL') + AGE_ATTR_ADJUST[age].AGL, 18);
    const int = Math.min(getBest3of4D6('INT') + AGE_ATTR_ADJUST[age].INT, 18);
    const wil = Math.min(getBest3of4D6('WIL') + AGE_ATTR_ADJUST[age].WIL, 18);
    const cha = Math.min(getBest3of4D6('CHA') + AGE_ATTR_ADJUST[age].CHA, 18);
    const gear = randomItem(PROFESSION_START_GEAR[profession]);
    return {
        age: age,
        gender: randomItem(Object.values(GENDER)),
        kin: kin,
        profession: profession,
        firstname: getFirstname(kin),
        nickname: getNickname(profession),
        str: str,
        con: con,
        agl: agl,
        int: int,
        wil: wil,
        cha: cha,
        movement: calcMovement(kin, agl),
        damageBonStr: calcDamageBonus(str),
        damageBonAgl: calcDamageBonus(agl),
        hp: calcHitPoints(con),
        wp: calcWillpowerPoints(wil),
        abilities: getAbilities(kin),
        heroicAbilities: [getHeroicAbility(profession)],
        skills: {
            Acrobatics: calcSkillChance(agl),
            Awareness: calcSkillChance(int),
            Bartering: calcSkillChance(cha),
            BeastLore: calcSkillChance(int),
            Bluffing: calcSkillChance(cha),
            Bushcraft: calcSkillChance(int),
            Crafting: calcSkillChance(str),
            Evade: calcSkillChance(agl),
            Healing: calcSkillChance(int),
            HuntingFishing: calcSkillChance(agl),
            Languages: calcSkillChance(int),
            MythsLegends: calcSkillChance(int),
            Performance: calcSkillChance(cha),
            Persuasion: calcSkillChance(cha),
            Riding: calcSkillChance(agl),
            Seamanship: calcSkillChance(int),
            SleightOfHand: calcSkillChance(agl),
            Sneaking: calcSkillChance(agl),
            SpotHidden: calcSkillChance(int),
            Swimming: calcSkillChance(agl),
        },
        encumbrance: Math.ceil(str / 2),
        memento: getMemento(),
        appearance: getAppearance(),
        inventory: getStartInventory(gear),
        armor: getStartArmor(gear),
        helmet: getStartHelmet(gear),
        weapons: getStartWeapons(gear),
        gold: 0,
        silver: getSilver(gear),
        copper: 0
    };
}


function randomInventory(g) {
    if (g.startsWith('D')) {
        const i = g.indexOf(' ');
        const d = g.substring(1, i);
        return diceRoll(d) + ' ' + g.substring(3);
    }
    return g;
}

function getStartInventory(gear) {
    return gear
        .filter(g => !ARMOR[g] && !HELMET[g] && !WEAPON[g] && !g.endsWith(' silver'))
        .map(g => randomInventory(g));
}

function getStartArmor(gear) {
    return gear.filter(g => ARMOR[g]);
}

function getStartHelmet(gear) {
    return gear.filter(g => HELMET[g]);
}

function getStartWeapons(gear) {
    return gear.filter(g => WEAPON[g]);
}

function randomCoins(g) {
    if (g.startsWith('D')) {
        const i = g.indexOf(' ');
        const d = g.substring(1, i);
        return diceRoll(d);
    }
    throw Error('Bad coin gear: ' + g);
}

function getSilver(gear) {
    return gear
        .filter(g => g.endsWith(' silver'))
        .map(g => randomCoins(g)) || 0;
}



function getKin() {
    const r = diceRoll(12);
    if (r >= 1 && r <= 4) {
        return KIN.Human;
    } else if (r >= 5 && r <= 7) {
        return KIN.Halfling;
    } else if (r >= 8 && r <= 9) {
        return KIN.Dwarf;
    } else if (r === 10) {
        return KIN.Elf;
    } else if (r === 11) {
        return KIN.Mallard;
    } else if (r === 12) {
        return KIN.Wolfkin;
    }
    throw Error('bad dice roll');
}

function getFirstname(kin) {
    switch(kin) {
        case KIN.Human: return randomItem(['Joruna', 'Tym', 'Halvelda', 'Garmander', 'Verolun', 'Lothar']);
        case KIN.Halfling: return randomItem(['Snappy', 'Brine', 'Cottar', 'Bumble', 'Perrywick', 'Theoline']);
        case KIN.Dwarf: return randomItem(['Tinderrock', 'Halwyld', 'Tymolana', 'Traut', 'Urd', 'Fermer']);
        case KIN.Elf: return randomItem(['Arasin', 'Illyriana', 'Galvander', 'Tyrindelia', 'Erwilnor', 'Andremone']);
        case KIN.Mallard: return randomItem(['Qwucksum', 'Splats', 'Moggee', 'Groddy', 'Blisandina', 'Hackleswell']);
        case KIN.Wolfkin: return randomItem(['Wyld', 'Wolfshadow', 'Lunariem', 'Obdurian', 'Frostbite', 'Wuldenhall']);
    }
    throw Error('bad dice roll');
}

function getNickname(profession) {
    switch(profession) {
        case PROFESSION.Artisan: return randomItem(['Stonehammer', 'Woodcleaver', 'Strongfist', 'Barrelmaker', 'Bridgebuilder', 'Ironmaster']);
        case PROFESSION.Bard: return randomItem(['Odemaker', 'Talespinner', 'Silvervoice', 'Gildenclef', 'Honeytongue', 'Rhymesmith']);
        case PROFESSION.Fighter: return randomItem(['Gravemaker', 'Grimjaw', 'Windthaw', 'Coldsteel', 'The Fearless', 'The Butcher']);
        case PROFESSION.Hunter: return randomItem(['Forest Fox', 'Wolfbane', 'Pathfinder', 'The Weathered', 'Bloodhunger', 'Shadowbolt']);
        case PROFESSION.Knight: return randomItem(['Dragonheart', 'Goldlance', 'Griffinclaw', 'The Noble', 'Gleamhelm', 'Mourningcloak']);
        case PROFESSION.Mage: return randomItem(['Rootheart', 'Crookback', 'Graycape', 'Stormhand', 'Stafflimper', 'Shadowbringer']);
        case PROFESSION.Mariner: return randomItem(['Whitewater', 'Waverider', 'Foamborn', 'Saltsplash', 'Seadog', 'Stormfarer']);
        case PROFESSION.Merchant: return randomItem(['Silvergrin', 'Goldtooth', 'Silktongue', 'The Lisping and Truthful', 'Lardbelly', 'Skinflint']);
        case PROFESSION.Scholar: return randomItem(['Clearmind', 'Dustlung', 'Farsight', 'The Lettered', 'The All-Knowing', 'The Plump and Learned']);
        case PROFESSION.Thief: return randomItem(['Halffinger', 'Blackrat', 'Redeye', 'Quickfoot', 'Doubletongue', 'Nightstabber']);
    }
    throw Error('bad dice roll');
}

function getAge() {
    const r = diceRoll(6);
    if (r >= 1 && r <= 3) {
        return AGE.young;
    } else if (r >= 4 && r <= 5) {
        return AGE.adult;
    } else if (r === 6) {
        return AGE.old;
    }
    throw Error('bad dice roll');
}

function getBest3of4D6(label) {
    let rolls = [diceRoll(6), diceRoll(6), diceRoll(6), diceRoll(6)];
    console.info(`Rolled ${rolls} for ${label}`)
    rolls.sort().shift();
    return rolls.reduce((acc, curr) => acc + curr, 0);
}

function calcMovement(kin, agl) {
    let m = MOVEMENT[kin];
    if (agl <= 6) {
        return m - 4;
    } else if (agl >= 7 && agl <= 9) {
        return m - 2;
    } else if (agl >= 13 && agl <= 15) {
        return m + 2;
    } else if (agl >= 16) {
        return m + 4;
    }
    return m;
}

function calcDamageBonus(attrVal) {
    if (attrVal >= 17) {
        return `+D6`;
    } else if (attrVal >= 13) {
        return `+D4`;
    } else {
        return '';
    }
}

function calcHitPoints(con) {
    return con;
}

function calcWillpowerPoints(wil) {
    return wil;
}

function getAbilities(kin) {
    const abilities = [];
    if (typeof KIN_ABILITY[kin] === 'string') {
        abilities.push(KIN_ABILITY[kin]);
    } else {
        abilities.push(...KIN_ABILITY[kin]);
    }
    return abilities;
}

function calcSkillChance(attrVal) {
    return calcBaseChance(attrVal);
}

function getHeroicAbility(profession) {
    return randomItem(PROFESSION_HEROIC_ABILITY[profession]);
}

function getMemento() {
    const memento = randomItem([
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
    ]);
    if (typeof memento === 'string') {
        return memento;
    } else {
        return randomItem(memento);
    }
}

function getAppearance() {
    return randomItem([
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
    ]);
}


function calcBaseChance(attrVal) {
    if (attrVal <= 5) {
        return 3;
    } else if (attrVal <= 8) {
        return 4;
    } else if (attrVal <= 12) {
        return 5;
    } else if (attrVal <= 15) {
        return 6;
    } else {
        return 7;
    }
}
