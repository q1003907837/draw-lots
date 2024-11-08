import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    authPageLayout: 'panel-center',
    layout: 'mixed-nav',
    preferencesButtonPosition: 'fixed',
  },
  footer: {
    enable: true,
  },
  shortcutKeys: {
    globalSearch: false,
  },
  theme: {
    builtinType: 'pink',
    colorPrimary: 'hsl(347 77% 60%)',
  },
  widget: {
    globalSearch: false,
    notification: false,
    themeToggle: false,
  },
});
