//CONST
const express = require('express')
const colors = require('colors')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { application } = require('express')
const { exec, spawn } = require('child_process')
const { stdout, nextTick } = require('process')
const { Console } = require('console')


//SETTINGS
app.set('port', '80') //En comptes d'especificar el port, el fico a una variable per canviar-lo més ràpid.


//MIDDLEWARE
app.use(express.json()) //Middleware per poder enviar respostes en format json.
app.use(cors())


//ROUTES 
app.post ('/:com', async (req, res) => { 
    const buffdec = Buffer.from(req.params.com, 'base64')
    const strdec = buffdec.toString('UTF-8')
    console.log('Incomming command:'.blue, `${strdec}`)
    exec(`${strdec}`, async (error, stdout) => {

        //OUTPUT
        if (!error) {
            console.log(`Output: ${stdout}`)
            await res.send(JSON.stringify({ Command: strdec, Output: stdout }))
            console.log('Command executed succesfully!'.yellow)
            console.log('--------------------'.red)
        }

        //ERROR
        if (error) {
            console.log('Error:'.red, `${error.message}`)
            console.log('--------------------'.red)
            await res.send(JSON.stringify({ Error: error.message }))
        }
    })
})

//SERVER
app.listen(app.get('port'), () => { 
    console.log('--------------------'.red)
    console.log('Remote Command'.blue)
    console.log('Server on port', app.set('port').yellow)
    console.log('BY:','IZAN'.green)
    console.log('--------------------'.red)
    console.log('REQUESTS:'.cyan)
    console.log('--------------------'.red)
})

//npm run nodemon per obrir


