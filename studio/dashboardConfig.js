export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b65c143d5cba65fecf02d9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tsj73mii',
                  apiId: '97efe928-4067-4653-9b6c-57236aab4fe6'
                },
                {
                  buildHookId: '60b65c154a73d2e5d4a8d00c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eqzzjbor',
                  apiId: '0a5f1989-bf49-4d36-9013-63b4c720f7a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raroul/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eqzzjbor.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
