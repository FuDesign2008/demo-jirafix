// 折扣价计算工具
// discount 为折扣率：0.2 表示优惠 20%（即打 8 折）

export function discountPrice(price, discount) {
  return price * (1 - discount); // fix DEMO-1
}
