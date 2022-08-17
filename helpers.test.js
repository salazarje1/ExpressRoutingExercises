const { mean, median, mode } = require('./helpers'); 



describe('Testing helper functions', function() {
  test('The mean function', () => {
    expect(mean([1,2,3,4])).toBe(2.5);
    expect(mean([-1, -2, 3, 4])).toBe(1);
  })

  test('The median function', () => {
    expect(median([1,2,3,4])).toBe(2.5);
    expect(median([1,2,3,4,5])).toBe(3);
    expect(median([-3,-1,2,4,6,3])).toBe(2.5);
    expect(median([-3,-1,2,4,6,3,-4])).toBe(2);
    expect(median(['a', 'b'])).toBe(NaN);
  })

  test('The mode function', () => {
    expect(mode([1, 2, 3, 4])).toBe(4); 
    expect(mode([1, 2, 2, 3, 4])).toBe(2); 
  })
})


