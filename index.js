const express = require('express')



const app = express()
//function rootCall(req,res){
   // res.send('Thank you');
//}
const rootCall = (req,res) =>{
    res.send('Thank you')
}
app.get('/', (req,res) =>{
    res.send('i know about how to open port...yay');
})

app.listen(3000, () => console.log('Listening to port 3000'));