// ================ BEGIN APP.JS ================ //
const callback = () => {

};

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}

// ================ END APP.JS ================ //
