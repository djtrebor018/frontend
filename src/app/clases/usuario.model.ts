export class Usuario{
  constructor(
    public Usuario:string,
    public contraseña:string,
    public Nombre:string,
    public Apellido:string,
    public Email:string,
    public Cedula:string,
    public Role:number = 0,

  ){}
}
