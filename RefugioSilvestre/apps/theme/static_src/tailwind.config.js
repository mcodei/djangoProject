/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

 const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {
            backgroundColor: theme => ({
                ...theme('colors'),
                'primary': '#13542D',
                'secondary': '#C3CF0A',
                'tertiary': '#E7EEE8',
                'mainFooter': '#083618',
                'mainNavbar': 'rgba(0, 0, 0, 0.62)',
            }),
            colors: {
                'primary': '#13542D',
                'secondary': '#C3CF0A',
                'tertiary': '#E7EEE8',
                'colorFooter': '#7cbf93',
                'colorBodyText': '#6d6d6d',
                'secondaryColorText': '#ffffff',
            },
            fontFamily: {
                Inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        require('autoprefixer'),

        // Start of the scrollbar hidden plugin
        
        plugin(function ({ addUtilities }) {
            addUtilities({
              '.scrollbar-hide': {
                /* IE and Edge */
                '-ms-overflow-style': 'none',
          
                /* Firefox */
                'scrollbar-width': 'none',
          
                /* Safari and Chrome */
                '&::-webkit-scrollbar': {
                  display: 'none'
                }
              },
              
              '.scrollbar-default': {
                /* IE and Edge */
                '-ms-overflow-style': 'auto',
          
                /* Firefox */
                'scrollbar-width': 'auto',
          
                /* Safari and Chrome */
                '&::-webkit-scrollbar': {
                  display: 'block'
                }
              }
            }, ['responsive'])
          })
        // End of the scrollbar hidden plugin
    ],
    
}
