import {
  createStudent,
  deleteStudent,
  searchForID,
  updateStudent,
} from "./features/students";

createStudent({
  id: "01",
  name: "Richard William",
  cpf: "123.456.789-10",
  registration: "01020-3",
});

createStudent({
  id: "02",
  name: "Pedro da Silva",
  cpf: "098.765.432-10",
  registration: "02030-4",
});

searchForID("01");

updateStudent("1", { cpf: "157.155.171-10", name: "Hebert Richard" });

deleteStudent("02");
