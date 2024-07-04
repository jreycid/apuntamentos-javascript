/**
 * Crea unha función que calcule a resolución dun dispositivo
 * tendo en conta as seguintes normas:
 * 
 * Parámetros: ancho x alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function nomeResolucion (ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return '8k';
    }else if (ancho >= 3840 && alto >= 2160){
        return '4k';
    }else if (ancho >= 2560 && alto >= 1440){
        return 'WQHD';
    }else if (ancho >= 1920 && alto >= 1080){
        return 'FHD';
    }else if (ancho >= 1280 && alto >= 720){
        return 'HD';
    }else{
        return 'Resolucion Desconhecida';
    }
}

let nombre = nomeResolucion(1925, 1085);
console.log(nombre);