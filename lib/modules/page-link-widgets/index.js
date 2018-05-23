module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link to a Page',
  addFields: [
    {
      name: '_page',
      type: 'joinByOne',
      withType: 'apostrophe-page',
      label: 'Page',
      required: true,
      idField: 'pageId',
      filters: {//for performance, only get the needed feilds
        projection: {
          title: 1,
          slug: 1
        }
      }
    },
    {
      name: 'special',
      label: 'Special',
      type: 'boolean'
    }
  ]
};