import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) => {
    // Validar que todos los campos esten llenos
    const { nombre, correo, mensaje } = req.body;

    let errores = [];

    if(nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacio' });
    }
    if(correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio' });
    }
    if(mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' });
    }

    // Revisar por errores
    if(errores.length > 0) {
        const testimoniales = await Testimonial.findAll();
        
        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}
    