
const connectDB = require('./src/db')
const app = require('./server' )



connectDB();



const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});