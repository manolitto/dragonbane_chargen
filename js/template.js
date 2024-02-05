const TEMPLATE = {
    'DB_DE_Charakterbogen_ausfuellbar_v0.8': 'DB_DE_Charakterbogen_ausfuellbar_v0.8.pdf'
}

const FIELD = {
    'DB_DE_Charakterbogen_ausfuellbar_v0.8.pdf': {

        PLAYER: 'Gespielt von',
        KIN: 'Volk',
        AGE: 'Alter',
        PROFESSION: 'Beruf',
        WEAKNESS1: 'Schwächen 1',
        WEAKNESS2: 'Schwächen 2',

        NAME: 'Name',

        APPEARANCE: nr => `Erscheinungsbild ${nr+1}`,

        STR: 'STR',
        CON: 'KON',
        AGL: 'GEW',
        INT: 'INT',
        WIL: 'WIL',
        CHA: 'CHA',
        EXHAUSTED: 'A1',
        SICKLY: 'A2',
        DAZED: 'A3',
        ANGRY: 'A4',
        SCARED: 'A5',
        DISHEARTENED: 'A7',

        DAMAGE_BONUS_STR: 'Schadensbonus STR',
        DAMAGE_BONUS_AGL: 'Schadensbonus GEW',
        MOVEMENT: 'Bewegung',

        ABILITY: nr => `Talente & Zauber ${nr+1}`,

        GOLD: 'Goldstücke',
        SILVER: 'Silberstücke',
        COPPER: 'Kupferstücke',

        SKILL_CHECK: {
            'Acrobatics': 'FE1',
            'Evade': 'FE2',
            'Beast Lore': 'FE3',
            'Performance': 'FE4',
            'Spot Hidden': 'FE5',
            'Bartering': 'FE6',
            'Sleight of Hand': 'FE7',
            'Languages': 'FE8',
            'Crafting': 'FE9',
            'Healing': 'FE10',
            'Sneaking': 'FE11',
            'Hunting & Fishing': 'FE12',
            'Myths & Legends': 'FE13',
            'Riding': 'FE14',
            'Swimming': 'FE15',
            'Seamanship': 'FE16',
            'Bluffing': 'FE17',
            'Persuasion': 'FE18',
            'Awareness': 'FE19',
            'Bushcraft': 'FE20',
        },
        SKILL_VALUE: {
            'Acrobatics': 'Fertigkeiten 1',
            'Evade': 'Fertigkeiten 2',
            'Beast Lore': 'Fertigkeiten 3',
            'Performance': 'Fertigkeiten 4',
            'Spot Hidden': 'Fertigkeiten 5',
            'Bartering': 'Fertigkeiten 6',
            'Sleight of Hand': 'Fertigkeiten 7',
            'Languages': 'Fertigkeiten 8',
            'Crafting': 'Fertigkeiten 9',
            'Healing': 'Fertigkeiten 10',
            'Sneaking': 'Fertigkeiten 11',
            'Hunting & Fishing': 'Fertigkeiten 12',
            'Myths & Legends': 'Fertigkeiten 13',
            'Riding': 'Fertigkeiten 14',
            'Swimming': 'Fertigkeiten 15',
            'Seamanship': 'Fertigkeiten 16',
            'Bluffing': 'Fertigkeiten 17',
            'Persuasion': 'Fertigkeiten 18',
            'Awareness': 'Fertigkeiten 19',
            'Bushcraft': 'Fertigkeiten 20',
        },
        WEAPON_SKILL_CHECK: {
            Crossbows: 'KA1',
            Axes: 'KA2',
            Bows: 'KA3',
            Hammers: 'KA4',
            Knives: 'KA5',
            Brawling: 'KA6',
            Slings: 'KA7',
            Swords: 'KA8',
            Spears: 'KA9',
            Staves: 'KA10',
        },
        WEAPON_SKILL_VALUE: {
            Crossbows: 'KF 1',
            Axes: 'KF 2',
            Bows: 'KF 3',
            Hammers: 'KF 4',
            Knives: 'KF 5',
            Brawling: 'KF 6',
            Slings: 'KF 7',
            Swords: 'KF 8',
            Spears: 'KF 9',
            Staves: 'KF 10',
        },
        SECONDARY_SKILL_CHECK: nr => `S${nr+1}`,
        SECONDARY_SKILL_VALUE: nr => `SF ${nr+1}`,
        SECONDARY_SKILL_DESCR: nr => `Sekundäre Fertigkeiten ${nr+1}`,

        ENCUMBRANCE: 'Traglast',
        INVENTORY: nr => `Inventar ${nr+1}`,
        MEMENTO: nr => `Memento ${nr+1}`,
        TINY_ITEMS: 'Kleinkram',

        ARMOR_RATING: '',
        ARMOR: 'Rüstung',
        BANE_ON_SNEAKING: '',
        BANE_ON_EVADE: '',
        BANE_ON_ACROBATICS: '',

        HELMET_RATING: '',
        HELMET: 'Helm',
        BANE_ON_AWARENESS: '',
        BANE_ON_RANGED_ATTACKS: '',

        WEAPON_SHIELD: nr => `Waffe/Schild ${nr+1}`,
        GRIP: nr => `Griff ${nr+1}`,
        RANGE: nr => `Reichweite ${nr+1}`,
        DAMAGE: nr => `Schaden ${nr+1}`,
        DURABILITY: nr => `Haltbarkeit ${nr+1}`,
        FEATURES: nr => `Merkmale ${nr+1}`,

        ROUND_REST: 'SR',
        STRETCH_REST: 'KR',
        WP: 'WP',
        HP: 'TP',

    }
};
