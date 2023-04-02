"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForID = exports.deleteStudent = exports.createStudent = exports.updateStudent = void 0;
const create_students_1 = __importDefault(require("./create-students"));
exports.createStudent = create_students_1.default;
const update_student_1 = __importDefault(require("./update-student"));
exports.updateStudent = update_student_1.default;
const delete_students_1 = __importDefault(require("./delete-students"));
exports.deleteStudent = delete_students_1.default;
const list_students_byID_1 = __importDefault(require("./list-students-byID"));
exports.searchForID = list_students_byID_1.default;
