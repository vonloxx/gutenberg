(wp => {
  const uid = window.userSettings ? window.userSettings.uid || 1 : 1;
  const storageKey = `WP_DATA_USER_${uid}`;
  const { data } = wp;

  data.use(data.plugins.persistence, { storageKey });
  data.use(data.plugins.controls);
})(wp);