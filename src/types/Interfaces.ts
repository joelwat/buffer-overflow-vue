import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import { Store } from 'vuex';

export interface BootConfig {
  el: string;
  i18n?: VueI18n.I18nOptions;
  router?: VueRouter;
  store?: Store<any>; // eslint-disable-line
}
