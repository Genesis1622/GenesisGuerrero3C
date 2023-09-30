/* class Empleados: es una subclase de la clase principal, la cual hereda los datos de las clase "Personas" y además se encarga de proveer 
/ estos datos y los datos (anioCorporacion, numeroDespachoAsignado) a sus subclases hijas que son "Profesores" y "PersonalServicio".
*/
import { Personas } from "./Personas";
export class Empleados extends Personas{
    private _anioCorporacion: number;
    public get anioCorporacion(): number {
        return this._anioCorporacion;
    }
    public set anioCorporacion(value: number) {
        this._anioCorporacion = value;
    }
    private _numeroDespachoAsignado: number;
    public get numeroDespachoAsignado(): number {
        return this._numeroDespachoAsignado;
    }
    public setNumeroDespachoAsignado(value: number) {
        this._numeroDespachoAsignado = value;
    }
    constructor(nombre:string, apellidos:string, identificacion:number, estadoCivil:string, anioCorporacion:number, numeroDespachoAssignado:number){
        super(nombre, apellidos, identificacion, estadoCivil);
        this._anioCorporacion= anioCorporacion;
        this._numeroDespachoAsignado= numeroDespachoAssignado;
    }
    imprimir(){
        return `El/La empleado/a ${this.nombre} ${this.apellidos} con cédula de identidad ${this.identificacion} y estado civil ${this.estadoCivil}, ingresó a la corporación de la facultad en el año ${this._anioCorporacion} y se le asignó el despacho # ${this.numeroDespachoAsignado}.`;
    }
}