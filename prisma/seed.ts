import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create Categories
  const categoriesData = [
    { name: 'Full Stack', slug: 'full-stack' },
    { name: 'AI/ML', slug: 'ai-ml' },
    { name: 'Data Science', slug: 'data-science' },
    { name: 'Generative AI', slug: 'generative-ai' },
    { name: 'Computer Vision', slug: 'computer-vision' },
    { name: 'NLP', slug: 'nlp' },
    { name: 'Research', slug: 'research' },
    { name: 'Enterprise', slug: 'enterprise' },
  ]
  
  for (const cat of categoriesData) {
    await prisma.projectCategory.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }

  // Create Technologies
  const techsData = [
    { name: 'React.js', slug: 'react-js', type: 'frontend' },
    { name: 'Next.js', slug: 'next-js', type: 'frontend' },
    { name: 'TypeScript', slug: 'typescript', type: 'frontend' },
    { name: 'Python', slug: 'python', type: 'backend' },
    { name: 'Django', slug: 'django', type: 'backend' },
    { name: 'SQLite', slug: 'sqlite', type: 'database' },
    { name: 'PostgreSQL', slug: 'postgresql', type: 'database' },
    { name: 'Prisma', slug: 'prisma', type: 'database' },
    { name: 'Pandas', slug: 'pandas', type: 'ai_ml' },
    { name: 'Scikit-learn', slug: 'scikit-learn', type: 'ai_ml' },
    { name: 'LLM', slug: 'llm', type: 'ai_ml' },
    { name: 'RAG', slug: 'rag', type: 'ai_ml' },
  ]
  
  for (const tech of techsData) {
    await prisma.technology.upsert({
      where: { slug: tech.slug },
      update: {},
      create: tech,
    })
  }

  // Create Courses
  await prisma.course.upsert({
    where: { slug: 'python-full-stack' },
    update: {},
    create: {
      title: 'Python Full Stack Development',
      slug: 'python-full-stack',
      shortDescription: 'Learn how to build complete modern web applications using Python, Django, REST APIs, SQL databases, React.js and modern frontend technologies.',
      description: 'Comprehensive training focused on real-world projects, modern technologies and hands-on development.',
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      isFeatured: true,
      technologies: {
        connect: [
          { slug: 'python' },
          { slug: 'django' },
          { slug: 'react-js' },
          { slug: 'sqlite' },
        ]
      }
    }
  })

  await prisma.course.upsert({
    where: { slug: 'nextjs-full-stack' },
    update: {},
    create: {
      title: 'Next.js Full Stack Development',
      slug: 'nextjs-full-stack',
      shortDescription: 'Learn modern full-stack web development using Next.js, React, TypeScript, APIs, databases and production-ready application architecture.',
      description: 'Comprehensive training focused on real-world projects, modern technologies and hands-on development.',
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      isFeatured: true,
      technologies: {
        connect: [
          { slug: 'next-js' },
          { slug: 'react-js' },
          { slug: 'typescript' },
          { slug: 'prisma' },
          { slug: 'sqlite' },
        ]
      }
    }
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
