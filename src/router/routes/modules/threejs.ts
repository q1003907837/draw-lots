import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const vr: AppRouteModule = {
  path: '/vr',
  name: 'Vr',
  component: LAYOUT,
  redirect: '/vr/index',
  meta: {
    orderNo: 2,
    hideChildrenInMenu: true,
    icon: 'fa6-solid:house-fire',
    title: 'vr看房',
  },
  children: [
    {
      path: 'index',
      name: 'VrIndex',
      component: () => import('/@/views/vr/index.vue'),
      meta: {
        title: 'vr看房',
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
}

export default vr
