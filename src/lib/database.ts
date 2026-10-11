export const db = {
  name: 'Mattia',
  surname: 'Faroni',
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  profession: 'Software Developer',
  location: 'Based in Verona, IT',
  emailUser: 'faronimattia',
  emailDomain: 'gmail.com',
  get email() {
    return `${this.emailUser}@${this.emailDomain}`;
  },
  bio: 'Software Developer with 5+ years of experience designing, developing, and maintaining scalable, high-performance software solutions, with a strong focus on code quality, reliability, and maintainability.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/mattia-faroni',
    github: 'https://github.com/MattiaFaroni',
    instagram: 'https://www.instagram.com/mattia_faroni',
  },
  categories: [
    {
      title: 'Backend',
      subtitle: 'APIs · Specs · Build',
      skills: [
        'Java · Spring Boot · Spring Batch',
        'REST APIs · OpenAPI (Swagger) · JSON/YAML',
        'Maven · Gradle · Bash scripting',
      ],
    },
    {
      title: 'Data',
      subtitle: 'SQL · Search',
      skills: [
        'PostgreSQL · MySQL · Oracle',
        'Query optimization · Indexing',
        'Elasticsearch',
      ],
    },
    {
      title: 'DevOps',
      subtitle: 'Cloud · CI/CD · OS',
      skills: [
        'AWS · Monitoring',
        'Docker · Kubernetes',
        'GitLab/GitHub · CI/CD',
        'Linux · Windows',
      ],
    },
  ],
};
