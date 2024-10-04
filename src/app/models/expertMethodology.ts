interface RiskEvaluation {
  probability: number;
  Damage: number;
}

interface RiskFactor {
  riskFactors_id: string;
  process: string;
  reputacionalRisk: RiskEvaluation[];
  patrimonialRisk: RiskEvaluation[];
  legalRisk: RiskEvaluation[];
  RiskEvaluation: RiskEvaluation[];
}

export default class ExpertMethodology {
  name: string;
  description: string;
  date: string;
  risk: RiskFactor[];
  user_id: string;
  company_id: string;
  assigmentControls_id: string;

  constructor(
    name: string,
    description: string,
    date: string,
    risk: RiskFactor[],
    user_id: string,
    company_id: string,
    assigmentControls_id: string
  ) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.risk = risk;
    this.user_id = user_id;
    this.company_id = company_id;
    this.assigmentControls_id = assigmentControls_id;
  }
}