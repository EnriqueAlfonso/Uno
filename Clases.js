export function Automovil (uno, dos, tres, cuatro, cinco)
{
    this.marca = uno;
    this.modelo = dos;
    this.anio = tres;
    this.kms = cuatro;
    this.color = cinco;
    // 
    function retornar ()
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
        this.mayor = tres;
    }
    retornar ()
    {
        if (this.mayor) // this.mayor === true
        {
            return "Ingresar.";
        }
        else {return "Prohibido ingresar";}
    }
}
