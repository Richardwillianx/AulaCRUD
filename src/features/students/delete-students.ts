import studentList from "../../database";

// DELETE
function deleteStudent(id: string) {
  const index = studentList.findIndex((student) => student.id === id);

  if (index === -1) {
    console.log("ID not found..");
    return;
  }

  studentList.splice(index, 1);
  console.log(studentList);
}

export default deleteStudent;
