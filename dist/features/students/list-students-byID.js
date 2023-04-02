"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function searchForID(id) {
    const studentfound = database_1.default.find((student) => student.id === id);
    if (!studentfound) {
        console.log("ID not found.. try again!");
        return;
    }
    console.log(studentfound);
}
exports.default = searchForID;
