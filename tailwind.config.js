/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"
    ],
  theme: {
    fontSize:{
      'lg':['56px',{lineHeight:'70px',fontWeight:'700'}],
      'md':['40px',{lineHeight:'51px',fontWeight:'700'}],
      'sm':['32px',{lineHeight:'40px',fontWeight:'700'}],
      'bs':['18px',{lineHeight:'28px',fontWeight:'500'}],
    },
    colors: {
      'custom-purple': '#755CDE',
      'custom-yellow': '#F6A560',
      'custom-pink': '#F39E9E',
      'custom-red': '#EB7565',
      'custom-blue': '#61C4B7',
      'custom-dred': '#552049',
      'custom-black': '#030303',
      'custom-gray': '#7A746E',
      'custom-white': '#FFF7F0',
    },
    extend: {},
  },
  plugins: [],
}

