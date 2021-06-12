export interface StateSession {
  contest: {
      name: string;
      field: string;
      dueDate: string;
      employer: string;
      vacancies: number;
      description: string;
      requirements: {
        OMerit: [{
            title: string;
            description: string;
        }];
        EMerit: [{
            title: string;
            description: string;
        }];
        PMerit: [{
            title: string;
            description: string;
        }];
        KMerit: [{
            title: string;
            description: string;
        }];
    };
    skills: {
        OMerit: [{
            title: string;
            description: string;
        }];
        EMerit: [{
            title: string;
            description: string;
        }];
        PMerit: [{
            title: string;
            description: string;
        }];
        KMerit: [{
            title: string;
            description: string;
        }];
    };
    extra: {
        OMerit: number;
        EMerit: number;
        PMerit: number;
        KMerit: number;
    };
    participations: [
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
                date: string;
                grade: number;
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
  };
  // Object pass from the dashboard to the apply process the contest requirements and skills
  contestItem: any;

  participation:
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
            date: string;
            grade: number;
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
    };
}
