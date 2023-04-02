"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
// DELETE
function deleteStudent(id) {
    const index = database_1.default.findIndex((student) => student.id === id);
    if (index === -1) {
        console.log("ID not found..");
        return;
    }
    database_1.default.splice(index, 1);
    console.log(database_1.default);
}
exports.default = deleteStudent;
