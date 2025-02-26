interface LoginRequestType {
  email: string;
  password: string;
}

interface RegisterRequestType extends LoginRequestType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  universityId: string;
  joinDateUni: string;
  studentCode: string;
  seasonCode: string;
}

interface ApplyRequestType {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  MentorCv: File;
  DomainIds: string[];
}

interface UpdateMeReqType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

export type {
  UpdateMeReqType,
  LoginRequestType,
  RegisterRequestType,
  ApplyRequestType
};
