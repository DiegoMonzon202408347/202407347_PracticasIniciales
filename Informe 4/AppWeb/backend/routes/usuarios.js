const router = require('express').Router()
const db = require('../db')

router.post('/registro', (req,res)=>{
    const {registro_academico,nombres,apellidos,correo,contraseña} = req.body

    db.query('INSERT INTO usuario(registro_academico,nombres,apellidos,correo,contraseña) VALUES (?,?,?,?,?)',
        [registro_academico,nombres,apellidos,correo,contraseña],
        (err,result)=>{
            if(err) return res.send(err)
        res.send({mensaje:"Usuario registrado"})
    })
})

router.post('/login',(req,res)=>{
    const {correo,contraseña} = req.body

    db.query('SELECT * FROM usuario WHERE correo=? AND contraseña=?',
        [correo,contraseña],
        (err,result)=>{

        if(result.length>0)
            res.send(result[0])
        else
            res.send({error:"Credenciales incorrectas"})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.query(
        'SELECT * FROM usuario WHERE id_usuario = ?',
        [id],
        (err, result) => {

        if(err) return res.send(err);

        if(result.length > 0)
        res.send(result[0]);
        else
        res.status(404).send({error:"Usuario no encontrado"});
    })
})

router.get('/:id/cursos', (req, res) => {
    const { id } = req.params;

    db.query(
        `SELECT c.nombre_curso
        FROM curso_aprobado ca
        JOIN curso c ON ca.id_curso = c.id_curso
        WHERE ca.id_usuario = ?`,
        [id],
        (err, result) => {

        if(err) return res.send(err);

        res.send(result);
    })
})

module.exports = router