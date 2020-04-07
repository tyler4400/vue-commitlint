// 开关暂时是一个全局变量，可以变成app.env之类的
window.logLevel = 1;

const style = {
  log: [
    "%c%s",
    "color: #ffffff;padding: 4px;border-radius: 5px;background-color: rgb(44, 175, 72);"
  ],
  warn: [
    "%c%s",
    "color: #f5f0f0;padding: 4px;border-radius: 5px;background-color: rgba(223, 39, 245, 0.92);"
  ],
  info: [
    "%c%s",
    "color: #f5f0f0;padding: 4px;border-radius: 5px;background-color: rgba(56, 150, 183);"
  ],
  error: [
    "%c%s",
    " color: #ffffff;padding: 4px;border-radius: 5px;background-color: rgb(255, 0, 0);"
  ]
};

window.console = (function(oldConsole) {
  let newConsole = Object.create(null);

  for (let name in oldConsole) {
    newConsole[name] = function() {
      if (window.logLevel > 0) {
        const time = new Date();
        const arr = [...style[name]] || [];
        if (arr.length > 0) {
          arr.push(time.toLocaleString() + ":" + time.getUTCMilliseconds());
        }
        oldConsole[name].call(oldConsole, ...arr, ...arguments);
      }
    };
  }
  return newConsole;
})(window.console);
