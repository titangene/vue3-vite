import { Quasar } from 'quasar';
import zhTW from 'quasar/lang/zh-TW';

import '@quasar/extras/material-icons/material-icons.css';

import 'quasar/src/css/index.sass';

export default {
  install(app) {
    app.use(Quasar, {
      lang: zhTW
    });
  }
};
