export default class User {
  private name: string;
  private email: string;
  private password: string;
  private rol: string;
  private cedula: string;
  private code: string;

  constructor(
      name: string,
      email: string,
      password: string,
      rol: string,
      cedula: string,
      code: string
  ) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.rol = rol;
      this.cedula = cedula;
      this.code = code;
  }
}