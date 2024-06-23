document.addEventListener("DOMContentLoaded", function () {
  const executeButton = document.getElementById("executeButton");
  const output = document.getElementById("output");
  const functionSelect = document.getElementById("functionSelect");
  const arrayDisplay = document.getElementById("arrayDisplay");

  // ------------------ Function Input ----------------------
  const array = [1, 2, 4, 6, 1, 2, 5];
  // ------------------ Function List ----------------------
  const functionsMap = {
    sort: sortArray,
    sum: sumArray,
    isSorted: checkIsArraySorted,
    secondLargestNumber: secondLargestNum,
    secondSmallestNumber: secondSmallestNumber,
    removeDuplicate: removeDuplicate,
    leftRotateByOne: leftRotateByOne,
    rotateByDNumber: rotateByDNumber,
  };

  displayArray(array);
  populateFunctionSelect();

  executeButton.addEventListener("click", handleButtonClick);

  function handleButtonClick() {
    const selectedFunction = functionSelect.value;
    const result = functionsMap[selectedFunction](array);
    displayResult(result);
  }

  function sortArray(arr) {
    return (
      "Sorted Array: " +
      arr
        .slice()
        .sort((a, b) => a - b)
        .join(", ")
    );
  }

  function sumArray(arr) {
    return "Sum of Array: " + arr.reduce((acc, val) => acc + val, 0);
  }

  function checkIsArraySorted(data) {
    for (let i = 1; i < data.length; i++) {
      if (data[i] > data[i - 1]) {
        console.info("Check Values", data[i], data[i - 1]);
      } else {
        return false;
      }
    }
    return true;
  }

  function secondLargestNum(a) {
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

  function secondSmallestNumber(data) {
    let smallest = data[0];
    let secSmallest = 100;

    for (i = 0; i < data.length; i++) {
      if (smallest > data[i]) {
        secSmallest = smallest;
        smallest = data[i];
      } else if (data[i] != smallest && data[i] < secSmallest) {
        secSmallest = data[i];
      }
    }
    return secSmallest;
  }

  function removeDuplicate(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    arr.sort((a, b) => a - b);
    console.info("Sorted Arraya is", arr);
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] != arr[j]) {
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

  function leftRotateByOne(arr) {
    temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
    return arr;
  }

  function rotateByDNumber(arr) {
    let d = 3;
    let temp = [d];
    for (let j = 0; j < d; j++) {
      temp[j] = arr[j];
    }
    console.log("Check", temp);
    for (i = d; i < arr.length; i++) {
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

  // -------------XXXXXXXXXXX-----------------------
  // ------------------END of Function List ----------------------

  function displayArray(arr) {
    arrayDisplay.textContent = arr.join(", ");
  }

  function displayResult(message) {
    output.textContent = message;
  }

  function populateFunctionSelect() {
    Object.keys(functionsMap).forEach((functionName) => {
      const option = document.createElement("option");
      option.value = functionName;
      option.textContent = capitalizeFirstLetter(functionName) + " Array";
      functionSelect.appendChild(option);
    });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
