import mongoose from 'mongoose'

const Schema = mongoose.Schema

const petsSchema = new Schema({
  microchip: {type: Number, min: 15, max:15},
  name: {type: String, required:true},
  age: {type: Number, timestamps: true},
  birthdate: {type: Number, },
  breed: {type: String},
  gender: {type: String, required: true},
  vetInfo: {type: String, },
  myPatient: {type: Boolean, },
  vaccines: {type: String, },
  medicalProcedures: {type: String, },
  fixed: {type: Boolean, },
  notes: {type: String, },
  nameOther: {type: String, timestamps: true},
  // owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Pet = mongoose.model('Pet', petsSchema)

// const schema = new mongoose.Schema({
//   thing: [{
//   anotherThing: String
//   }]
//   })

export {
  Pet
}