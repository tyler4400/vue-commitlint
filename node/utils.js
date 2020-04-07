/**
 * 睡眠延迟函数
 * @param ms 延迟时间
 * @returns {Promise<unknown>}
 */
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

module.exports = { sleep };
