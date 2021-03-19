const express= require('express');
const {graphqlHTTP } = require('express-graphql');
const schema= require('./src/schema');
const mongoose = require('mongoose');
const cors= require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
const port= process.env.PORT || 4000;

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, 
    (err, succ)=>{
        console.log(err);
        if(succ){
            console.log(`Connected to ${succ.connection.host}`)
        }
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, ()=>{
    console.log(`Server is runnig on ${port}`);
})


