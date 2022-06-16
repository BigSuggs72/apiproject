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
    const rapperInfo = request.params.name.toLowerCase()
    const ent = Object.entries(rappers)
    
    const newInfo = ent.map((item) => {
        const [first,second] = item
        // console.log(second);
        if (rappers[rapperInfo]) {
            response.json(rappers[rapperInfo])
         }   
        //  }else{
        //     return response.json(rappers['unknown'])
        //  }
    })
        

    //for (let prop of rappers)

    // for (const [key,value] of Object.entries(rappers))
    //     if (value.firstname.toLowerCase() === rapperInfo || value.lastname.toLowerCase() === rapperInfo || value.number.toString().toLowerCase() === rapperInfo){
    //     return response.json(rappers[key])
    // }else{
    //     return response.json(rappers['unknown'])
    // }
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