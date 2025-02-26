interface IProject {
  id: string;
  name: string;
  description: string;
  url: string;
  startDate: string;
  endDate: string;
  team: {
    teamDetails: {
      id: string;
      name: string;
      description: string;
      logo: string;
      imageCover: string;
      size: number;
      contact: string;
      email: string;
    };
    teamMembers: [
      {
        id: string;
        name: string;
        isMain: boolean;
        role: number;
      }
    ];
  };
  domainResponses: {
    id: string;
    name: string;
    description: string;
  }[];
  isPublish: boolean;
  status: PROJECT_STATUS;
}

enum PROJECT_STATUS {
  PENDING,
  APPROVE,
  REJECT
}

export type { IProject };
export { PROJECT_STATUS };
