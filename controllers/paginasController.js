import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimonial.js';

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    try {        
        const viajes = await Viaje.findAll();
    
        res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        console.log(testimoniales);

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales                            
        });        
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}