var socket = io();

var label1 = $('#lblTicket1');
var label2 = $('#lblTicket2');
var label3 = $('#lblTicket3');
var label4 = $('#lblTicket4');

var escritorio1 = $('#lblEscritorio1');
var escritorio2 = $('#lblEscritorio2');
var escritorio3 = $('#lblEscritorio3');
var escritorio4 = $('#lblEscritorio4');

var lblTickets = [label1,label2,label3,label4];
var lblEscritorios = [escritorio1,escritorio2,escritorio3,escritorio4];

socket.on('estadoActual', function(data) {
    // console.log(data);
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    ultimos4.forEach((element,i) => {
        lblTickets[i].text('Ticket '+ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio '+ultimos4[i].escritorio)
    });
}
