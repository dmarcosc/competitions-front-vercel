export default interface Contest {
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
    participations?: any;
}
