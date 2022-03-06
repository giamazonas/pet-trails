import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  vetInfo: String,
  vetContact: Number,
  isVet: Boolean,
  // store an array of object ids referenceing pets 
  patients: [{type: Schema.Types.ObjectId, ref: 'Pet'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
