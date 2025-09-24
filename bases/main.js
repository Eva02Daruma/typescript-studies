"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var mugiwaras = {
        luffy: 'Fighter',
        chopper: 'Doctor',
        zoro: 'Sworduser',
        alive: true,
        reward: 1111
    };
    var printMugiwara = function (_a) {
        var zoro = _a.zoro, resto = __rest(_a, ["zoro"]);
        console.log(zoro, resto);
    };
    var mugiwarasArr = ['luffy', 'nami', 'sanji'];
    var captain = mugiwarasArr[0], nami = mugiwarasArr[1];
})();
(function () {
    var sora = {
        name: 'Sora',
        origin: 'Kingdom Hearts',
        weapon: 'Keyblade',
        power: 100
    };
    var goofy = {
        name: 'Goofy the dog',
        origin: 'disney',
        weapon: 'Shield',
        power: 70
    };
    var donald = {
        name: 'Donald duck',
        origin: 'Disney',
        weapon: 'Magic wand',
        power: 40
    };
    var cloud = {
        name: 'Cloud',
        origin: 'Final Fantasy',
        weapon: 'Big Sword',
        power: 125
    };
    var hearts = [sora, goofy, cloud, donald];
    for (var _i = 0, hearts_1 = hearts; _i < hearts_1.length; _i++) {
        var heart = hearts_1[_i];
    }
})();
(function () {
    var a = 'fernando';
    var getName = function () {
    };
})();
(function () {
    var Pokemon = (function () {
        function Pokemon(name, dexNumber) {
            this.name = name;
            this.dexNumber = dexNumber;
        }
        return Pokemon;
    }());
    var Legendary = (function (_super) {
        __extends(Legendary, _super);
        function Legendary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Legendary.prototype.showOff = function () {
            return 'A Legendary Pokemon has Appear !!!';
        };
        return Legendary;
    }(Pokemon));
    var Ultraent = (function (_super) {
        __extends(Ultraent, _super);
        function Ultraent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Ultraent.prototype.openPortal = function () {
            return 'An Ultra-ent Portal has opened !!!';
        };
        return Ultraent;
    }(Pokemon));
    var genesect = new Legendary('Genesect', 649);
    var tapukoko = new Ultraent('Tapu-koko', 800);
    var printName = function (character) {
        console.log(character.name);
    };
})();
(function () {
    var Musician = (function () {
        function Musician(name, artist_name, music_genre) {
            this.name = name;
            this.artist_name = artist_name;
            this.music_genre = music_genre;
        }
        Musician.getAvgAge = function () {
            return this.name;
        };
        Musician.prototype.bio = function () {
            return "".concat(this.artist_name, " (").concat(this.music_genre, ")");
        };
        Musician.avgAge = 30;
        return Musician;
    }());
    var arca = new Musician('alejandra', 'Arca', 'trap');
    var porter = new Musician('porter', 'Porter Robinson', 'Hyper Pop');
})();
(function () {
    var Musician = (function () {
        function Musician(name, artist_name, music_genre) {
            this.name = name;
            this.artist_name = artist_name;
            this.music_genre = music_genre;
        }
        Musician.prototype.getFullName = function () {
            return "".concat(this.name, " ").concat(this.artist_name);
        };
        return Musician;
    }());
    var VideogameDeveloper = (function (_super) {
        __extends(VideogameDeveloper, _super);
        function VideogameDeveloper(name, artist_name, isIndie, music_genre) {
            var _this = _super.call(this, name, artist_name, music_genre) || this;
            _this.name = name;
            _this.artist_name = artist_name;
            _this.isIndie = isIndie;
            _this.music_genre = music_genre;
            return _this;
        }
        Object.defineProperty(VideogameDeveloper.prototype, "fullName", {
            get: function () {
                return "".concat(this.name, " - ").concat(this.artist_name);
            },
            set: function (name) {
                if (name.length <= 3) {
                    throw new Error('El nombre debe ser mayor de 3 caracteres.');
                }
                this.name = name;
            },
            enumerable: false,
            configurable: true
        });
        VideogameDeveloper.prototype.getFullNameDesdeVideogameDeveloper = function () {
        };
        return VideogameDeveloper;
    }(Musician));
    var toby_fox = new VideogameDeveloper('toby fox', 'Undertale creator', true, 'Game music Compositor');
    toby_fox.fullName = 'delta';
})();
(function () {
    var Apocalipsis = (function () {
        function Apocalipsis(name) {
            this.name = name;
        }
        Apocalipsis.callApocalipsis = function () {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('bla blu blo');
            }
            return Apocalipsis.intance;
        };
        return Apocalipsis;
    }());
    var apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'que', 'kent');
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '----').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '----');
        }
    };
    var name = fullName('Tony', 'chopper', true);
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado!"; };
    var myFunction;
    myFunction = 10;
    myFunction = addNumbers;
    myFunction = greet;
    myFunction = saveTheWorld;
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'batiseñal activada';
    };
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'barry allen',
        age: 24,
        powers: ['Super fast', 'wow time traveling'],
    };
    var superman = {
        name: 'clark kent',
        age: 60,
        powers: ['high speed'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var client = {
        name: 'Laura',
        age: 25,
        address: {
            id: 125,
            zip: '33223432',
            city: 'Santiago'
        }
    };
    var client2 = {
        name: 'Zaf',
        age: 30,
        address: {
            id: 925,
            zip: '3545432',
            city: 'Santiago'
        }
    };
})();
(function () {
    var flash = {
        name: 'barry allen',
        age: 24,
        powers: ['Super fast', 'wow time traveling']
    };
    flash = {
        name: 'otro nombre',
        age: 12,
        powers: ['dddd'],
        getNombre: function () {
            return this.name;
        }
    };
})();
(function () {
    var flash = {
        name: 'barry allen',
        age: 24,
        powers: ['Super fast', 'wow time traveling'],
    };
    var superman = {
        name: 'clark kent',
        age: 60,
        powers: ['high speed'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = 'Laura';
    myCustomVariable = 20;
    myCustomVariable = {
        name: 'bruce',
        age: 43,
        powers: ['Idk']
    };
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
})();
(function () {
    var avengers = 10;
    var villans = 20;
    if (avengers < villans) {
    }
    else {
    }
    avengers = Number('55A');
})();
//# sourceMappingURL=main.js.map