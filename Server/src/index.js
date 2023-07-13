// const express = require ("express");
// const server = express();
// const router = require ("./routes/index")
const PORT = process.env.PORT || 3001;
const sequelize = require("sequelize");
const server = require ("./app");
const { conn } = require ("./DB_connection");

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });

// server.use(express.json());

// server.use("/rickandmorty", router)

//!esto estaba antes...

// server.listen(PORT, ()=> {console.log(`LISTENING ON PORT: ${PORT}`);
// })

//!homework sequelize

conn
.sync({force:false})
.then(() =>{
    server.listen(PORT, ()=> {
        console.log(`LISTENING ON PORT: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})