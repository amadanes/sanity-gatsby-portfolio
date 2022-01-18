export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61e634dcd5eabe33fa99692f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9fv4xiy6',
                  apiId: 'd3e3053e-7f4b-4e3b-b7c6-b386a688dcf2'
                },
                {
                  buildHookId: '61e634dc8c22dc48ac9ab127',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8qjz1z55',
                  apiId: '8c438018-205d-40e0-a3e2-8ae98b7e5862'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amadanes/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8qjz1z55.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
