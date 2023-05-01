export function Automovil (uno, dos, tres, cuatro, cinco)
{
    this.marca = uno;
    this.modelo = dos;
    this.anio = tres;
    this.kms = cuatro;
    this.color = cinco;
    // 
    this.retornar = function ()
    {
        if (this.kms < 100000)
        {
            return "Comprar.";
        }
        else {return "No comprar.";}
    }
}

export class Usuario 
{
    constructor (uno, dos, tres)
    {
        this.nick = uno;
        this.password = dos;
        this.edad = tres;
    }
    retornar ()
    {
        if (this.edad >= 18)
        {
            return "Ingresar.";
        }
        else {return "Prohibido ingresar";}
    }
}
