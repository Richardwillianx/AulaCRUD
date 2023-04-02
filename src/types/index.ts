interface Student {
  id: string;
  name: string;
  cpf: string;
  registration: string;
}

type UpdateStudent = Omit<Partial<Student>, "id">;

export { Student, UpdateStudent };
