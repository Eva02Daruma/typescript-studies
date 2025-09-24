(()=>{

    type Hearts = {
        name: string;
        origin: string;
        weapon: string;
        power: number;
        defense?: number;
        magic?: number;
    }

    const sora:Hearts = {
        name: 'Sora',
        origin:'Kingdom Hearts',
        weapon:'Keyblade',
        power: 100
    }

    const goofy:Hearts = {
        name: 'Goofy the dog',
        origin:'disney',
        weapon:'Shield',
        power: 70
    }

    const donald:Hearts = {
        name: 'Donald duck',
        origin:'Disney',
        weapon:'Magic wand',
        power:40
    }

    const cloud:Hearts = {
        name: 'Cloud',
        origin:'Final Fantasy',
        weapon:'Big Sword',
        power: 125
    }
    
    const hearts: Hearts[] = [sora,goofy,cloud,donald];

    for (const heart of hearts) {
        // console.log(heart.weapon, heart.power);
        
    }




})()