import _Vue from 'vue';
import LoggerInstance from '@/helpers/logger';

export default function LoggerPlugin(Vue: typeof _Vue): void {
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$logger = LoggerInstance;
}
