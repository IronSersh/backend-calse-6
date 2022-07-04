//  en ves de glitch para levantar el server usamos heruko
const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080// process.env.PORT ||elemento que devemos colocar para que heroku lo ejecute
app.get ('/', (request,response)=>{//pagina prinsipal
    response.send({msn:'hola sergio'})
})
app.get ('/producto', (request,response)=>{// una pagina del sitio
    response.send([
        {name: "cervesa", precio:100},
        {name:"vino", precio:200}
    ])
})

const server = app.listen(PORT, ()=>{
    console.log(`server activo en puerto ${PORT}...`)
})
server.on ('error', error=> console.log('server error',error))