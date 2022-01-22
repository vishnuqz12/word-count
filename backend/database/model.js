const mongoose =  require("mongoose");

const countSchema = new mongoose.Schema({
    input:{
        type:String,
        required:true
}, 
count:{
    type:Number,
    required:true
},
 Date:{
    type:Date,
    default:Date.now
}
})


const countmodel = mongoose.model("wordcount",countSchema);

module.exports = countmodel;