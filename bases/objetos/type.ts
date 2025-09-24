

(()=>{

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string;

    }

    let flash: Hero= {
        name:'barry allen',
        age: 24,
        powers: ['Super fast','wow time traveling'],
        
    }

     let superman: Hero = {
        name:'clark kent',
        age: 60,
        powers: ['high speed'],
        getName() {
            return this.name;
        }
    }



})()