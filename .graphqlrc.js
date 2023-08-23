module.exports = {
  projects: {
    web: {
      schema: 'apps/web/graphql/modules/**/*.graphql',
      documents: ['apps/web/graphql/documents/**/*.{graphql,ts}'],
      include: 'apps/web/graphql/documents/**/*.ts'
    }
  }
}
