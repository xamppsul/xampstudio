export interface Experience {
  id: string
  title: string
  company: string
  period: string
  duration: string
  description: string
  achievements: string[]
  technologies: string[]
  type: 'full-time' | 'freelance' | 'contract'
}

export const experiences: Experience[] = [
  {
    id: 'senior-dev',
    title: 'Senior Software Engineer',
    company: 'Tech Innovation Labs',
    period: '2022 - Present',
    duration: '2+ years',
    description: 'Led development of scalable web applications and mentored junior developers. Architected microservices-based solutions for enterprise clients.',
    achievements: [
      'Improved application performance by 40% through code optimization',
      'Led team of 5 developers in delivering 10+ projects',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'],
    type: 'full-time',
  },
  {
    id: 'full-stack-dev',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    period: '2020 - 2022',
    duration: '2 years',
    description: 'Developed end-to-end web solutions for various startups and mid-sized companies. Collaborated with product teams to build user-centric applications.',
    achievements: [
      'Built 15+ production applications serving 100k+ users',
      'Reduced page load time from 5s to 1.2s',
      'Implemented automated testing increasing code coverage to 85%',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    type: 'full-time',
  },
  {
    id: 'junior-dev',
    title: 'Junior Web Developer',
    company: 'WebWorks Agency',
    period: '2019 - 2020',
    duration: '1 year',
    description: 'Started career developing websites and web applications. Learned best practices in web development and collaborated with experienced developers.',
    achievements: [
      'Completed 25+ client projects with 100% satisfaction rate',
      'Mastered React and JavaScript fundamentals',
      'Contributed to open-source projects',
    ],
    technologies: ['JavaScript', 'React', 'HTML/CSS', 'Bootstrap', 'Node.js'],
    type: 'full-time',
  },
  {
    id: 'freelance-dev',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2018 - 2019',
    duration: '1 year',
    description: 'Worked as freelance developer taking on various web development projects. Built custom websites and web applications for small businesses and startups.',
    achievements: [
      'Delivered 30+ projects for diverse clients across multiple industries',
      'Maintained 95% client retention rate with excellent reviews',
      'Built custom e-commerce solutions and content management systems',
    ],
    technologies: ['PHP', 'JavaScript', 'jQuery', 'WordPress', 'MySQL', 'CSS3'],
    type: 'freelance',
  },
  {
    id: 'intern-dev',
    title: 'Web Development Intern',
    company: 'Creative Tech Studios',
    period: '2017 - 2018',
    duration: '6 months',
    description: 'Started professional career as intern gaining hands-on experience with web technologies and development practices. Assisted senior developers in building responsive websites.',
    achievements: [
      'Developed 10+ responsive websites using modern web standards',
      'Improved website loading speed by optimizing assets and code',
      'Learned version control, Git workflows, and collaborative development',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
    type: 'contract',
  },
  {
    id: 'mern-specialist',
    title: 'MERN Stack Specialist',
    company: 'Code Innovations Ltd',
    period: '2021 - 2022',
    duration: '1 year',
    description: 'Specialized in MERN stack development building modern single-page applications. Led frontend architecture decisions and mentored junior developers on best practices.',
    achievements: [
      'Built 5+ complex MERN applications with real-time features',
      'Reduced bundle size by 45% through code splitting and lazy loading',
      'Mentored 3 junior developers improving team productivity by 30%',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Material-UI'],
    type: 'full-time',
  },
]
