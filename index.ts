import { Personas } from "./Personas";
import { Empleados } from "./Empleados";
import { Profesores } from "./Profesores";
import { PersonalServicio } from "./PersonalServicio";
import { Estudiantes } from "./Estudiantes";

const  personas = new Personas("Génesis", "Guerrero", 1317025698, "Soltera");
const empleados = new Empleados("Jonathan", "Escobar", 1753432226, "Divorciado", 2013, 512);
const profesores = new Profesores("Edgardo", "Panchana", 134567890, "Casado", 2010, 500, "Informática");
const personalServicio = new PersonalServicio("Paula", "Alvia", 1311582686, "Unión libre", 2018, 36, "Secretaría");
const estudiantes = new Estudiantes("José", "Vinces", 7004322486, "Soltero", "3er");

console.log (personas.imprimir());
personas.setEstadoCivil("Casada")
console.log (personas.imprimir());
personas.setEstadoCivil("Divorciada")
console.log (personas.imprimir());
personas.setEstadoCivil("Viuda")
console.log (personas.imprimir());
personas.setEstadoCivil("Unión libre")

console.log (estudiantes.imprimir());
estudiantes.setCurso("1er")
console.log(estudiantes.imprimir());
estudiantes.setCurso("2do")
console.log(estudiantes.imprimir());
estudiantes.setCurso("3er")

console.log(empleados.imprimir());
empleados.setNumeroDespachoAsignado(19)
console.log(empleados.imprimir());
empleados.setNumeroDespachoAsignado(30)

console.log(profesores.imprimir());
profesores.setDepartamento("Laboratorio 102")

console.log(personalServicio.imprimir());
personalServicio.setSeccionAsignada("Secretaría")
