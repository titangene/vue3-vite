import { setLocale } from 'yup';

setLocale({
  mixed: {
    default: '${path} 為無效',
    required: '${path} 為必填'
  },
  string: {
    email: '${path} 須為有效的電子信箱',
    min: '${path} 不能小於 ${min} 個字元'
  },
  number: {
    min: '${path} 不能小於 ${min}'
  },
  array: {
    min: '${path} 的長度不能小於 ${min}'
  }
});
