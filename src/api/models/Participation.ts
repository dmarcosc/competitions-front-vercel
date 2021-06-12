export default interface ParticipationDTO {
  user?: string;
  contest?: string;
  score?: string;
  requirements?: {
    OMerit?: Array<{grade: number; date: string; file: string}>;
    EMerit?: Array<{company: string; description: string; time: number}>;
    PMerit?: Array<{description: string; file: string}>;
    KMerit?: Array<{grade: number; date: string; file: string}>;
  };
  skills?: {
    OMerit?: Array<{grade: number; date: string}>;
    EMerit?: Array<{company: string; description: string; time: number}>;
    PMerit?: Array<{description: string}>;
    KMerit?: Array<{grade: number; date: string}>;
  };
  extra?: {
    OMerit?: Array<{title: string; grade: number; date: string}>;
    EMerit?: Array<{company: string; description: string; time: number}>;
    PMerit?: Array<{description: string}>;
    KMerit?: Array<{title: string; grade: number; date: string}>;
  };
  }
