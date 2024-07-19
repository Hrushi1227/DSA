export function sortArray(arr) {
  return (
    "Sorted Array: " +
    arr
      .slice()
      .sort((a, b) => a - b)
      .join(", ")
  );
}

export function sumArray(arr) {
  return "Sum of Array: " + arr.reduce((acc, val) => acc + val, 0);
}

export function checkIsArraySorted(data) {
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
      console.info("Check Values", data[i], data[i - 1]);
    } else {
      return false;
    }
  }
  return true;
}

export function secondLargestNum(a) {
  let largest = a[0];
  let secLargest = -1;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
      secLargest = largest;
      largest = a[i];
    } else if (a[i] < largest && a[i] > secLargest) {
      secLargest = a[i];
    }
  }
  return secLargest;
}

export function secondSmallestNumber(data) {
  let smallest = data[0];
  let secSmallest = 100;

  for (let i = 0; i < data.length; i++) {
    if (smallest > data[i]) {
      secSmallest = smallest;
      smallest = data[i];
    } else if (data[i] !== smallest && data[i] < secSmallest) {
      secSmallest = data[i];
    }
  }
  return secSmallest;
}

export function removeDuplicate(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  arr.sort((a, b) => a - b);
  console.info("Sorted Arraya is", arr);
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  // without Slice method truncate length of genrated array
  // Step 4: Truncate the original array to remove duplicates
  // arr.length = j + 1;
  // Step 5: Return the modified array (not necessary in this case, but for clarity)
  // return arr;
  return arr.slice(0, j + 1);
}

export function leftRotateByOne(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

export function rotateByDNumber(arr) {
  let d = 3;
  let temp = [d];
  for (let j = 0; j < d; j++) {
    temp[j] = arr[j];
  }
  console.log("Check", temp);
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }
  console.log("New Value of Array", arr);
  for (let i = arr.length - d; i < arr.length; i++) {
    console.log("Array Index value", arr.length - d);
    arr[i] = temp[i - (arr.length - d)];
  }
  console.log("Pending Element of Array", arr);
  return arr;
}

export function moveZerosToEnd(arr) {
  let left = 0; // Points to the next position to place a non-zero element
  // Traverse the array
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // Swap elements at left and right indices
      // let temp = arr[left];
      // arr[left] = arr[right];
      // arr[right] = temp;
      left++;
    }
  }
  return arr;
}

export function findTotalCountOfFactor(arr) {
  //   n = 10;
  let count = 0;
  for (let i = 0; i * i <= arr; i++) {
    if (arr % i === 0) {
      if (arr / i === i) {
        count += 1;
      } else {
        count += 2;
      }
      console.log("factors are ", i);
    }
  }
  console.log("Total Factor are ", count);
  return count;
}

export function primeNumberOrNot(arr) {
  if (arr === 1) {
    return 0;
  }
  for (let i = 2; i * i <= arr; i++) {
    if (arr % i === 0) {
      return 0;
    }
  }
  return 1;
}
