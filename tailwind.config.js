/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-light': "url('./assets/images/bg-desktop-light.jpg')",
        'bg-dark': "url('./assets/images/bg-desktop-dark.jpg')",
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          brightBlue: 'hsl(220, 98%, 61%)',
        },
        neutral: {
          veryLightGray: 'hsl(0, 0%, 98%)',
          veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
          lightGrayishBlue: 'hsl(233, 11%, 84%)',
          darkGrayishBlue: 'hsl(236, 9%, 61%)',
          veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        },
        lightTheme: {
          veryLightGray: 'hsl(0, 0%, 98%)',
          veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
          lightGrayishBlue: 'hsl(233, 11%, 84%)',
          darkGrayishBlue: 'hsl(236, 9%, 61%)',
          veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        },
        darkTheme: {
          veryDarkBlue: 'hsl(235, 21%, 11%)',
          veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
          lightGrayishBlue: 'hsl(234, 39%, 85%)',
          lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
          darkGrayishBlue: 'hsl(234, 11%, 52%)',
          veryDarkGrayishBlue1: 'hsl(233, 14%, 35%)',
          veryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
        },
      },
    },
  },
  plugins: [],
}

/*
Colors
## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)
*/