import mongoose  from 'mongoose'



// const mongouri ='mongodb+srv://tusharrafiuzzaman:t3Q9'ETa47^V+ye@cluster0.dpnj23i.mongodb.net/hello?retryWrites=true&w=majority'
// const mongouri = "mongodb://tusharrafiuzzaman:gkXNYNQCi6j6oRThs@ac-1vt53et-shard-00-00.dpnj23i.mongodb.net:27017,ac-1vt53et-shard-00-01.dpnj23i.mongodb.net:27017,ac-1vt53et-shard-00-02.dpnj23i.mongodb.net:27017/?ssl=true&replicaSet=atlas-cuiq7z-shard-0&authSource=admin&retryWrites=true&w=majority";
// const mongouri='mongodb://tusharrafiuzzaman:gkXNYNQCi6j6oRThs@ac-1vt53et-shard-00-00.dpnj23i.mongodb.net:27017,ac-1vt53et-shard-00-01.dpnj23i.mongodb.net:27017,ac-1vt53et-shard-00-02.dpnj23i.mongodb.net:27017/linksDatabase?ssl=true&replicaSet=atlas-cuiq7z-shard-0&authSource=admin&retryWrites=true&w=majority'
// const mongouri='mongodb://contact:My9J9xnpsYSRnH6@cluster0-shard-00-00.ncmj4.mongodb.net:27017,cluster0-shard-00-01.ncmj4.mongodb.net:27017,cluster0-shard-00-02.ncmj4.mongodb.net:27017/shannonDatabase?ssl=true&replicaSet=atlas-10vj3b-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongouri='mongodb://tusharrafiuzzaman:My9J9xnpsYSRnH6@ac-1vt53et-shard-00-00.dpnj23i.mongodb.net:27017,ac-1vt53et-shard-00-01.dpnj23i.mongodb.net:27017,ac-1vt53et-shard-00-02.dpnj23i.mongodb.net:27017/linksDatabase?ssl=true&replicaSet=atlas-cuiq7z-shard-0&authSource=admin&retryWrites=true&w=majority'
const connectDB = () => {

    mongoose.connect(mongouri
    ).then((result) => {
        console.log('mongo connected');
    })
        .catch((err) => { console.log(err) });
}

export default connectDB
