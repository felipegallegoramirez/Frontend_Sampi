interface Risk {
  risk_id: string;
  process: string;
  potencialRisk: string;
  controls_id: string[];
  riskEvaluation: string;
}

export default class AssignmentControls {
  risks: Risk[];
  user_id: string;
  company_id: string;
  expertMethodology_id: string;

  constructor(
      risks: Risk[],
      user_id: string,
      company_id: string,
      expertMethodology_id: string
  ) {
      this.risks = risks;
      this.user_id = user_id;
      this.company_id = company_id;
      this.expertMethodology_id = expertMethodology_id;
  }
}
