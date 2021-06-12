export default interface ContestDTO {
  name?: string;
  field?: string;
  dueDate?: string;
  employer?: string;
  vacancies?: number;
  description?: string;
  requirements?: {
    OMerit?: Array<{title: string; description: string}>;
    EMerit?: Array<{title: string; description: string}>;
    PMerit?: Array<{title: string; description: string}>;
    KMerit?: Array<{title: string; description: string}>;
  };
  skills?: {
    OMerit?: Array<{title: string; description: string}>;
    EMerit?: Array<{title: string; description: string}>;
    PMerit?: Array<{title: string; description: string}>;
    KMerit?: Array<{title: string; description: string}>;
  };
  extra?: {
      OMerit: number;
      EMerit: number;
      PMerit: number;
      KMerit: number;
  };
  participations?: [
      {
      user: string;
      contest: string;
      requirements: {
          OMerit: [
              {
                  date: string;
                  grade: number;
                  file: string;
              }
          ];
          EMerit: [
              {
                  description: string;
                  time: number; // meses
                  company: string;
              }
          ];
          PMerit: [
              {
              description: string;
              file: string;
              }
          ];
          KMerit: [
              {
              grade: number;
              date: string;
              file: string;
              }
          ];
      };
      skills: {
          OMerit: [
              {
                  date: string;
                  grade: number;
                  file: string;
              }
          ];
          EMerit: [
              {
                  description: string;
                  time: number; // meses
                  company: string;
              }
          ];
          PMerit: [
              {
              description: string;
              file: string;
              }
          ];
          KMerit: [
              {
              date: string;
              grade: number;
              file: string;
              }
          ];
      };
      extra: {
          OMerit: [
              {
                  title: string;
                  date: string;
                  grade: number;
                  file: string;
              }
          ];
          EMerit: [
              {
                  description: string;
                  time: number; // meses
                  company: string;
              }
          ];
          PMerit: [
              {
              description: string;
              file: string;
              }
          ];
          KMerit: [
              {
              title: string;
              date: string;
              grade: number;
              file: string;
              }
          ];
      };
    score: number;
  }
    ];
  }
