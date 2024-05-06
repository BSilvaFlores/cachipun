var numeroJuegos = parseInt(prompt("¿Cuántas veces desea jugar al cachipún? Escriba un número"));

for( i = 1 ; i <= numeroJuegos ; i++){
    var turnoJugador = prompt("Su turno, escriba el numero de estas 3 opciones: 1.PIEDRA - 2.PAPEL - 3.TIJERAS"); 

    if(turnoJugador == 1){
        turnoJugador = 0;
    }
    if(turnoJugador == 2){
        turnoJugador = 1;
    }
    if(turnoJugador == 3){
        turnoJugador = 2;
    }

    var turnoMaquina = Math.floor(Math.random()*3);

    if(turnoJugador == 0 & turnoMaquina == 0 || turnoJugador == 1 & turnoMaquina == 1 || turnoJugador == 2 & turnoMaquina == 2){
        alert("Han empatado");
        document.write("EMPATE </br>");

    }else if(turnoJugador == 0 & turnoMaquina == 2 || turnoJugador == 1 & turnoMaquina == 0 || turnoJugador == 2 & turnoMaquina == 1){
        alert("¡Felicidades, has ganado!");
        document.write("GANADOR: JUGADOR </br>");
        
    }else if(turnoMaquina == 0 & turnoJugador == 2 || turnoMaquina == 1 & turnoJugador == 0 || turnoMaquina == 2 & turnoJugador == 1){
        alert("Lo siento:C, has perdido.");
        document.write("GANADOR: MÁQUINA </br>");
    }


    if(turnoJugador == 0){
        turnoJugador = "PIEDRA";
    }else if(turnoJugador == 1){
        turnoJugador = "PAPEL";
    }else if(turnoJugador == 2){
        turnoJugador = "TIJERAS";
    }

    if(turnoMaquina == 0){
        turnoMaquina = "PIEDRA";
    }else if(turnoMaquina == 1){
        turnoMaquina = "PAPEL";
    }else if(turnoMaquina == 2){
        turnoMaquina = "TIJERAS";
    }

    document.write(`Jugador: ${turnoJugador}, Máquina: ${turnoMaquina}</br></br>`)

}
