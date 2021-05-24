const mongoose = require("mongoose");

// creatting a database
mongoose.connect("mongodb://localhost:27017/kanhaiyadynamic", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})