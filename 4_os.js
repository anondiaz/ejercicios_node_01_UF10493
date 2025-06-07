// En os hay funciones para obtener información del sistema operativo
import {freemem, totalmem, cpus, hostname, release, userInfo} from 'os';


//freemem devuelve la cantidad de memoria libre en bytes
console.log("Memoria libre : ", (freemem()/1024/1024/1024).toFixed(2) + ' GB libres');
console.log("Memoria total : ", (totalmem()/1024/1024/1024).toFixed(2) + ' GB totales');
console.log("Cantidad de CPUs : ", cpus().length + ' Núcleos del procesador');
console.log('Modelo del procesador :', cpus()[0].model);
console.log('Nombre : ', hostname());
console.log('Versión del kernel : ', release());
console.log('Usuario actual : ', userInfo().username);

