module.exports={
    PORT:process.env.PORT || 5000,
    URI:process.env.MONGODB_URI || 'mongodb://localhost:27017/testdb',
    MONGODB_CONFIG:{
        user:'admin',
        pass:'123456',
        auth:{authdb:'admin'}
    }



};