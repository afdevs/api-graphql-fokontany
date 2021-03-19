const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
}= require('graphql');
const Fokontany= require('./models/Fokontany');
// let fokontanyData = require('../data/fokotany.json');
// function loadingData(){
//     let fokontanyData = require('../');

// }

const FokontanyType= new GraphQLObjectType({
    name: 'Fokontany', 
    fields:{
        ADM0_PCODE: {type: GraphQLString},
        ADM0_EN: {type: GraphQLString},
        ADM1_PCODE: {type: GraphQLString},
        ADM1_EN: {type: GraphQLString},
        ADM2_PCODE: {type: GraphQLString},
        ADM2_EN: {type: GraphQLString},
        ADM3_PCODE: {type: GraphQLString},
        ADM3_EN: {type: GraphQLString},
        ADM4_PCODE: {type: GraphQLString},
        ADM4_EN: {type: GraphQLString},
      }

})

const RootQuery=new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        getAllfokontany:{
            type: new GraphQLList(FokontanyType),
            async resolve(parentValue, args){
                const allFokontany= await Fokontany.find();
                return allFokontany;                
            }
        },        
        getfokontany:{
            type: FokontanyType,
            args:{
                _ID: {type: GraphQLString}
            },
            async resolve(parentValue, args){
                 const aFokontany= await Fokontany.findById({_id: args._ID});
                 return aFokontany;
                
            }
        },              
        getPagefokontany:{
            type: new GraphQLList(FokontanyType),
            args:{
                PAGE: {type: GraphQLInt},
            },
            async resolve(parentValue, args){
                const pageSize = 3;
                const currentPage = args.PAGE;
                const listFokontany = await Fokontany.find() 
                .skip(pageSize * (currentPage - 1)) 
                .limit(pageSize); 

                return listFokontany;
            }
        }
    }
});

const mutation= new GraphQLObjectType({
    name: "Mutation",
    fields:{
        addFokontany:{
            type: FokontanyType,
            args:{
                ADM0_PCODE: {type: new GraphQLNonNull(GraphQLString)},
                ADM0_EN: {type: new GraphQLNonNull(GraphQLString)},
                ADM1_PCODE: {type: new GraphQLNonNull(GraphQLString)},
                ADM1_EN: {type: new GraphQLNonNull(GraphQLString)},
                ADM2_PCODE: {type: new GraphQLNonNull(GraphQLString)},
                ADM2_EN: {type: new GraphQLNonNull(GraphQLString)},
                ADM3_PCODE: {type: new GraphQLNonNull(GraphQLString)},
                ADM3_EN: {type: new GraphQLNonNull(GraphQLString)},
                ADM4_PCODE: {type: new GraphQLNonNull(GraphQLString)},
                ADM4_EN: {type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parentValue, args){
                const newFok= new Fokontany({
                    ADM0_PCODE:args.ADM0_PCODE,
                    ADM0_EN: args.ADM0_EN,
                    ADM1_PCODE: args.ADM1_PCODE,
                    ADM1_EN: args.ADM1_EN,
                    ADM2_PCODE: args.ADM2_PCODE,
                    ADM2_EN: args.ADM2_EN,
                    ADM3_PCODE: args.ADM3_PCODE,
                    ADM3_EN: args.ADM3_EN,
                    ADM4_PCODE: args.ADM4_PCODE,
                    ADM4_EN: args.ADM4_EN,
                });
                
                const savedFokontany= await newFok.save();   
                return savedFokontany;
            }
        },
        updateFokontany:{
            type: FokontanyType,
            args:{
                _ID:{type: new GraphQLNonNull(GraphQLString)},
                ADM0_PCODE: {type: GraphQLString},
                ADM0_EN: {type: GraphQLString},
                ADM1_PCODE: {type: GraphQLString},
                ADM1_EN: {type: GraphQLString},
                ADM2_PCODE: {type: GraphQLString},
                ADM2_EN: {type: GraphQLString},
                ADM3_PCODE: {type: GraphQLString},
                ADM3_EN: {type: GraphQLString},
                ADM4_PCODE: {type: GraphQLString},
                ADM4_EN: {type: GraphQLString}
            },
            async resolve(parentValue, args){
                const updatedFokontany= await Fokontany.updateOne({_id: args._ID },{
                    ADM0_PCODE:args.ADM0_PCODE,
                    ADM0_EN:args.ADM0_EN,
                    ADM1_PCODE:args.ADM1_PCODE,
                    ADM1_EN:args.ADM1_EN,
                    ADM2_PCODE:args.ADM2_PCODE,
                    ADM2_EN:args.ADM2_EN,
                    ADM3_PCODE:args.ADM3_PCODE,
                    ADM3_EN:args.ADM3_EN,
                    ADM4_PCODE:args.ADM4_PCODE,
                    ADM4_EN:args.ADM4_EN
                });
                return updatedFokontany;
            }
        },

        deleteFokontany:{
            type: new GraphQLList(FokontanyType),
            args:{
                _ID: {type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parentValue, args){
                const removedFokontany= await Fokontany.deleteOne({_id: args._ID}).then(res=> res.data);
                return removedFokontany;
            }
        }
    }
})

module.exports= new GraphQLSchema({
    query: RootQuery,
    mutation
});