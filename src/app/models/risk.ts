export default class Risk {
  name: string;
  description: string;
  ethic: boolean;
  other: boolean;
  user_id: string;
  riskFactors_id: string;

  constructor(
    name: string,
    description: string,
    ethic: boolean,
    other: boolean,
    user_id: string,
    riskFactors_id: string
  ) {
    this.name = name;
    this.description = description;
    this.ethic = ethic;
    this.other = other;
    this.user_id = user_id;
    this.riskFactors_id = riskFactors_id;
  }
}