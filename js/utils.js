// utils.js
// 如果需要添加辅助函数，可以在此文件中编写
// utils.js
// 如果未来需要在多个模块中复用的函数，可以在此定义

/**
 * 线性插值函数，用于在两个值之间插值。
 * @param {number} start - 起始值
 * @param {number} end - 结束值
 * @param {number} t - 0 到 1 之间的数值，用于插值
 * @returns {number} - 插值后的结果
 */
export function lerp(start, end, t) {
    return start + t * (end - start);
  }
  
  /**
   * 随机生成范围内的浮点数。
   * @param {number} min - 最小值
   * @param {number} max - 最大值
   * @returns {number} - 在 min 和 max 之间的随机数
   */
  export function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  