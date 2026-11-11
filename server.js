import express from 'express';


const app = express();


app.get('/', (req, res)=>{              // normal route
    res.status(200).json({message: "Welecome to my server monitoring App"})    
})

app.get('/slow', (req, res)=>{          // slow route
    setTimeout(()=>{
        res.status(200).json({message: "Sorry for late response"})
    }, 4 * 1000 )
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))