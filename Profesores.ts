/* class Profesores: es la clase que hereda los datos otorgados por la subclase principal llamada "Empleados", adicional a eso también tiene sus
/ propios métodos.
*/
import { Empleados } from "./Empleados";
export class Profesores extends Empleados{
    private _departamento: string;
    public get departamento(): string {
        return this._departamento;
    }
    public setDepartamento(value: string) {
        this._departamento = value;
    }
    constructor(nombre:string, apellidos:string, identificacion:number, estadoCivil:string, anioCorporacion:number, numeroDespachoAsignado:number, departamento:string,){
        super(nombre, apellidos, identificacion, estadoCivil, anioCorporacion, numeroDespachoAsignado);
        this._departamento= departamento;
    }
    imprimir(){
        return `El/La profesor/a ${this.nombre} ${this.apellidos} con cédula de identidad ${this.identificacion} y estado civil ${this.estadoCivil}, ingresó a la corporación de la facultad en el año ${this.anioCorporacion} y se le asignó el despacho # ${this.numeroDespachoAsignado} en el departamento de ${this.departamento}.`;
    }
}
