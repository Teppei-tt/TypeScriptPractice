import { isZero } from "./isZero";

test("The answer is zero ?", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});

test("1を渡したらfalseになること", () => {
    const result = isZero(1);
    expect(result).toBe(false);
});
