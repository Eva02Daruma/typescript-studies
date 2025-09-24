"use strict";
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
//# sourceMappingURL=args_required.js.map