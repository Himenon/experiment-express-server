// @ts-check
const loadJs = (url) => {
  const script = document.createElement("script");
  script.async = true;
  script.src = url;
  document.querySelector("head").appendChild(script);
  return new Promise((resolve, reject) => {
      script.addEventListener("load", () => {
          resolve(script);
      });
      script.addEventListener("error", () => {
          reject(new Error(`Can not load: ${url}`));
      });
  });
};

/**
 * 順序解決
 */
const main = () => {
  Promise.all([
    loadJs("/assets/js/react.development.js"),
    loadJs("/assets/js/react-dom.development.js")
  ]).then(() => {
    loadJs("/assets/js/main.js")
  })
}

main();
