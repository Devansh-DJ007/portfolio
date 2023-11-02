import { type SchemaTypeDefinition } from 'sanity'

import frontPage from './schemas/frontPage'
import experience from './schemas/experience'
import project from './schemas/project'
import techstack from './schemas/techstack'
import social from './schemas/social'
import skill from './schemas/skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [frontPage, experience, project, techstack, social, skill],
}
