const mongoose = require('mongoose');

const kwyeSchema = new mongoose.Schema(

    {
      users: {
        username: String,
        password: String,
      },
        mealplans:[
           {
              id:Number,
              title:String,
              img:String,
              foods:[
                 {
                    name:String,
                    portion:String,
                    calories:Number,
                    carbs:Number,
                    protein:Number
                 }
              ]
           }

        ]
    }
);

module.exports = KWYE = mongoose.model('kwye', kwyeSchema);