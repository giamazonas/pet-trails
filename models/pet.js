import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentsSchema = new Schema({
  info: {type: String, timestamps: true},
  dueDate: {type:  Date, default: Date.now()}
},{timestamps: true
})

const petsSchema = new Schema({
  _id: {type: Number, },
  name: {type: String, required:true},
  nameOther: [{type: String, timestamps: true}],
  age: {type: Number, timestamps: true},
  birthdate: {type: Date, },
  breed: {type: String},
  gender: {type: String, required: true},
  myPatient: {type: String, 
  },
  myPet: {type: String, },
  vetInfo: {type: String, },
  vaccines: {type: String, },
  medicalProcedures: {type: String, },
  fixed: {type: String, },
  notes: {type: String,  },
  owner: {type: String, },
  comments: [commentsSchema],
}, {timestamps: true
})

const Pets = mongoose.model('Pets', petsSchema)


export {
  Pets,
}