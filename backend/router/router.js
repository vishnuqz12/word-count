const express = require("express");
 const router = express.Router();
const CountModel =require("../database/model");

router.post("/home",(req,res)=>{
    const inputData = new CountModel({
        input : req.body.input,
        count : req.body.count
    });
inputData.save((err)=>{
    if(!err){
        console.log("data is added to the DB");
    }else{
console.log("data is not added   "+err); 
   }
});
try {
    (data)=>{res.json(data)}
} catch (error) {
   res.json(error) 
};
});

// router.get("/dash",(req,res)=>{
// CountModel.findOne(
//     {},
//     { sort: { count: -1 } },
//     (err, data) => {
//        console.log(data);
//     },
//   );
// })



module.exports=router;