import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";



test("substraction", () => {
// const { substraction } = renderHook(() => useCalculator());
    const { result } = renderHook(() => useCalculator());
    const { substraction } = result.current;
    const res = substraction("1", "1");
    expect(res).toEqual("0");
});

test("square root", () => {
    const { result } = renderHook(() => useCalculator());
    const { square } = result.current;
    const res = square("1", "1");
    expect(res).toEqual("2");
});
