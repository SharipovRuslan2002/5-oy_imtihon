// 1-lesson


// function prime___numberi(n) {
//     if (n <= 1) {
//         return false;
//     }
//     if (n <= 3) {
//         return true;
//     }
//     if (n % 2 === 0 || n % 3 === 0) {
//         return false;
//     }
//     let i = 5;
//     while (i * i <= n) {
//         if (n % i === 0 || n % (i + 2) === 0) {
//             return false;
//         }
//         i += 6;
//     }
//     return true
// }
// console.log(prime__number(7))

// 2-lesson


function countWords() {
    let textareaValue = document.getElementById("myTextarea").value;
    let wordCount = textareaValue.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;
    document.getElementById("wordCount").innerText = "Textarea da " + wordCount + " so'z mavjud.";
}


// 3-lesson


function countLetters() {
    let input = document.getElementById('inputText').value.toLowerCase();
    let title = 0;
    let cound = 0;

    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      if ('aeiou'.indexOf(letter) !== -1) {
        title++;
      } else if (/[a-z]/.test(letter)) {
        cound++;
      }
    }

    document.getElementById('result').innerHTML = "Unli harflar soni: " + title + "<br>Undosh harflar soni: " + cound;
  }

// 4-lesson

// function rotateArray(arr, k) {
//     k = k % arr.length;
//     arr.unshift(...arr.splice(arr.length - k));
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let result = rotateArray(arr, k);
// console.log(result); 

// 5-lesson

// function findSum(array, target) {
//     let Numbers = new Map()
//     for (let i = 0; i < array.length; i++) {
//         let cound = target - array[i]
//         if (Numbers.has(cound)) {
//             return [Numbers.get(cound), i]
//         }
//         Numbers.set(array[i], i)
//     }
//     return null
// }
// let arr = [2, 3, 1, 2, 4, 3];
// let target = 7
// let result = findSum(arr, target)
// if (result) {
//     console.log(`(${result[0]}, ${result[1]})`)
// } else {
// }

// 6-lesson


// function degree_check(num, degree) {
//     return num % degree === 0;
// }
// console.log(degree_check(8, 2))
// console.log(degree_check(7, 2))


// 7-lesson


// function Palindrome(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(Palindrome([1, 2, 2, 1]))
// console.log(Palindrome([1, 2, 3, 1]))


// 8-lesson

// function Object_Array(array) {
//     let obj = {}
//     array.forEach(item => {
//       obj[item] = item.length
//     })
//     return obj
//   }
//   let input_Array = ["text", "world", "laptop"]
//   let output_Object = Object_Array(input_Array)
//   console.log(output_Object)

// 9-lesson

// function adding_numbers(arr) {
//     let Numbers = arr.filter(num => num !== 0)
//     let Count = arr.length - Numbers.length
//     return [...Numbers, ...Array(Count).fill(0)]
// }
// let  title_Array = [0, 3, 0, 4, 3]
// let  resultArray =  adding_numbers(title_Array)
// console.log(resultArray)

// 10-lesson

// function one_difference(arr1, arr2) {
//     let set1 = new Set(arr1)
//     let set2 = new Set(arr2)
//     let result = arr2.filter(item => set1.has(item))
//     return result
// }
// let arr1 =  [8,3,5,1]
// let arr2 =  [3,5,9] 
// console.log(one_difference(arr1, arr2));