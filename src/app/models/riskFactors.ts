export default class RiskFactors {
  name: string;
  user_id: string;
  riskGeneralFactors_id: string;

  constructor(
    name: string,
    user_id: string,
    riskGeneralFactors_id: string
  ) {
    this.name = name;
    this.user_id = user_id;
    this.riskGeneralFactors_id = riskGeneralFactors_id;
  }
}