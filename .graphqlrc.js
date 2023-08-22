module.exports = {
  projects: {
    web: {
      schema: 'apps/web/graphql/**/schema/*.graphql',
      documents: ['apps/web/graphql/**/client/*.graphql'],
    }
  }
}
