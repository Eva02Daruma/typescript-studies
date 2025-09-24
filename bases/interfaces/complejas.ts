(()=>{

    interface Client {
        name: string;
        age?: number;
        address: Address;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client:Client = {
        name: 'Laura',
        age: 25,
        address: {
            id:125,
            zip:'33223432',
            city:'Santiago'
        }
    }

    const client2:Client = {
        name: 'Zaf',
        age: 30,
        address: {
            id:925,
            zip:'3545432',
            city:'Santiago'
        }
    }

})()