

(()=>{

    let flash: {name:string,age?:number, powers:string[] ,getNombre?: () => string} = {
        name:'barry allen',
        age: 24,
        powers: ['Super fast','wow time traveling']
    }

    flash = {
        name: 'otro nombre',
        age: 12,
        powers: ['dddd'],
        getNombre(){
            return this.name;
        }

    }

    // console.log(flash.getNombre)



})()