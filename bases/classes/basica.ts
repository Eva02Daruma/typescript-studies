(()=>{

    class Musician {
        // private name: string = '';
        // static avgAge: number = 30;
        // public artist_name: string = '';
        // public music_genre: string = '';
        static avgAge: number = 30;
        static getAvgAge(){
            return this.avgAge;
        }

        constructor( 
            private name:string,
            public artist_name: string,
            public music_genre: string,
        ) { }

        public bio() {
            return `${this.artist_name} (${this.music_genre})`
        }
    }
    const arca: Musician = new Musician('alejandra','Arca','trap');
    const porter: Musician= new Musician('porter','Porter Robinson','Hyper Pop')

    // console.log(arca)
    // console.log(arca.bio(), porter.bio())
    // console.log(Musician.getAvgAge())

})()