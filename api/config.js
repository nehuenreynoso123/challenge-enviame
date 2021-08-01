require('dotenv').config()

module.exports={
    api:{
        port:process.env.API_PORT
    },
    db:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE
    },

    apiEnviame:{
        baseUrl:process.env.API_ENVIAME_URL,
        apiKey:process.env.API_ENVIAME_KEY
    }

}