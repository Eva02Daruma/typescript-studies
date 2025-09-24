(()=>{


    class Musician {
        constructor( 
            public name:string,
            public artist_name: string,
            public music_genre?: string,
        ) { 
            // console.log('Artista Llamado !!')
        }

        protected getFullName(){
            return `${this.name} ${this.artist_name}`
        }
        
    }

    class VideogameDeveloper extends Musician{

        constructor(
            public name:string,
            public artist_name:string,
            public isIndie:boolean,
            public music_genre?:string,
        ){
            super(name,artist_name,music_genre)
            // console.log('Constructor Videogame Developer Llamado !!!!');

        }

        get fullName(){
            return `${this.name} - ${this.artist_name}`;
        }

        set fullName(name:string){
            if (name.length <= 3){
                throw new Error('El nombre debe ser mayor de 3 caracteres.')
            }
            this.name = name;
        }

        getFullNameDesdeVideogameDeveloper(){
            // console.log(super.getFullName())

        }

    }

    const toby_fox = new VideogameDeveloper('toby fox','Undertale creator',true,'Game music Compositor')

    // console.log(toby_fox)
    // toby_fox.getFullNameDesdeVideogameDeveloper();
    // const nuevoMusico = new Musician('hola','mundo')

    toby_fox.fullName = 'delta';
    // console.log(toby_fox.fullName);




})()