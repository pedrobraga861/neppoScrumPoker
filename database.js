const mongoose=require("mongoose")
module.exports=mongoose.connect('mongodb://neppodb:neppo@ds161630.mlab.com:61630/neppo')



neppo.createCollection('x')
