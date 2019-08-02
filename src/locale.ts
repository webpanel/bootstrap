import cs_CZ from 'antd/lib/locale-provider/cs_CZ';
import en_US from 'antd/lib/locale-provider/en_US';

export const locales = { 'en-US': en_US, 'cs-CZ': cs_CZ };
export const currentLocale = locales[navigator.language] || locales['en-US'];
