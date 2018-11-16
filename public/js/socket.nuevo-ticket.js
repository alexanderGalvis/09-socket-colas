
//Comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect',conectado =>{
    console.log('Conectado con el server');
    
});

socket.on('disconnect',conectado =>{
    console.log('Desconectado con el server');
});

socket.on('estadoActual', function(res) {
    console.log(res);
    
    label.text(res.actual);
});

$('button').on('click',function(){
    socket.emit('siguienteTicket',null,function(siguienteTicket){
        label.text(siguienteTicket);
    });
});