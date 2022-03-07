import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ownersSchema = new Schema({
  id: {type: Number, required: true},
  name: String,
  extraPhone: Number,
  // pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}],
  avatar: {type: String},
})

const Owners = mongoose.model('Owners', ownersSchema)

export {
  Owners,
}