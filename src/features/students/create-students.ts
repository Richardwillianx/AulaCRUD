import studentList from "../../database";
import { Student } from "../../types";

// CREATE
function createStudent(newStudent: Student) {
  if (studentList.some((student) => student.cpf === newStudent.cpf)) {
    console.log("Já existe um ouro aluno cadastrado com o mesmo CPF informado");
    return;
  }

  studentList.push(newStudent);
  console.log(studentList);
}

export default createStudent;
