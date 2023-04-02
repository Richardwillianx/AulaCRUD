"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
// CREATE
function createStudent(newStudent) {
    if (database_1.default.some((student) => student.cpf === newStudent.cpf)) {
        console.log("Já existe um ouro aluno cadastrado com o mesmo CPF informado");
        return;
    }
    database_1.default.push(newStudent);
    console.log(database_1.default);
}
exports.default = createStudent;
