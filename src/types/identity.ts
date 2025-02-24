interface IMentor {
  id: string;
  email: string;
  cvName: string;
  cvLink: string;
  firstName: string;
  lastName: string;
  phone: string;
  applyCount: number;
  userDomains: {
    id: string;
    name: string;
  }[];
}

export type { IMentor };
