(()=> {
    const fullName = ( firstName:string , lastName?:string , upper:boolean = false ): string => {
        
        if (!firstName){
            throw new Error('Nombre requerido')
        }

        if (upper) {
            return `${firstName} ${lastName || '----' }`.toUpperCase();
        }else{
            return `${firstName} ${lastName || '----' }`
        }
        
    }

    const name = fullName('Tony', 'chopper', true);
    console.log({name}) 

})()