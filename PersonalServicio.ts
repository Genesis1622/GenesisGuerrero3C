/* class PersonalServicio: es la clase que hereda los datos otorgados por la subclase principal llamada "Empleados", adicional a eso también
/ tiene sus propios métodos. 
*/
import { Empleados } from "./Empleados";
export class PersonalServicio extends Empleados{
    private _seccionAsignada: string;
    public get seccionAsignada(): string {
        return this._seccionAsignada;
    }
    public setSeccionAsignada(value: string) {
        this._seccionAsignada = value;
    }
    constructor(nombre:string, apellidos:string, identificacion:number, estadoCivil:string, anioCorporacion:number, numeroDespachoAsignado:number, seccionAsignada:string){
        super(nombre, apellidos, identificacion, estadoCivil, anioCorporacion, numeroDespachoAsignado);
        this._seccionAsignada= seccionAsignada;
    }
    imprimir(){
        return `El/La ciudadano/a ${this.nombre} ${this.apellidos} con cédula de identidad ${this.identificacion} y estado civil ${this.estadoCivil}, ingresó a la corporación en el año ${this.anioCorporacion} y se le asignó el despacho # ${this.numeroDespachoAsignado} en la sección ${this.seccionAsignada}.`;
    }
}