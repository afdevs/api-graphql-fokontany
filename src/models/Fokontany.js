const mongoose= require('mongoose');

const FokontanySchema= mongoose.Schema({
    ADM0_PCODE: {
        type: String, 
        required: true
    },
    ADM0_EN: {
        type: String, 
        required: true
    }, 
    ADM1_PCODE:{
        type: String, 
        required: true
    },
    ADM1_EN: {
        type: String, 
        required: true
    },
    ADM2_PCODE: {
        type: String, 
        required: true
    },
    ADM2_EN: {
        type: String, 
        required: true
    },
    ADM3_PCODE: {
        type: String, 
        required: true
    },
    ADM3_EN: {
        type: String, 
        required: true
    },
    ADM4_PCODE: {
        type: String, 
        required: true
    },
    ADM4_EN: {
        type: String, 
        required: true
    }
},
{
    collection: 'fokontany',
},
{
    strict: false
}

);

module.exports=mongoose.model('Fokontany', FokontanySchema);