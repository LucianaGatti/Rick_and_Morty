require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_HOST, DB_PASSWORD, PORT} = process.env
const FavoriteFunction = require ("./models/Favorite");
const UserFunction = require ("./models/User")

// console.log(DB_USER)
// console.log(DB_HOST)
// console.log(DB_PASSWORD);
// console.log(PORT);


// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);
// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteFunction(sequelize);
UserFunction(sequelize);

// Ejercicio 06

// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through:"user_favorite"});
Favorite.belongsToMany(User, {through:"user_favorite"});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
