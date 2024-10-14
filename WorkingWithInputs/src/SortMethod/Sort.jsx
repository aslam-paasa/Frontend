/**
 * Q. .Sort Method:
 * => arr.sort([compareFunction])
 * => Sort Numbers in ascending order.
 */


export default function Sort() {
  const numbers = [5, 3, 8, 1, 10];

  // Sorting numbers in ascending order
  // Output: [1, 3, 5, 8, 10]
  const sortedNum = numbers.sort((a, b) => b - a);
  
  return (
    <div className="App">
      <h1>Module-7: Sorting Method</h1>
      <p>Sorted Numbers: {sortedNum}</p>
    </div>
  );
}
