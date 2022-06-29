//Class 38 assignment on 5/31/2022:

const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
    '21 savage' : {
        'number': 1,
        'firstname': 'Shéyaa Bin',
        'lastname':'Abraham-Joseph',
        'birthLocation': 'Atlanta, GA',
        'birthAge': 29
    },
    'chance the rapper' : {
        'number': 2,
        'firstname': 'Chancelor',
        'lastname':'Bennett',
        'birthLocation': 'Chicago, IL',
        'birthAge': 30
    },
    'unknown' : {
        'number': 3,
        'firstname': 'unknown',
        'lastname':'unknown',
        'birthLocation': 'unknown',
        'birthAge': 'unknown'
    },
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    const val = Object.values(rappers)
    let result = ''
    
    for (const value of val){
        if (value.firstname.toLowerCase() === rapperName || value.lastname.toLowerCase() === rapperName || value.number === Number(rapperName)){
        result = value
            break;
        }else{
            result = rappers['unknown']
        }
    }       
        return response.json(result)
})

// Leon original Code
// if ( rappers[rapperName]) {
    //     response.json(rappers[rapperName])
    // }else{
    //     response.json(rappers['unknown'])
    // }
         
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!  You betta go catch it!`)
})