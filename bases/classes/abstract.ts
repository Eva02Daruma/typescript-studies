(() => {

    abstract class Pokemon {
        constructor(
            public name: string,
            public dexNumber: number
        ) { }
    }

    class Legendary extends Pokemon {
        showOff() {
            return 'A Legendary Pokemon has Appear !!!';
        }
    }
    class Ultraent extends Pokemon {
        openPortal() {
            return 'An Ultra-ent Portal has opened !!!';
        }
    }

    const genesect = new Legendary('Genesect', 649);
    const tapukoko = new Ultraent('Tapu-koko', 800);

    // console.log(genesect.showOff());
    // console.log(tapukoko.openPortal());

    const printName = (character: Pokemon) => {
        console.log(character.name);
    }

    // printName(genesect)

})()