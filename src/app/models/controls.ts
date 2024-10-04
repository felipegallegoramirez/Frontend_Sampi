export default class Controls {
  name: string;
  description: string;
  user_id: string;
  risk_id: string[];

  constructor(
    name: string,
    description: string,
    user_id: string,
    risk_id: string[] = []
  ) {
    this.name = name;
    this.description = description;
    this.user_id = user_id;
    this.risk_id = risk_id;
  }
}