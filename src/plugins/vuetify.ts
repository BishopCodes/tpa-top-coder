import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import AppIcon from '@/components/icons/AppIcon.vue';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  },
  icons: {
    iconfont: 'mdiSvg',
    values: {
      appLogo: {
        component: AppIcon,
        props: {
          color: '#FFF',
        },
      },
    },
  },
});
