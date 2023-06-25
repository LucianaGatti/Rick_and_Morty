const usersList = require ("../utils/users")
    
    
    const login = (req, res) => {
        const {email, password} = req.query;
        const login = {
            access: true && !!usersList
            .filter(user => user.email === email)
            .filter(user => user.password === password).length
        }
        res.json(login)
    }



//const {email, password} = req.query
    // users.forEach((user) => {
    //     if(user.email === email && user.password === password){
        // return res.status(200).json(access.true)
        //     }
        // })
        //   return res.json({access: false});






module.exports = login;