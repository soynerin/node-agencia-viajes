import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('inicio', {
        pagina: "Inicio"
    });
    // res.json({ message: 'Hello World!' });
});

router.get('/nosotros', (req, res) => {
    // const viajes = 'Viaje a Argentina';

    // res.render('nosotros', { viajes });
    res.render('nosotros', {
        pagina: "Nosotros"
    });
});

router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: "Viajes"
    });
});

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        pagina: "Testimoniales"
    });
});

router.get('/contacto', (req, res) => {
    res.send('<h1>Contacto</h1>');
});

export default router;