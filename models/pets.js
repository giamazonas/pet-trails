import mongoose from 'mongoose'

const Schema = mongoose.Schema

const petsSchema = new Schema({
  _id: ObjectId,
  name: String,
  age: Number,
  breed: String,
  gender: String,
  vetInfo: String,
  vaccines: String,
  medicalProcedures: String,
  fixed: Boolean,
  notes: String,
  nameOther: String,
  // owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Pet = mongoose.model('Pet', petSchema)

export {
  Pet
}