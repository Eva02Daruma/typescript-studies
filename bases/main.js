"use strict";
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