 /* class Personas: es la clase principal y la cual se encarga de proveer los datos (nombre, apellidos, identificacion Y estadoCivil)
/ a las clases hijas, que en este caso son "Empleados", "Profesores", "PersonalServicio" y "Estudiantes". 
*/
export class Personas{
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _apellidos: string;
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    private _identificacion: number;
    public get identificacion(): number {
        return this._identificacion;
    }
    public set identificacion(value: number) {
        this._identificacion = value;
    }
    private _estadoCivil: string;
    public get estadoCivil(): string {
        return this._estadoCivil;
    }
    public setEstadoCivil(value: string) {
        this._estadoCivil = value;
    }
    constructor(nombre:string, apellidos:string, identificacion:number, estadoCivil:string){
        this._nombre= nombre;
        this._apellidos= apellidos;
        this._identificacion= identificacion;
        this._estadoCivil= estadoCivil;
    }
    imprimir(){
        return `Actualmente el estado civil de ${this.nombre} ${this.apellidos} con cédula de identidad ${this.identificacion} es: ${this.estadoCivil}.`;   
    }
}