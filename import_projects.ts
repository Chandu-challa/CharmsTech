import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function main() {
  const rawData = fs.readFileSync('projects_parsed.json', 'utf-8');
  const projects = JSON.parse(rawData);

  console.log(`Loaded ${projects.length} projects from JSON.`);

  let successCount = 0;
  let categoryMap = new Map();

  // Create Categories first
  const uniqueCategories = [...new Set(projects.map((p: any) => p.category))];
  
  for (const catName of uniqueCategories) {
    const slug = slugify(catName as string);
    const existing = await prisma.projectCategory.findUnique({ where: { slug } });
    if (!existing) {
      const newCat = await prisma.projectCategory.create({
        data: { name: catName as string, slug, description: `${catName} projects and applications.` }
      });
      categoryMap.set(catName, newCat.id);
      console.log(`Created category: ${catName}`);
    } else {
      categoryMap.set(catName, existing.id);
    }
  }

  // Insert Projects
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const categoryId = categoryMap.get(p.category);
    
    // Some titles might be duplicated across categories, append unique ID to slug to be safe
    const baseSlug = slugify(p.title);
    const uniqueSlug = `${baseSlug}-${i+1}`;
    
    const projectCode = `CTL-${p.degree === 'M.Tech' ? 'M' : 'B'}-${(i+1).toString().padStart(4, '0')}`;

    try {
      await prisma.project.upsert({
        where: { slug: uniqueSlug },
        update: {},
        create: {
          title: p.title,
          slug: uniqueSlug,
          projectCode,
          degree: p.degree,
          categoryId,
          difficulty: p.degree === 'M.Tech' ? 'Advanced' : 'Intermediate',
          shortDescription: `A comprehensive ${p.title} project tailored for ${p.degree} students.`,
          description: `This is a complete ${p.degree} project on ${p.title}. It includes full source code, architecture diagrams, API documentation, and implementation details using modern industry-standard technologies.`,
          isPublished: true,
          status: 'Available'
        }
      });
      successCount++;
      if (successCount % 50 === 0) console.log(`Inserted ${successCount} projects...`);
    } catch (e) {
      console.error(`Error inserting ${p.title}:`, e);
    }
  }

  console.log(`Finished! Successfully inserted ${successCount} projects.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
