// define a new console
window.logLevel = 1;

const style = {
  log: [
    "%c%s",
    "color: #ffffff;padding: 4px;border-radius: 5px;background-color: rgb(44, 175, 72);",
    new Date().toLocaleString()
  ],
  warn: [
    "%c%s",
    "color: #f5f0f0;padding: 4px;border-radius: 5px;background-color: rgba(223, 39, 245, 0.92);",
    new Date().toLocaleString()
  ],
  info: [
    "%c%s",
    "color: #f5f0f0;padding: 4px;border-radius: 5px;background-color: rgba(56, 150, 183);",
    new Date().toLocaleString()
  ],
  error: [
    "%c%s",
    " color: #ffffff;padding: 4px;border-radius: 5px;background-color: rgb(255, 0, 0);",
    new Date().toLocaleString()
  ]
};

window.console = (function(oldConsole) {
  let newConsole = Object.create(null);

  for (let name in oldConsole) {
    newConsole[name] = function() {
      if (window.logLevel > 0) {
        const arr = style[name] || [];
        oldConsole[name].call(oldConsole, ...arr, ...arguments);
      }
    };
  }
  return newConsole;
})(window.console);
