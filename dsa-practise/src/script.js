document.addEventListener("DOMContentLoaded", function () {
  const executeButton = document.getElementById("executeButton");
  const output = document.getElementById("output");
  const functionSelect = document.getElementById("functionSelect");
  const arrayDisplay = document.getElementById("arrayDisplay");

  const array = [1, 2, 4, 6, 1, 2, 5];

  const functionsMap = {
    sort: sortArray,
    sum: sumArray,
    isSorted: checkIsArraySorted,
    secondLargestNumber: secondLargestNum,
    secondSmallestNumber: secondSmallestNumber,
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
    console.info("data is", data);
    for (let i = 1; i < data.length; i++) {
      if (data[i] > data[i - 1]) {
        console.log("Check Values", data[i], data[i - 1]);
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
    console.log("Second Largest Element is ", secLargest);
    return secLargest;
  }

  function secondSmallestNumber(data) {
    let smallest = data[0];
    let secSmallest = 100;
    console.log("Before Sort", smallest, secSmallest);

    for (i = 0; i < data.length; i++) {
      if (smallest > data[i]) {
        secSmallest = smallest;
        smallest = data[i];
      } else if (data[i] != smallest && data[i] < secSmallest) {
        secSmallest = data[i];
      }
    }
    console.log("SMAllest 1 and 2 Num is", smallest, secSmallest);
    return secSmallest;
  }
  // -------------XXXXXXXXXXX-----------------------

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

// // let data = [1, 2, 3, 4, 5, 6, 7, 8];
// // console.log("Check data before check", data);
// const checkSortedArrayOrNot = (data) => {
//   for (let i = 1; i < data.length; i++) {
//     if (data[i] > data[i - 1]) {
//       console.log("Check Values", data[i], data[i - 1]);
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// // checkSortedArrayOrNot(data);
// // console.log(checkSortedArrayOrNot(data));

// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.getElementById("myButton");
//   const output = document.getElementById("output");

//   button.addEventListener("click", handleButtonClick);

//   function handleButtonClick() {
//     const array = [34, 7, 23, 32, 5, 62];
//     // const sortedArray = sortArray(array);
//     const dsaIsSorted = checkIsArraySorted();
//     displayResult(dsaIsSorted);
//   }

//   function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
//   }

//   function checkIsArraySorted() {
//     let data = [1, 2, 3, , 6, 4, 5, 6, 7, 8];
//     console.info("data is", data);
//     for (let i = 1; i < data.length; i++) {
//       if (data[i] > data[i - 1]) {
//         console.log("Check Values", data[i], data[i - 1]);
//       } else {
//         return false;
//       }
//     }
//     return true;
//   }

//   function displayResult(result) {
//     // output.textContent = "Sorted Array: " + result.join(", ");
//     output.textContent = "Sorted Array: " + result;
//   }
// });
