import { sum } from "../src/sum";
describe("test sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum.add(1, 2)).toBe(3);
  });
});
