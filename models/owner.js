import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ownerSchema = new Schema({
  id: {type: Number, required: true, placeholder: phoneNumber},
  name: String,
  extraPhoneNumber: {type: Number, },
  // pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}],
  avatar: String,
})

const Owner = mongoose.model('Owner', ownerSchema)

export {
  Owner,
}