export default class Company {
  name: string;
  description: string;
  nit: string;
  email: string;
  user_id: string;

  constructor(
      name: string,
      description: string,
      nit: string,
      email: string,
      user_id: string,
  ) {
      this.name = name;
      this.description = description;
      this.nit = nit;
      this.email = email;
      this.user_id = user_id;
  }
}