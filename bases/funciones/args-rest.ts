(() => {

    const fullName = (firstName:string, ...restArgs: string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark','que','kent');

    // console.log({ superman })

})()