import { Quasar } from 'quasar';
import zhTW from 'quasar/lang/zh-TW';

import iconSet from 'quasar/icon-set/svg-bootstrap-icons';

import 'quasar/src/css/index.sass';

export default {
  install(app) {
    app.use(Quasar, {
      lang: zhTW,
      iconSet
    });
  }
};
