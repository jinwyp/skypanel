import { createI18n } from 'vue-i18n'
import zh from './locales/zh.ts'
import en from './locales/en.ts'

const i18n = createI18n({
    // Use Composition API, Set to false
    allowComposition: true,
    legacy: false,
    locale: 'zh',
    messages: {
      zh,
      en
    }
  });
  
export default i18n;
