// ================ BEGIN APP.JS ================ //
const cb = () => {};

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  cb();
} else {
  document.addEventListener('DOMContentLoaded', cb);
}
// ================ END APP.JS ================ //
