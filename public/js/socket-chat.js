var socket = io();


var params = new URLSearchParams(window.location.search)

if (!params.has("nombre") || !params.has("nombre")) {
    window.location = "index.html"
    throw new Error("You need to have a name or room")

}
var usuario = {
    nombre: params.get("nombre"),
    sala: params.get("sala")
}


socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit("entrarChat", usuario, function(res) {
        console.log("Usuarios conectados", res)
    })

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('enviarMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});


// Escuchar cuando un usuario entra o sale

socket.on('listaPersonas', function(mensaje) {
    console.log(mensaje);
});


socket.on("mensajePrivado", function(mensaje) {
    console.log("mensaje Privado:", mensaje)
})