import { complexityMeassure } from "../clossure/complexityMeassure.ts"
import { largeRandom } from "../mocks/array.mock.ts"

const configA = largeRandom
const configB = largeRandom.slice()
  .sort(() => Math.random() - 0.5);

/*
    Drift Detection
    
    You deploy a system across multiple environments.
    Each environment reports enabled feature flags.

    Task:
    Detect any difference between configurations.

    Constraints:
    Fail fast on first difference
    Large arrays
    Order is irrelevant

    Evaluation
    Detection speed
    Memory vs CPU trade-offs 
*/

/**
 * Best approach:
 * is in the order of O(n + m) thus the creation of Set is M cost and just happend one time
 */

const hashComparation = () => {
  const hashedConfig = new Set(configB)

  for (let i = 0; i < configA.length; i++) {
    const valueExist = hashedConfig.has(configA[i]!)
    if (!valueExist) return console.log("The data is not equal")
  }

  return console.log("The data is equal")
}

/**
 * expensivest solution:
 * is more costs than the double for approach bacause it need to call a function for each config A iteration
 * so the cost increments in constant value for each iteration, and also continues interating over each element
 * of the config b, so contiunues being a O(n2) cost plus an extra constant cost
 */
const recursiveComparation = (value: number, dataArray: number[], start: number, end: number): boolean => {
  const difference = end - start
  if (start >= end) return false
  if (difference == 1) {
    return value == dataArray[start]
  }
  const alfLength = Math.floor((difference) / 2)
  const leftPart = recursiveComparation(value, dataArray, start, start + alfLength)
  const rigthPart = recursiveComparation(value, dataArray, start + alfLength, end)
  return leftPart || rigthPart
}

const divideAndConquer = () => {
  let thereAreEqual = true
  for (let i = 0; i < configA.length; i++) {
    const valueExist = recursiveComparation(configA[i]!, configB, 0, configB.length)
    if (!valueExist) thereAreEqual = false
  }
  return thereAreEqual
}

/**
 * Good approach:
 * is a O(n2) but whithout constant cost
 */
const traditionalDriftDetection = () => {
  let thereAreEqual = true
  for (let i = 0; i < configA.length; i++) {
    let flag = false;
    for (let j = 0; j < configB.length; j++) {
      if (configA[i] == configB[j]) {
        flag = true
      }
    }
    if (!flag) thereAreEqual = false
  }

  if (!thereAreEqual) return console.log("the data is not equal")
  console.log("the data is equal")
}

/**
 * Has the same cost of traditional approach
 */
const imperativeDriftDetection = () => {
  const iteratorA = configA.map((Aitem) => configB.includes(Aitem))
  if (iteratorA.some((value) => !value)) return console.log("the data is not equal")
  console.log("the data is equal")
}

complexityMeassure(hashComparation)