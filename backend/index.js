const express=require('express')
const app = express()
const PORT=process.env.PORT ||5000

var cors=require('cors')

app.use(cors())
app.use(express.json())



app.route('/user',require('./routes/userauth'))
app.route('/rotaract',require('./routes/board'))


app.listen(PORT,()=>{
    console.log("we are onlinee")

})