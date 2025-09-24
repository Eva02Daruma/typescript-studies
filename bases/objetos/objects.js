"use strict";
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
//# sourceMappingURL=objects.js.map