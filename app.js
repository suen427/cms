var path = require('path');

var apos = require('apostrophe')({
  shortName: 'cms',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    'link-widgets': {},

    'page-link-widgets': {},

    'drawer-widgets': {},

    'two-column-widgets': {},

    'people': {},

    'people-widgets': {
      extend: 'apostrophe-pieces-widgets',
      filters: { //for performance, only get the needed feilds
        projection: {
          slug: 1,
          title: 1,
          type: 1,
          tags: 1,
          phone: 1,
          thumbnail: 1
        }
      }
    },

    'people-pages':{}

  }
});
