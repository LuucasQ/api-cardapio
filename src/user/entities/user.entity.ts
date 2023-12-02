export class User {
  id: number;
  email: string;
  name: string;
  password: string;
  role: Role;
  created_at: Date;
}

enum Role {
  USER,
  ADMIN,
}
