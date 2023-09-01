module.exports = {
  projects: {
    web: {
      schema: 'apps/web/graphql/modules/**/schema/*.graphql',
      documents: ['apps/web/graphql/modules/**/operations/*.graphql'],
    }
  }
}
