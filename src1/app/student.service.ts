import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

//   constructor(private http:HttpClient) {}
//   getstudents(){
//     return this.http.get("http://localhost:2000/student")
//   }
//   deletestudent(id:any){
//     return this.http.delete(`http://localhost:2000/student/${id}`)
//   }
//   updatestudent(updatedstudent:any){
//     return this.http.put(`http://localhost:2000/student/${updatedstudent.id},updatedstudent`)
//   }
//   addstudent(newstudent:any){
//     return this.http.post("http://localhost:2000/student",newstudent)
//   }
// }

students=[
  {id:1,name:"sri",branch:"IT"},
  {id:2,name:"sai",branch:"cse"},
  {id:3,name:"sam",branch:"IT"}, 
  {id:4,name:"ram",branch:"IT"} 
]  
selectedStudent:any;

getStudents(){
  return this.students;
}

deleteStudent(id: number) {

  this.students = this.students.filter(student => student.id !== id);
}
addStudent(id:any,name:any,branch:any){
  this.students.push({id:id.value,name:name.value,branch:branch.value});
}


updateStudent(updatedstudent:any){
  const index=this.students.findIndex(student=>student.id===updatedstudent.id);
  if(index !== -1){
    this.students[index]=updatedstudent;
    this.selectedStudent=""
  }

}
}
