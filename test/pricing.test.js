import { test } from 'node:test';
import assert from 'node:assert/strict';
import { discountPrice } from '../src/pricing.js';

test('discountPrice 返回折后价（打 8 折）', () => {
  assert.equal(discountPrice(100, 0.2), 80);
});

test('discountPrice 零折扣返回原价', () => {
  assert.equal(discountPrice(100, 0), 100);
});

test('discountPrice 全额优惠返回 0', () => {
  assert.equal(discountPrice(100, 1), 0);
});
