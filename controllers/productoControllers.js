const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try{
        const producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try{
        const productos = await Producto.find();
        res.json(producto);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}