import { Config, BuildConfig } from 'vvdoc'

export const config: Config = {
  title: 'vvModal',
  logo: '/vvmodal.png',
  repository: 'https://github.com/zwmmm/vvModal',
  docsearch: {
    appId: '',
    indexName: '',
    apiKey: ''
  },
  menus: [
    {
      text: '首页',
      active: '^/',
      path: '/'
    },
    {
      text: 'API',
      active: '^/apis',
      path: '/apis/'
    }
  ],
  chapters: {
    '/apis/': [
      {
        name: 'Apis',
        children: [
          {
            name: 'create',
            path: '/apis/'
          },
          {
            name: 'show',
            path: '/apis/show'
          },
          {
            name: 'antdModal',
            path: '/apis/antdModal'
          },
          {
            name: 'antdDrawer',
            path: '/apis/antdDrawer'
          }
        ]
      },
      {
        name: 'Hooks',
        children: [
          {
            name: 'useModal',
            path: '/apis/useModal'
          },
          {
            name: 'useShow',
            path: '/apis/useShow'
          },
          {
            name: 'useHide',
            path: '/apis/useHide'
          }
        ]
      }
    ]
  },
  theme: {
    styles: {
      colors: {}
    }
  }
}

/**
 * 构建配置，参考vite配置文档
 */
export const buildConfig: BuildConfig = {}