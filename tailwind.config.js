/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    options: {
      // Do not remove the following classes when doing the purge
      // because they are added dynamically in the markdown files
      safelist: [
        "text-4xl",
        "font-bold",
        "text-gray-900",
        "mb-4",
        "mt-8",
        "text-3xl",
        "text-2xl",
        "font-semibold",
        "text-gray-700",
        "text-xl",
        "font-medium",
        "text-gray-600",
        "text-lg",
        "text-gray-500",
        "text-base",
        "text-gray-400",
        "my-6",
      ],
    },
  },
}
