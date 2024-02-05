function createRandomCharacter() {

    const char = {
        // simple props
        gender: undefined,
        memento: undefined,
        appearance: undefined,

        // props with dependencies

        _age: undefined,
        get age() {return this._age},
        set age(v) {
            this._age = v;
            this.trainedSkills = getRandomTrainedSkills(this.profession, this.age);
        },

        _kin: undefined,
        get kin() {return this._kin},
        set kin(v) {
            this._kin = v;
            this.firstname = getRandomFirstname(this.kin);
            this.abilities = getInnateAbilities(this.kin);
            this.movement = calcMovement(this.kin, this.agl);
        },

        _profession: undefined,
        get profession() {return this._profession},
        set profession(v) {
            this._profession = v;
            this.nickname = getRandomNickname(this.profession);
            this.heroicAbilities = [getHeroicAbility(this.profession)];
            const gear = getRandomGear(this.profession);
            this.inventory = getInventory(gear);
            this.armor = getStartArmor(gear);
            this.helmet = getStartHelmet(gear);
            this.weapons = getStartWeapons(gear);
            this.silver = getSilver(gear);
            this.trainedSkills = getRandomTrainedSkills(this.profession, this.age);
        },

        _str: undefined,
        get str() {return this._str},
        set str(v) {
            this._str = v;
            this.damageBonStr = calcDamageBonus(this.str);
            this.encumbrance = calcEncumbrance(this.str);
            this.calcSkillChances();
        },
        
        _con: undefined,
        get con() {return this._con},
        set con(v) {
            this._con = v;
            this.hp = calcHitPoints(this.con);
            this.calcSkillChances();
        },

        _agl: undefined,
        get agl() {return this._agl},
        set agl(v) {
            this._agl = v;
            this.damageBonAgl = calcDamageBonus(this.agl);
            this.movement = calcMovement(this.kin, this.agl);
            this.calcSkillChances();
        },

        _int: undefined,
        get int() {return this._int},
        set int(v) {
            this._int = v;
            this.calcSkillChances();
        },

        _wil: undefined,
        get wil() {return this._wil},
        set wil(v) {
            this._wil = v;
            this.wp = calcWillpowerPoints(this.wil);
            this.calcSkillChances();
        },

        _cha: undefined,
        get cha() {return this._cha},
        set cha(v) {
            this._cha = v;
            this.calcSkillChances();
        },

        // dependent props
        firstname: undefined,
        nickname: undefined,
        damageBonStr: undefined,
        damageBonAgl: undefined,
        hp: undefined,
        wp: undefined,
        movement: undefined,
        abilities: [],
        heroicAbilities: [],
        inventory: [],
        armor: undefined,
        helmet: undefined,
        weapons: [],
        gold: undefined,
        silver: undefined,
        copper: undefined,

        _trainedSkills: [],
        get trainedSkills() {return this._trainedSkills},
        set trainedSkills(v) {
            this._trainedSkills = v;
            this.calcSkillChances();
        },

        basicSkillChances: undefined,
        weaponSkillChances: undefined,
        
        // helpers
        calcSkillChances: function() {
            this.basicSkillChances = {
                'Acrobatics': calcBasicSkillChance(this, 'Acrobatics'),
                'Awareness': calcBasicSkillChance(this, 'Awareness'),
                'Bartering': calcBasicSkillChance(this, 'Bartering'),
                'Beast Lore': calcBasicSkillChance(this, 'Beast Lore'),
                'Bluffing': calcBasicSkillChance(this, 'Bluffing'),
                'Bushcraft': calcBasicSkillChance(this, 'Bushcraft'),
                'Crafting': calcBasicSkillChance(this, 'Crafting'),
                'Evade': calcBasicSkillChance(this, 'Evade'),
                'Healing': calcBasicSkillChance(this, 'Healing'),
                'Hunting & Fishing': calcBasicSkillChance(this, 'Hunting & Fishing'),
                'Languages': calcBasicSkillChance(this, 'Languages'),
                'Myths & Legends': calcBasicSkillChance(this, 'Myths & Legends'),
                'Performance': calcBasicSkillChance(this, 'Performance'),
                'Persuasion': calcBasicSkillChance(this, 'Persuasion'),
                'Riding': calcBasicSkillChance(this, 'Riding'),
                'Seamanship': calcBasicSkillChance(this, 'Seamanship'),
                'Sleight of Hand': calcBasicSkillChance(this, 'Sleight of Hand'),
                'Sneaking': calcBasicSkillChance(this, 'Sneaking'),
                'Spot Hidden': calcBasicSkillChance(this, 'Spot Hidden'),
                'Swimming': calcBasicSkillChance(this, 'Swimming'),
            };
            this.weaponSkillChances = {
                Crossbows:  calcWeaponSkillChance(this, 'Crossbows'),
                Axes:       calcWeaponSkillChance(this, 'Axes'),
                Bows:       calcWeaponSkillChance(this, 'Bows'),
                Hammers:    calcWeaponSkillChance(this, 'Hammers'),
                Knives:     calcWeaponSkillChance(this, 'Knives'),
                Brawling:   calcWeaponSkillChance(this, 'Brawling'),
                Slings:     calcWeaponSkillChance(this, 'Slings'),
                Swords:     calcWeaponSkillChance(this, 'Swords'),
                Spears:     calcWeaponSkillChance(this, 'Spears'),
                Staves:     calcWeaponSkillChance(this, 'Staves'),
            };
        }
    };

    char.gender = getRandomGender();
    char.age = getRandomAge();
    char.kin = getRandomKin();
    char.profession = "Artisan"; //todo getRandomProfession();
    char.str = Math.min(getBest3of4D6('STR') + AGE_ATTR_ADJUST[char.age].STR, 18);
    char.con = Math.min(getBest3of4D6('CON') + AGE_ATTR_ADJUST[char.age].CON, 18);
    char.agl = Math.min(getBest3of4D6('AGL') + AGE_ATTR_ADJUST[char.age].AGL, 18);
    char.int = Math.min(getBest3of4D6('INT') + AGE_ATTR_ADJUST[char.age].INT, 18);
    char.wil = Math.min(getBest3of4D6('WIL') + AGE_ATTR_ADJUST[char.age].WIL, 18);
    char.cha = Math.min(getBest3of4D6('CHA') + AGE_ATTR_ADJUST[char.age].CHA, 18);
    char.memento = getRandomMemento();
    char.appearance = getRandomAppearance();

    return char;
}

