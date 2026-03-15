export interface WritingEntry {
  title: string;
  url: string;
  source: string;
  year: string;
  featured: boolean;
  paid: boolean;
}

export interface Project {
  number: string;
  name: string;
  desc: string;
  tags: string[];
  url: string;
  urlLabel: string;
  icon?: string;
}

export interface Experience {
  company: string;
  url?: string;
  role: string;
  detail?: string;
  location?: string;
  period: string;
  current?: boolean;
}

export interface Quote {
  text: string;
  author: string;
}
