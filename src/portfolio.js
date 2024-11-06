const header = {
  // Personal website link and title
  homepage: 'https://Ayushpdx05.github.io',
  title: 'Ayush.',
}

const about = {
  // About section with name, role, and bio description
  name: 'Ayush Singh',
  role: 'Software Engineer & Researcher',
  description:
    'Driven by a passion for distributed systems, computer graphics, and climate science. With experience across research, teaching, and development, I aim to blend technical skills with impactful projects. Currently developing a custom major in Distributed Systems, and leading a software consulting club to guide fellow students on real-world consulting projects.',
  resume: 'https://example.com', // replace with your actual resume link
  social: {
    linkedin: 'https://linkedin.com/in/ayush0508',
    github: 'https://github.com/Ayushpdx05',
  },
}

const projects = [
  // Showcase key projects with descriptions and tech stacks
  {
    name: 'Automated Climate Data Pipeline',
    description:
      'A pipeline that automates image selection and classification using YOLO, facilitating climate research for over 100 scientists.',
    stack: ['Python', 'OpenCV', 'PyTorch'],
    sourceCode: 'https://github.com/Ayushpdx05/climate-data-pipeline', // replace with actual repo
    livePreview: 'https://example.com/project1-live', // replace with actual link if applicable
  },
  {
    name: 'Game Data Visualizer',
    description:
      'An Angular app displaying detailed player and game statistics with shot data visualization on a basketball court.',
    stack: ['Angular', 'TypeScript', 'D3.js'],
    sourceCode: 'https://github.com/Ayushpdx05/game-data-visualizer', // replace with actual repo
    livePreview: 'https://example.com/project2-live', // replace with actual link if applicable
  },
  {
    name: 'Meal Swipe Donation Web App',
    description:
      'A web app concept focused on connecting students in need of meal assistance with available resources through meal swipe donations.',
    stack: ['React', 'Node.js', 'MongoDB'],
    sourceCode: 'https://github.com/Ayushpdx05/meal-swipe-donation', // replace with actual repo
    livePreview: 'https://example.com/project3-live', // replace with actual link if applicable
  },
]

const skills = [
  // Skillset relevant to your background and goals
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Django',
  'Flask',
  'PostgreSQL',
  'Git',
  'CI/CD',
  'Machine Learning',
  'Data Visualization',
]

const contact = {
  // Personal contact email
  email: 'ayushsingh@mail.com', // replace with actual email
}

export { header, about, projects, skills, contact }
