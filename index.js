const mongoose = require('mongoose')

// const dbUrl = 'mongodb://fery:pan2891891@ds155587.mlab.com:55587/idphoto'
const dbUrl = 'mongodb://fery:pan2891891@ds155587.mlab.com:55587/idphoto'

mongoose.connect(dbUrl)
const db = mongoose.connection
db.once('open', () => {
  console.log('connected')
})

const kittySchema = new mongoose.Schema({
  name: String
})



kittySchema.methods.speak = function () {
  const greeting = this.name ? 'Mewo name is ' + this.name : "I don't have a name"
  console.log(greeting)
}

const Kitten = mongoose.model('Kitten', kittySchema)

// const fluffy = new Kitten({ name: 'fluffy1'})

// fluffy.save(function(err, fluffy) {
//   if (err) return console.log(err)
//   console.log(fluffy)
//   fluffy.speak()
// })
// Kitten.findOne(function(err, kittens) {
//   if (err) return console.log(err)
//   console.log(kittens)
// })
Kitten.updateOne({name: 'fluffy'}, { name: 'kitty'},function(err, res) {
  if (err) throw err
  console.log(res)
})