import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ownerSchema = new Schema({
  id: {type: Number, required: true},
  name: String,
  extraPhone: Number,
  // pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}],
  avatar: {type: String},
})

const Owner = mongoose.model('Owner', ownerSchema)

export {
  Owner,
}