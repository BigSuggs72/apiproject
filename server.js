// Class 39: send only JSON

const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
    '21 savage' : {
        'birthName': 'aa',
        'birthLocation': 'T-Town',
        'birthAge': 29
    },
    'chance' : {
        'birthName': 'bb',
        'birthLocation': 'J-Town',
        'birthAge': 29
    },
    'unknown' : {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'birthAge': 'unknown'
    },
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if ( rappers[rapperName] ) {
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!  You betta go catch it!`)
})