// noinspection SpellCheckingInspection

const I18N_de = {
    // dice bonus
    'DICE_CHARACTER': 'W',
    // kin
    'Human': 'Mensch',
    'Halfling': 'Halbling',
    'Dwarf': simpleGermanGender('Zwerg'),
    'Elf': {m: 'Elf', f: 'Elfe'},
    'Mallard': 'Ente',
    'Wolfkin': 'Wolfsmensch',
    // gender
    'male': 'männlich',
    'female': 'weiblich',
    // profession
    'Artisan': simpleGermanGender('Handwerker'),
    'Bard': {m: 'Barde', f: 'Bardin'},
    'Fighter': simpleGermanGender('Kämpfer'),
    'Hunter': simpleGermanGender('Jäger'),
    'Knight': simpleGermanGender('Ritter'),
    'Mage': simpleGermanGender('Magier'),
    'Mariner': {m: 'Seemann', f: 'Seefrau'},
    'Merchant': simpleGermanGender('Händler'),
    'Scholar': {m: 'Gelehrter', f: 'Gelehrte'},
    'Thief': simpleGermanGender('Dieb'),
    // age
    'young': 'Jung',
    'adult': 'Erwachsen',
    'old': 'Alt',
    // firstname
    'Joruna': {m: 'Jorun', f: 'Joruna'},
    'Tym': {m: 'Tym', f: 'Tymia'},
    'Halvelda': {m: 'Halveld', f: 'Halvelda'},
    'Garmander': {m: 'Garmander', f: 'Garmandera'},
    'Verolun': {m: 'Verolun', f: 'Veroluna'},
    'Lothar': {m: 'Lothar', f: 'Lotharia'},
    'Snappy': {m: 'Schnappi', f: 'Schnappine'},
    'Brine': {m: 'Brino', f: 'Brine'},
    'Cottar': {m: 'Cottar', f: 'Cottar'},
    'Bumble': {m: 'Hummel', f: 'Hummel'},
    'Theoline': {m: 'Theolin', f: 'Theoline'},
    'Tinderrock': {m: 'Zunderfels', f: 'Zunderfelsia'},
    'Halwyld': {m: 'Halwyld', f: 'Halwylda'},
    'Tymolana': {m: 'Tymolan', f: 'Tymolana'},
    'Traut': {m: 'Traut', f: 'Trauta'},
    'Urd': {m: 'Urd', f: 'Urda'},
    'Fermer': {m: 'Fermer', f: 'Fermera'},
    'Arasin': {m: 'Arasin', f: 'Arasina'},
    'Illyriana': {m: 'Illyrian', f: 'Illyriana'},
    'Galvander': {m: 'Galvander', f: 'Galvandera'},
    'Tyrindelia': {m: 'Tyrindel', f: 'Tyrindelia'},
    'Erwilnor': {m: 'Erwilnor', f: 'Erwilnora'},
    'Andremone': {m: 'Andremon', f: 'Andremone'},
    'Qwucksum': {m: 'Qwucksum', f: 'Qwucksuma'},
    'Splats': {m: 'Splats', f: 'Splats'},
    'Moggee': {m: 'Moggee', f: 'Moggee'},
    'Groddy': {m: 'Groddy', f: 'Groddy'},
    'Blisandina': {m: 'Blisandin', f: 'Blisandina'},
    'Hackleswell': {m: 'Hackleswell', f: 'Hackleswella'},
    'Wyld': {m: 'Wyld', f: 'Wylda'},
    'Wolfshadow': {m: 'Wolfschatten', f: 'Wolfschatten'},
    'Lunariem': {m: 'Lunariem', f: 'Lunariem'},
    'Obdurian': {m: 'Obdurian', f: 'Obduriana'},
    'Frostbite': {m: 'Frostbeule', f: 'Frostbeule'},
    'Wuldenhall': {m: 'Wuldenhall', f: 'Wuldenhall'},
    // nicknames
    'Stonehammer': 'Steinhammer',
    'Woodcleaver': 'Holzspalter',
    'Strongfist': 'Starkfaust',
    'Barrelmaker': 'Fassbinder',
    'Bridgebuilder': 'Brückenbauer',
    'Ironmaster': 'Eisenmeister',
    'Odemaker': simpleGermanGender('Odendichter'),
    'Talespinner': 'Fabelspinner',
    'Silvervoice': 'Silberstimme',
    'Gildenclef': 'Gildenmeister',
    'Honeytongue': 'Honigzunge',
    'Rhymesmith': 'Reimeschmied',
    'Gravemaker': 'Grabmacher',
    'Grimjaw': 'Dünsterkinn',
    'Windthaw': 'Windtau',
    'Coldsteel': 'Kaltstahl',
    'The Fearless': 'der Furchtlose',
    'The Butcher': 'der Schlächter',
    // ability
    'Adaptive': 'Anpassungsfähig',
    'Hard To Catch': 'Schwer zu fassen',
    'Unforgiving': 'Nachtragend',
    'Inner Peace': 'Innerer Frieden',
    'Ill-tempered': 'Übellaunig',
    'Webbed Feet': 'Schwimmhäute',
    'Hunting Instincts': 'Jagdinstinkt',
    // heroic ability
    'Master Blacksmith': simpleGermanGender('Meisterschmied'),
    'Master Carpenter': simpleGermanGender('Meistertischler'),
    'Master Tanner': simpleGermanGender('Meistergerber'),
    'Musician': simpleGermanGender('Musiker'),
    'Veteran': simpleGermanGender('Veteran'),
    'Companion': {m: 'Gefährte', f: 'Gefährtin'},
    'Guardian': simpleGermanGender('Beschützer'),
    'Sea Legs': 'Seebeine',
    'Treasure Hunter': simpleGermanGender('Schatzsucher'),
    'Intuition': simpleGermanGender('Hüter'),
    'Backstabbing': 'Hinterhältig',
    // weapon stats
    '1h': '1H',
    '2h': '2H'
};

function simpleGermanGender(name, suffix) {
    return {m: name, f: `${name}${suffix ? suffix : 'in'}`};
}
