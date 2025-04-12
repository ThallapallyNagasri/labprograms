const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user')
  .then(() => { console.log("Connected successfully") })
  .catch((error) => { console.log("Failed to connect", error) });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  stock: { type: Number, default: 0 }
});

const Product = mongoose.model('Product', productSchema);

app.post("/user/register/", (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(() => { res.status(200).json({ "message": "Registered successfully" }) })
    .catch((err) => { res.status(400).json({ "message": "Failed to register", error: err }) });
});



app.post("/user/login/",(req, res) => {
  const { email, password } = req.body;
  
    .then(products=>res.json({message:"login successfull"}))
    .catch(err=>res.status(400).json({message:"invalid"}))

});


app.get("/products",(req, res) => {
    product.find()
    .then(products=>res.json(products))
    .catch(err=>res.status(400).json({message:"product not found"}))

});

app.get("/products/:id",(req,res)=>{
    const id=req.params.id;
    product.findById(id)
    .then(product=>{
        if(product){
            res.json(product);
        }
        else{
            res.json(404).json({message:"product not found"})
        }
    })

})


app.post("/products", (req, res) => {
  const newProduct = new Product(req.body);
  new product.save()
  .then(() => { res.status(200).json({ "message": "added successfully" }) })
  .catch((err) => { res.status(400).json({ "message": "Failed to add", error: err }) });
});



app.put("/products/:id",(req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  product.findidandupdate(id,updatedData,{new:true})
  .then(updatedproduct=>{
    if(updatedproductproduct){
        res.json({message:"product updated sucessfully"})
    }
    else{
        res.status(404).json({message:"failed to update"})
    }
  })
})


app.delete("/products/:id",(req, res) => {
  const id = req.params.id;
  product.findByIdAndDelete(id)
  .then(deletedproduct=>{
    if(deleteproduct){
        res.json({message:"product deleted sucessfully"})
    }
    else{
        res.status(404).json({message:"failed to delete"})
    }
})
});



app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})
