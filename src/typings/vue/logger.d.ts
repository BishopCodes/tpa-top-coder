import Vue from 'vue';
import { Logger } from '@/helpers/logger';

declare module 'vue/types/vue' {
  interface Vue {
    $logger: Logger
  }
}
