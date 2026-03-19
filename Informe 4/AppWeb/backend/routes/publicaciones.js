const router = require('express').Router()
const db = require('../db')

router.get('/',(req,res)=>{
    db.query(`SELECT p.*, u.nombres FROM publicacion p 
        JOIN usuario u ON p.id_usuario = u.id_usuario
        ORDER BY fecha DESC`,
        (err,result)=>{res.send(result)
    })
})

router.post('/crear',(req,res)=>{
    const {id_usuario,id_curso,id_catedratico,mensaje} = req.body

    db.query(`INSERT INTO publicacion(id_usuario,id_curso,id_catedratico,mensaje)
        VALUES (?,?,?,?)`,
        [id_usuario,id_curso,id_catedratico,mensaje], 
        (err,result)=>{res.send({mensaje:"Publicación creada"})
    })
})

module.exports = router