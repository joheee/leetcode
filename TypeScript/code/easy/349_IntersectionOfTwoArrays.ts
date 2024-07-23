// first approach using set
class CustomSet<T> {
  private data: T[] = [];
  // O(data.length)
  add(element: T) {
    if (!this.data.includes(element)) {
      this.data.push(element);
    }
  }
  // O(1)
  get() {
    return this.data;
  }
}
function intersectionSets(nums1: number[], nums2: number[]): number[] {
  let set: CustomSet<number> = new CustomSet<number>();
  // O(nums1.length)
  nums1.forEach((n1) => {
    // O(nums2.length)
    nums2.forEach((n2) => {
      //O(min(nums1.length, nums2.length))
      if (n1 === n2) set.add(n2);
    });
  });
  // O(nums1.length * nums2.length * min(nums1.length, nums2.length))
  return set.get();
}

function intersection(nums1: number[], nums2: number[]): number[] {
  return intersectionSets(nums1, nums2);
}

export function IntersectionOfTwoArrays() {
  const num1: number[] = [4, 9, 5];
  const num2: number[] = [9, 4, 9, 8, 4];
  console.log(intersection(num1, num2));
}
