const router = require('express').Router()
const db = require('../db')

router.get('/:id_publicacion',(req,res)=>{
    db.query('SELECT * FROM comentario WHERE id_publicacion=?',
        [req.params.id_publicacion], (err,result)=>{res.send(result)
    })
})

router.post('/crear',(req,res)=>{
    const {id_publicacion,id_usuario,mensaje} = req.body

    db.query(`INSERT INTO comentario(id_publicacion,id_usuario,mensaje) VALUES (?,?,?)`,
        [id_publicacion,id_usuario,mensaje],
        (err,result)=>{res.send({mensaje:"Comentario agregado"})
    })
})

module.exports = router