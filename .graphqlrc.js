module.exports = {
  projects: {
    web: {
      schema: 'apps/web/graphql-server/modules/**/*.{graphql,ts}',
      documents: ['apps/web/graphql-server/documents/**/*.{graphql,ts}'],
      include: 'apps/web/graphql-server/documents/**/*.ts'
    }
  }
}
