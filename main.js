class repuesto{
    constructor(id,nombre,cantidad){
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.cantidad = parseInt(cantidad);
        this.mostrar = alert(id,nombre,cantidad)
        this.entregado = false;
    }
    entregado(){
    this.entregado = true;
    }
}

const repuestos = []

repuestos.push(new repuesto(1,"Placa de Video",3))
repuestos.push(new repuesto(2, "Fuente para WS", 2))
repuestos.push(new repuesto(3, "Cabezales", 4))


let buscarRepuesto = repuestos.find(repuesto=>repuesto === "Cabezales")
console.log(buscarRepuesto);

