(()=>{


    class Apocalipsis {
        static intance:Apocalipsis;


        private constructor( public name: string){


        }

        static callApocalipsis(): Apocalipsis{
            if (!Apocalipsis.intance){
                Apocalipsis.intance = new Apocalipsis('bla blu blo');

            }

            return Apocalipsis.intance

        }

    }

    const apocalipsis = Apocalipsis.callApocalipsis()

    console.log(apocalipsis);


})()