import { Automovil, Usuario } from "./Clases.js";

let Automovil_01 = new Automovil ("VW", "Amarok", 2022, 50000, "Arena");

let Usuario_01 = new Usuario ("Fighter_83", "Acoyte_688_6_A", 40);

console.log();
console.log(Automovil_01.marca + "\n" + Automovil_01.modelo);
console.log();
console.log("KMS: " + Automovil_01.kms + "\n" + Automovil_01.retornar());
console.log();
console.log(Usuario_01.nick);
console.log();
console.log(Usuario_01.password);
console.log();
console.log("Edad: " + Usuario_01.edad + "\n" + Usuario_01.retornar());
console.log();

/* ------------------------------------------------------------------------------------------------ */
