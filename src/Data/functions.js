/*
randomTopChoice takes in an array of strings (hogwart houses)
counts the instances of each house into an count object
the count object is flattened to a countArray and sorted by highest number
countArray is cut down by the top house OR top houses
a random top house is returned
 */

export const randomTopChoice = (answers) => {
    let count = {};

    for (let i = 0; i < answers.length; i++) {
      count.hasOwnProperty(answers[i])
        ? count[answers[i]]++
        : (count[answers[i]] = 1);
    }

    let countArray = Object.entries(count);
    countArray.sort((a, b) => (a[1] > b[1] ? -1 : 1));

    let topScore = countArray[0][1];
    let topArray = [];
    for (let i = 0; i < countArray.length; i++) {
      if (countArray[i][1] === topScore) {
        topArray.push(countArray[i]);
      } else {
        break;
      }
    }

    return topArray[Math.floor(Math.random() * topArray.length)][0];
}

export const shuffle = (sourceArray) => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}