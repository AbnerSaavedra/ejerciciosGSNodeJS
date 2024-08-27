const express = require('express')
const bodyParse = require('body-parser');

const app = express()

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}))

const port = 3003

app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})

/*

{
        id: 1,
        title: "Hacer tarea",
        descripcion: "Hacer tarea",
        estatus: true
    },
    {
        id: 2,
        title: "Hacer tarea 2",
        descripcion: "Hacer tarea 2",
        estatus: true
    }

*/

var tareas = [

]

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

app.post('/agregar', (req, res)=>{
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