function getRandomGear(profession) {
    return randomItem(PROFESSION_START_GEAR[profession]);
}

function calcEncumbrance(str) {
    return Math.ceil(str / 2);
}

function getRandomGender() {
    return randomItem(Object.values(GENDER));
}

function getRandomKin() {
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

function getRandomProfession() {
    return randomItem(Object.values(PROFESSION));
}

function getRandomAge() {
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

function randomizeItemCount(g) {
    if (g.startsWith('D')) {
        const i = g.indexOf(' ');
        const d = g.substring(1, i);
        return diceRoll(d) + ' ' + g.substring(3);
    }
    return g;
}

function getInventory(gear) {
    return gear
        .filter(g => !ARMOR[g] && !HELMET[g] && !WEAPON[g] && !g.endsWith(' silver'))
        .map(g => randomizeItemCount(g));
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


function getRandomFirstname(kin) {
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

function getRandomNickname(profession) {
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

function calcMovement(kin, agl) {
    if (kin === undefined || agl === undefined) {
        return undefined;
    }
    let m = KIN_MOVEMENT_TABLE[kin];
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

function getInnateAbilities(kin) {
    const abilities = [];
    if (typeof KIN_INNATE_ABILITY[kin] === 'string') {
        abilities.push(KIN_INNATE_ABILITY[kin]);
    } else {
        abilities.push(...KIN_INNATE_ABILITY[kin]);
    }
    return abilities;
}

function calcBasicSkillChance(char, skill) {
    const attr = SKILL_ATTR[skill];
    const attrValue = char[attr];
    return calcSkillChance(attrValue, char.trainedSkills.includes(skill));
}

function calcWeaponSkillChance(char, skill) {
    const attr = SKILL_ATTR[skill];
    const attrValue = char[attr];
    return calcSkillChance(attrValue, char.trainedSkills.includes(skill));
}

function getHeroicAbility(profession) {
    return randomItem(PROFESSION_HEROIC_ABILITY[profession]);
}

function getRandomMemento() {
    const memento = randomItem(RANDOM_MEMENTO_TABLE);
    if (typeof memento === 'string') {
        return memento;
    } else {
        return randomItem(memento);
    }
}

function getRandomAppearance() {
    return randomItem(RANDOM_APPEARANCE_TABLE);
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

function calcSkillChance(attrVal, trained) {
    if (trained) {
        return calcBaseChance(attrVal) * 2;
    } else {
        return calcBaseChance(attrVal);
    }
}

function getRandomTrainedSkills(profession, age) {
    if (profession && age) {
        const trainedSkills = [];
        const numTrainedProf = AGE_TRAINED_SKILL[age]?.prof
        const numTrainedFree = AGE_TRAINED_SKILL[age]?.free
        trainedSkills.push(...randomNumOutOf(numTrainedProf, PROFESSION_SKILLS[profession]));
        while (trainedSkills.length < numTrainedProf + numTrainedFree) {
            const skill = randomItem(Object.keys(SKILL_ATTR));
            if (!trainedSkills.includes(skill)) {
                trainedSkills.push(skill);
            }
        }
        return trainedSkills;
    } else {
        return [];
    }
}
