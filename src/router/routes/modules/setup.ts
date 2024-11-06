import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const setup: AppRouteModule = {
  path: '/setup',
  name: 'SetupDemo',
  component: LAYOUT,
  redirect: '/setup/index',
  meta: {
    orderNo: 1,
    hideChildrenInMenu: true,
    icon: 'lucide-lab:flower-lotus',
    title: '抽签',
    // hideMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'SetupDemoPage',
      component: () => import('/@/views/setup/index.vue'),
      meta: {
        title: '抽签',
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
}

export default setup
