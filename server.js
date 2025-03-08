var express=require("express")
var mongoose=require("mongoose")
var app=express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/users")
//mongoose.connect("mongodb+srv://thallapallynagasri:<nagasri@23>@cluster0.s8f4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("DB connection established successfully")})
.catch((error)=>{console.log("error in connection"+error)})
const Schema=mongoose.Schema
const studentSchema=new Schema({
  "name":{type:String,required:true,unique:true},
  "age":{type:Number,required:true}
})

const student=mongoose.model('student',studentSchema);

app.post('/student',(req,res)=>{
  const newstudent = new student(req.body);
  newstudent.save()
  .then(()=>{res.status(200).json({"msg":"added successfully"})})
  .catch((error)=>res.status(400).json({"msg":"error in status"+error}))
})


app.get("/student",(req,res)=>{
  student.find()
  .then((student)=>{
    if(student){
      res.json({student})
    }
    else{
      res.status(404).json({"message":"student not found"})
    }
    })
  .catch((error)=>res.status(400).json({"msg":"error in status"+error}))
})



app.get("/student/:name", (req, res) => {
  student.findOne({ name: req.params.name })
    .then((student) => {
      if (student) {
        res.json({ student });
      } else {
        res.status(404).json({ "message": "student not found" });
      }
    })
    .catch((error) => res.status(400).json({ "msg": "error in status" + error }));
});



app.delete("/student/:name", (req, res) => {
  student.findOneAndDelete({ name: req.params.name })
    .then((student) => {
      if (student) {
        res.json({ "msg": "Deleted successfully", student });
      } else {
        res.status(404).json({ "message": "Student not found" });
      }
    })
    .catch((error) => res.status(400).json({ "msg": "Error in status: " + error.message }));
});




app.listen(3000,()=>{
  console.log("server started on http://localhost:3000")
})