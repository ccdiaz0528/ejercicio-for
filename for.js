var edad=0, estadoCivil=0, estatura=0, sexo=0, cantidadPersonas=0, contadorPersonas=0, 
    acumuladorEdad=0, acumuladorEstatura=0, porcentajePersonas=0, promedioEdad=0, promedioEstatura=0;

cantidadPersonas = parseInt(prompt("Ingrese el número de personas con las que se realizará el estudio"));
for (let numeroPersona = 1; numeroPersona <= cantidadPersonas; numeroPersona++) {
    edad = parseInt(prompt("Ingrese la edad de la persona " + numeroPersona));
    estatura = parseInt(prompt("Ingrese la estatura de la persona "  +numeroPersona + " en centimetros"));
    estadoCivil = parseInt(prompt("Ingrese el estado civil de la persona " +numeroPersona + " 1. Soltero 2.Casado"));
    sexo = parseInt(prompt("Ingrese el sexo de la persona " + numeroPersona + " 1.Hombre 2.Mujer"));
    if ((edad>=18)&& (estatura>170)&&(estadoCivil==1)&&(sexo==1)) {
        contadorPersonas=contadorPersonas+1;
        acumuladorEdad=acumuladorEdad+edad;
        acumuladorEstatura=acumuladorEstatura+estatura;
    }
    
}
porcentajePersonas=(contadorPersonas/cantidadPersonas)*100;
promedioEdad=acumuladorEdad/contadorPersonas;
promedioEstatura=acumuladorEstatura/contadorPersonas;

alert("El porcentaje de personas que cumplen con las 4 condiciones es " +porcentajePersonas);
alert("El promedio de edad de personas que cumplen con las 4 condiciones es " +promedioEdad);
alert("El promedio de estatura de personas que cumplen con las 4 condiciones es " +promedioEstatura);