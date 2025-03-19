import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  //standalone: false,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students=[
    {id:1,name:"sri",branch:"IT"},
    {id:2,name:"sai",branch:"cse"},
    {id:3,name:"sam",branch:"IT"}, 
    {id:4,name:"ram",branch:"IT"} 
  ]  
  selectedStudent:any={};
  deleteStudent(id: number) {
    console.log(id)
    this.students = this.students.filter(student => student.id !== id);
  }
  addStudent(id:any,name:any,branch:any){
    this.students.push({id:id.value,name:name.value,branch:branch.value});
  }

  editStudent(student:any){
    this.selectedStudent={student};
  }
  updateStudent(){
    const index=this.students.findIndex(student=>student.id===this.selectedStudent.id);
    if(index !== -1){
      this.students[index]=this.selectedStudent
    }

  }
}



// import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: false,
//   //imports: [CommonModule,FormsModule,RouterOutlet], 
//   templateUrl: './app.component.html',
//   //styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   students = [
//     { id: 1, name: 'Anu', branch: 'IT' },
//     { id: 2, name: 'John', branch: 'CSE' },
//     { id: 3, name: 'Renu', branch: 'IT' }
//   ];

//    selectedStudent: any = null;

//   addStudent(id: any, name: any, branch: any) {
//     this.students.push({
//       id: parseInt(id.value, 10),
//       name: name.value,
//       branch: branch.value
//     });

//     id.value = '';
//     name.value = '';
//     branch.value = '';
//   }

//   deleteStudent(id: any) {
//     this.students = this.students.filter(student => student.id !== id);
//   }

//   editStudent(student: any){
//     this.selectedStudent = {...student};
//   }
//   // updateStudent() {
//   //   const index = this.students.findIndex(student => student.id === this.selectedStudent.id);
//   //   if (index !== -1) {
//   //     this.students[index] = { ...this.selectedStudent };
//   //   }
//   //   this.selectedStudent = null; 
//   // }
  
// }