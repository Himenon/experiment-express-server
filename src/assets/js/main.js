console.log(`React is loaded?: ${typeof React !== "undefined"}`);
console.log(React);
console.log(`ReactDOM is loaded?: ${typeof ReactDOM !== "undefined"}`);
console.log(ReactDOM);

// 遅延実行したからと行ってパフォーマンス測定の結果に変化はなし
// setTimeout(() => {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = "/assets/css/main.css";
//   document.querySelector("head").appendChild(link);
// }, 3000);
