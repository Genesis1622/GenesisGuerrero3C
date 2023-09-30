/* class Estudiantes: es una de las clases que hereda los datos otorgados por la clase principal llamada "Personas", además, 
también tiene sus propios métodos.
*/
import { Personas } from "./Personas";
export class Estudiantes extends Personas{
    private _curso: string;
    public get curso(): string {
        return this._curso;
    }
    public setCurso(value: string) {
        this._curso = value;
    }
    constructor(nombre:string, apellidos:string, identificacion:number, estadoCivil:string, curso:string){
        super(nombre, apellidos, identificacion, estadoCivil);
        this._curso= curso;
    }
    imprimir(){
        return `El/La estudiante ${this.nombre} ${this.apellidos} con cédula de identidad ${this.identificacion} y estado civil ${this.estadoCivil}, se encuentra matriculado/a en el ${this.curso} nivel.`;
    }
}