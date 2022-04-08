import { renderHook } from "@testing-library/react-hooks";
import useJustForTest, { User } from "../../hooks/useJustForTest";

test("show multiple examples", () => {
  const { result } = renderHook(() => useJustForTest());
  const {
    testBoolTrue,
    testAssertEquals,
    testToBeInstanceOf,
    testToHaveReturned,
    testToContainEqual,
    testToStrictEqual,
    testToBeLessThan,
    testToBeNull,
  } = result.current;

  expect(testBoolTrue()).toBeTruthy();
  expect(testAssertEquals()).toEqual("same");
  expect(1).not.toBeNaN();
  expect(testToBeInstanceOf()).toBeInstanceOf(User);
  const fnTest = jest.fn(testToHaveReturned);
  fnTest();
  expect(fnTest).toHaveReturnedWith(0);

  // toContainEqual
  // testToStrictEqual

  const toContainEqualExpected = {
      a: "a",
      b: "b",
    };

  const toStrictEqualExpected = [{ delicious: true, sour: false }];

  expect(testToContainEqual()).toContainEqual(toContainEqualExpected);
  expect(testToStrictEqual()).toStrictEqual(toStrictEqualExpected);

  expect(testToBeLessThan()).toBeLessThanOrEqual(2000);
  expect(testToBeNull()).toBeNull();

});
