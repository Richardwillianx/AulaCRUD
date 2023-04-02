import studentList from "../../database";

function searchForID(id: string) {
  const studentfound = studentList.find((student) => student.id === id);

  if (!studentfound) {
    console.log("ID not found.. try again!");
    return;
  }

  console.log(studentfound);
}

export default searchForID;
