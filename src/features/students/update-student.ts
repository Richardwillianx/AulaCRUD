import studentList from "../../database";
import { UpdateStudent } from "../../types";

// UPDATE
function updateStudent(id: string, newData: UpdateStudent) {
  const index = studentList.findIndex((aluno) => aluno.id === id);

  if (index === -1) {
    console.log("Student not found.. Try again!");
    return;
  }

  const oldData = studentList[index];

  studentList[index].name = newData.name ?? oldData.name;
  studentList[index].cpf = newData.cpf ?? oldData.cpf;
  studentList[index].registration =
    newData.registration ?? oldData.registration;
  console.log(studentList);
}

export default updateStudent;
