
export interface GeneralTopic {
  id: string;
  name: string;
  image: string;
}

export interface Topic {
  id: string;
  name: string;
  image: string;
  description: string;
  questions: Question[]
}

export interface Question {
  question: string;
  answer: string;
  difficulty: string;
  lines: string;
}