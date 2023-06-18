const app = require('./app')
const mongoose = require('mongoose');

const DB_HOST = 'mongodb+srv://Yana:XgfsM3MFN6sN75F7@cluster0.5i6g5la.mongodb.net/myContacts?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
mongoose.connect(DB_HOST)
.then(()=>{
  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000")
  })
})
.catch(error=>{
  console.log(error.message);
  process.exit(1);
})

