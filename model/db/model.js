import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name:{type:String, required:true, trim:true},
  email:{type:String, required:true, trim:true, unique:true},
  age:{type:Number, required:true},
  city:{type:String, required:true, trim:true},
  zipcode:{type:Number, required:true}
})

const userModel = model('worko_users', userSchema);

export { userModel };
