const express= require('express');
const {graphqlHTTP } = require('express-graphql');
const schema= require('./src/schema');
const mongoose = require('mongoose');
const cors= require('cors');
const fs= require('fs');
const Fokontany= require('./src/models/Fokontany');

require('dotenv').config();

const app = express();
app.use(cors());
const port= process.env.PORT || 4000;

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, 
    (err, succ)=>{        
        if(succ){
            //let fokontanyData = require('../data/fokotany.json');
            const fokontanyFile = fs.readFileSync(__dirname + '/src/data/fokotany.json', 'utf-8');
            const allFokontany= JSON.parse(fokontanyFile);
            
            //Population data to mongodb from the json file
            loadMeetings();
            async function loadMeetings() {
            try {
                await Fokontany.insertMany(allFokontany);
                process.exit();
            } catch(e) {
                process.exit();
            }

            }
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


