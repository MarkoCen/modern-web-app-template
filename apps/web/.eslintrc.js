module.exports = {
  root: true,
  extends: ['next/core-web-vitals', '@pkg/eslint-config'],
  settings: {
    next: {
      rootDir: 'apps/web',
    },
  },
};
