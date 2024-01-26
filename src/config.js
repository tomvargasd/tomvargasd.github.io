module.exports = {
  email: 'tomvargasd@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/tomvargasd',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/tomvargasd',
    },
    
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/tomvargas',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tomvargasd',
    },
   
    
  ],

  navLinks: [
    {
      name: 'Blog',
      url: '/pensieve',
    },
    {
      name: 'Sobre mi',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
    {
      name: 'Proyectos',
      url: '/#projects',
    },
    {
      name: 'Contáctame',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#93DDFB',
    navy: '#93DDFB',
    darkNavy: '#93DDFB',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
