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
    console.log({ nami: nami, captain: captain });
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
        console.log(heart.weapon, heart.power);
    }
})();
(function () {
    var a = 'fernando';
    console.log(a);
    var getName = function () {
        console.log('viejo oldname');
    };
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
        console.log("Batiseñal activada");
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
    console.log({ superman: superman });
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
    console.log({ name: name });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado!"; };
    var myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log('laura');
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
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
    console.log(flash.getNombre);
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
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'bruce',
        age: 43,
        powers: ['Idk']
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : 'false';
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
//# sourceMappingURL=main.js.map