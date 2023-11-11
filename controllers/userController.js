const jsonwebtoken = require("jsonwebtoken");

const jwt = require('jsonwebtoken');

const User = require("../models/User");
const config = require('../config/global');

exports.crearUsuario = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User(
            {
                username,
                email,
                password
            }
        );

        user.password = await user.encryptPassword(user.password)
        await user.save();

        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })

        res.json({auth: true, token})

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario = async (req , res) => {
    const { email, password} = req.body;
    console.log(email, password)

    try {
        const { email, password } = req.body;
        const usr = await User.findOne({email: email});

        if(!user){
            return res.status(404).send("El usuario no existe");
        }
        const validatePassword = await user.validatePassword(password);

        if(!validatePassword){
            return res.status(401).json({auth: false, token: null});
        }
        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });

        res.json({auth: true, token})
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.actualizarProducto = async (req, res) => {
    try{
    
    
    const { _id, producto, categoria, ubicacion, precio } = new Producto(req.body);
    let products = await Producto.findById(req.params.id);
    
    
    if(!products){
    res.status(404).json({ msg: 'No existe el producto'});
    }
    
    
    producto._id = id;
    products.producto = producto;
    products.categoria = categoria;
    products.ubicacion = ubicacion;
    products.precio = precio;
    
    
    console.log(products)
    
    
    products = await Producto.findOneAndUpdate({ _id: req.params.id}, products, {new: true});
    res.json(products);
    
    
    } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error')
    }
    }
    

