"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
// UPDATE
function updateStudent(id, newData) {
    var _a, _b, _c;
    const index = database_1.default.findIndex((aluno) => aluno.id === id);
    if (index === -1) {
        console.log("Student not found.. Try again!");
        return;
    }
    const oldData = database_1.default[index];
    database_1.default[index].name = (_a = newData.name) !== null && _a !== void 0 ? _a : oldData.name;
    database_1.default[index].cpf = (_b = newData.cpf) !== null && _b !== void 0 ? _b : oldData.cpf;
    database_1.default[index].registration =
        (_c = newData.registration) !== null && _c !== void 0 ? _c : oldData.registration;
    console.log(database_1.default);
}
exports.default = updateStudent;
