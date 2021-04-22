const BandList = require("./BandList");


class Sockets {

    constructor( io ) {

        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            
            console.log('client online');            

            socket.emit('current_band_list', this.bandList.getBands() );

            socket.on('votar', (id)=>{
                this.bandList.incrementVotes(id);
                this.io.emit('current_band_list', this.bandList.getBands() );
            })

            socket.on('borrar', (id)=>{
                this.bandList.removeBand(id);
                this.io.emit('current_band_list', this.bandList.getBands() );
            })

            socket.on('nuevo_nombre', ({id, nombre})=>{
                this.bandList.changeName(id,nombre);
                this.io.emit('current_band_list', this.bandList.getBands() );
            })

            socket.on('nueva_band', ( nombre )=>{
                this.bandList.addBand(nombre);
                this.io.emit('current_band_list', this.bandList.getBands() );
            })
                    
        });
    }


}


module.exports = Sockets;