//! HOMEWORK EXPRESS

// const URL = "https://rickandmortyapi.com/api/character/";
// const axios = require("axios");

// const getCharById = (req, res) => {
//   const { id } = req.params;
//   axios(`${URL}/${id}`)
//     .then(({ data }) => {
//       // data {}
//       // console.log(data);
//       const { id, status, name, species, origin, image, gender, error } = data;
//       const character = { id, status, name, species, origin, image, gender };
//       return name
//         ? res.json(character)
//         : res.status(404).json({ message: error });
//     })
//     .catch((reason) => {
//       return res.status(500).json({ message: reason });
//     });
// };

 //! HOMEWORK ASYNC / AWAIT

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image, status } = (await axios.get(URL + id)).data
    const character = {id, name, gender, species, origin, image, status }
        return character.name 
          ? res.status(200).json(character) 
          : res.status(404).send("Not found")

  } catch (error) {
          res.status(500).json({ error: error.message });
  }

}

module.exports = getCharById;
