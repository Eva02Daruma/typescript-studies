(()=>{

    type Mugiwaras = {
        luffy: string;
        chopper: string;
        zoro: string;
        alive: boolean;
        reward: number;

    }

    const mugiwaras = {
        luffy: 'Fighter',
        chopper: 'Doctor',
        zoro: 'Sworduser',
        alive: true,
        reward: 1111
    }

    // const {zoro, reward} = mugiwaras
    // console.log(zoro.toUpperCase(),reward.toFixed(2))
    const printMugiwara = ({zoro, ...resto}:Mugiwaras) => {
        console.log(zoro , resto)

    }

    // printMugiwara(mugiwaras);

    const mugiwarasArr = ['luffy','nami','sanji'];

    const [captain, nami, ] = mugiwarasArr;
    console.log({nami,captain})



})()