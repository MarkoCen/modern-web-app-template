const componentsPreset = require('@pkg/components/tailwind.config');
const basePreset = require('@pkg/tailwind-config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [basePreset, componentsPreset],
  content: [
    './styles/*.css',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
