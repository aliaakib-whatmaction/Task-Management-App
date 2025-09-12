import { findMax, findMin, reverseArray } from "../utils/arrayUtils";

const sampleTasks = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
  { id: 4, name: "Task 4" },
  { id: 5, name: "Task 5" },
];

describe("Array Utilities Tests", () => {
  // TEST reversArray
  test("reverArray should reverse the order of tasks", () => {
    const result = reverseArray(sampleTasks);
    expect(result[0].id).toBe(5); // First element should be the last
    expect(result[result.length - 1].id).toBe(1); // Last should now be the first
  });

  // TEST findMax
  test("FindMax should return the highest ID", () => {
    const maxId = findMax(sampleTasks);
    expect(maxId).toBe(5);
  });

  // TEST findMin
  test("FindMin should return tje lowest Id", () => {
    const minId = findMin(sampleTasks);
    expect(minId).toBe(1);
  });

  // EDGE CASE : Empty Array
  // EDGE CASE: Empty Array
  test("findMax and findMin should return null for empty array", () => {
    expect(findMax([])).toBeNull();
    expect(findMin([])).toBeNull();
  });
});
