const TEMPLATE_PDF = {
    'DB_DE_Charakterbogen_ausfuellbar_v0.8': 'DB_DE_Charakterbogen_ausfuellbar_v0.8.pdf',
    'DB_DE_Charakterbogen_ausfuellbar_farbe_v0.9': 'DB_DE_Charakterbogen_digital_interaktiv (0.9).pdf',
    'DB_DE_Charakterbogen_ausfuellbar_sw_v0.9': 'DB_DE_Charakterbogen_digital-sw_interaktiv (0.9).pdf'
}

const FIELD = {
    'DB_DE_Charakterbogen_ausfuellbar_v0.9': {

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

        DAMAGE_BONUS_STR: 'Schadensbonus STÄ',
        DAMAGE_BONUS_AGL: 'Schadensbonus GEW',
        MOVEMENT: 'Bewegung',

        ABILITY: nr => `Talente & Zauber ${nr+1}`,

        GOLD: 'Goldstücke',
        SILVER: 'Silberstücke',
        COPPER: 'Kupferstücke',

        SKILL_CHECK: {
            'Acrobatics': 'F1',
            'Evade': 'F2',
            'Beast Lore': 'F3',
            'Performance': 'F4',
            'Spot Hidden': 'F5',
            'Bartering': 'F6',
            'Sleight of Hand': 'F7',
            'Languages': 'F8',
            'Crafting': 'F9',
            'Healing': 'F10',
            'Sneaking': 'F11',
            'Hunting & Fishing': 'F12',
            'Myths & Legends': 'F13',
            'Riding': 'F14',
            'Swimming': 'F15',
            'Seamanship': 'F16',
            'Bluffing': 'F17',
            'Persuasion': 'F18',
            'Awareness': 'F19',
            'Bushcraft': 'F20',
        },
        SKILL_VALUE: {
            'Acrobatics': 'Fertigkeit 1',
            'Evade': 'Fertigkeit 2',
            'Beast Lore': 'Fertigkeit 3',
            'Performance': 'Fertigkeit 4',
            'Spot Hidden': 'Fertigkeit 5',
            'Bartering': 'Fertigkeit 6',
            'Sleight of Hand': 'Fertigkeit 7',
            'Languages': 'Fertigkeit 8',
            'Crafting': 'Fertigkeit 9',
            'Healing': 'Fertigkeit 10',
            'Sneaking': 'Fertigkeit 11',
            'Hunting & Fishing': 'Fertigkeit 12',
            'Myths & Legends': 'Fertigkeit 13',
            'Riding': 'Fertigkeit 14',
            'Swimming': 'Fertigkeit 15',
            'Seamanship': 'Fertigkeit 16',
            'Bluffing': 'Fertigkeit 17',
            'Persuasion': 'Fertigkeit 18',
            'Awareness': 'Fertigkeit 19',
            'Bushcraft': 'Fertigkeit 20',
        },
        WEAPON_SKILL_CHECK: {
            Crossbows: 'KF1',
            Axes: 'KF2',
            Bows: 'KF3',
            Hammers: 'KF4',
            Knives: 'Kf6',
            Brawling: 'KF7',
            Slings: 'KF6',
            Swords: 'KF5',
            Spears: 'KF9',
            Staves: 'KF8',
        },
        WEAPON_SKILL_VALUE: {
            Crossbows: 'Kampffertigkeiten 1',
            Axes: 'Kampffertigkeiten 2',
            Bows: 'Kampffertigkeiten 3',
            Hammers: 'Kampffertigkeiten 4',
            Knives: 'Kampffertigkeiten 5',
            Brawling: 'Kampffertigkeiten 6',
            Slings: 'Kampffertigkeiten 7',
            Swords: 'Kampffertigkeiten 8',
            Spears: 'Kampffertigkeiten 9',
            Staves: 'Kampffertigkeiten 10',
        },
        SECONDARY_SKILL_CHECK: nr => `S${nr+1}`,
        SECONDARY_SKILL_VALUE: nr => `SF ${nr+1}`,
        SECONDARY_SKILL_DESCR: nr => `Sekundäre Fertigkeiten ${nr+1}`,

        ENCUMBRANCE: 'Traglast',
        INVENTORY: nr => `Inventar ${nr+1}`,
        MEMENTO: nr => `Memento ${nr+1}`,
        TINY_ITEMS: 'Kleinkram',

        ARMOR_RATING: 'Rüstungswert',
        ARMOR: 'Rüstung',
        BANE_ON_SNEAKING: '',
        BANE_ON_EVADE: '',
        BANE_ON_ACROBATICS: '',

        HELMET_RATING: 'Rüstungswert 2',
        HELMET: 'Helm',
        BANE_ON_AWARENESS: '',
        BANE_ON_RANGED_ATTACKS: '',

        WEAPON_SHIELD: nr => `Waffe ${nr+1}`,
        GRIP: nr => `Waffe ${nr+1}-${nr === 1 ? 1 : 0}`,
        RANGE: nr => `Waffa ${nr+1}-${nr === 1 ? 2 : 1}`,
        DAMAGE: nr => `Waffe ${nr+1}-${nr === 1 ? 3 : 2}`,
        DURABILITY: nr => `Waffe ${nr+1}-${nr === 1 ? 4 : 3}`,
        FEATURES: nr => `Waffe ${nr+1}-${nr === 1 ? 5 : 4}`,

        ROUND_REST: 'SR',
        STRETCH_REST: 'KR',
        WP: 'WP',
        HP: 'TP',

    },

    get 'DB_DE_Charakterbogen_ausfuellbar_farbe_v0.9'() {
        return {
          ...this['DB_DE_Charakterbogen_ausfuellbar_v0.9']
        };
    },

    get 'DB_DE_Charakterbogen_ausfuellbar_sw_v0.9'() {
        return {
          ...this['DB_DE_Charakterbogen_ausfuellbar_v0.9']
        };
    },
};
