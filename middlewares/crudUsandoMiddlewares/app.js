const express = require('express')

const app = express()

app.use(express.json())

const port = 7000

app.listen( port ,()=>{
    console.log(`Servidor iniciado en http://locahost:${port}`)
})

var tareas = [

]

function validarRegistroTarea(req, res, next){
    if(req.body.title != ""){
        next()
    }else{
        res.status(403).send('La tarea debe tener un título')
    }
}

app.get('/tareas', (req, res)=>{

    res.status(200).json(tareas)
})

app.get('/tareas/:id', (req, res)=>{
    console.log("Id: ", req.params.id)
    const tarea = tareas.find(t => t.id == req.params.id)
    if(tarea)
        res.status(200).json({tarea: tarea})
    else
        res.status(400).json({mensaje: "Tarea no encontrada"})
})

app.post('/agregar', validarRegistroTarea,(req, res)=>{
    console.log("Post: ", req.body)
    const {title, descripcion, estatus} = req.body
    
    const tarea = {title, descripcion, estatus}

    tarea.id = tareas.length + 1

    tareas.push(tarea);
    res.status(201).json({ message: `Tarea creada exitosamente: ${req.body}` });
})

app.put('/tareas/:id', (req, res)=> {
    const tarea = tareas.find((t) => t.id == req.params.id);

    if(tarea){
        const { title, descripcion, estatus } = req.body
        tarea.title = title;
        tarea.descripcion = descripcion;
        tarea.estatus = estatus;
        res.status(200).json({message: 'Tarea Actualizada exitosamente'})
    }
    else{
        res.status(400).send('Tarea no existe')
    }
})

app.delete('/tareas/:id', (req, res) =>{
    var tarea = tareas.find((t) => t.id == req.params.id);

    if(tarea){
       tareas = tareas.filter(t => t.id != tarea.id);
        res.status(200).json({message: 'Tarea eliminada exitosamente'})
    }
    else{
        res.status(400).send('Tarea no existe')
    }
})