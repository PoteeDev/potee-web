export interface Service {
  name: string;
  description: string;
  reputation: number;
  lost: number;
  gained: number;
  status: "-1" | "0" | "1";
  sla: number;
}

