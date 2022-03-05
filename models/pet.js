import mongoose from 'mongoose'

const Schema = mongoose.Schema

const petsSchema = new Schema({
  microchip: {type: Number, },
  name: {type: String, required:true},
  age: {type: Number, timestamps: true},
  birthdate: {type: Number, },
  breed: {type: String},
  gender: {type: String, required: true},
  myPatient: {type: Boolean, },
  myPet: {type: Boolean, },
  vetInfo: {type: String, },
  vaccines: {type: String, },
  medicalProcedures: {type: String, },
  fixed: {type: Boolean, },
  notes: {type: String, },
  nameOther: {type: String, timestamps: true},
  // owner: {type: Schema.Types.ObjectId, ref: "Profile"}
  owner: [{type: Schema.Types.ObjectId, ref: 'Owner'}]
})

const Pet = mongoose.model('Pet', petsSchema)


export {
  Pet,
}