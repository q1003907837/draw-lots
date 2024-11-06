import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    orderNo: 0,
    hideChildrenInMenu: true,
    icon: 'heroicons:home-solid',
    title: '首页',
  },
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
}

export default home
