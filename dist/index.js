"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./features/students");
(0, students_1.createStudent)({
    id: "01",
    name: "Richard William",
    cpf: "123.456.789-10",
    registration: "01020-3",
});
(0, students_1.createStudent)({
    id: "02",
    name: "Pedro da Silva",
    cpf: "098.765.432-10",
    registration: "02030-4",
});
(0, students_1.searchForID)("01");
(0, students_1.updateStudent)("1", { cpf: "157.155.171-10", name: "Hebert Richard" });
(0, students_1.deleteStudent)("02");
