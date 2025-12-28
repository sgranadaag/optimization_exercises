import { smallRandom as feedA, sortedDesc } from "../mocks/array.mock.ts";
import { complexityMeassure } from "../clossure/complexityMeassure.ts"
const feedB = sortedDesc.reverse()

/* 
  Real-Time Feed Merge

  Two services produce sorted event IDs.

  Data
  feedA = sortedAsc
  feedB = sortedDesc.reverse()

  Task
  Return only the shared event IDs.

  Constraints
  Data is already sorted
  Avoid allocating large extra memory
  This runs continuously

  Evaluation
  Pointer movement logic
  Cache friendliness
  Why this beats hashing here 
*/

/**
 * Worst approach
 */
const recursiveMerge = (ids: number[], hashedIds: Set<number>, index: number, sharedIds: number[]) => {
  if (index >= ids.length) return sharedIds

  const value = ids[index]
  if (hashedIds.has(value!)) return recursiveMerge(ids, hashedIds, index + 1, [...sharedIds, value!])
  return recursiveMerge(ids, hashedIds, index + 1, sharedIds)
}

const feedMerge = () => {
  const hashedFeed = new Set(feedB)
  const sharedIds = recursiveMerge(feedA, hashedFeed, 0, [])
  console.log(sharedIds)
}

/**
 * Best approach:
 * this solve the problem with a better approach
 */
const imperativeMerge = () => {
  const hashedFeed = new Set(feedB)
  const sharedIds = []
  for (let i = 0; i < feedA.length; i++) {
    if (hashedFeed.has(feedA[i]!)) sharedIds.push(feedA[i])
  }

  console.log(sharedIds)
}



complexityMeassure(imperativeMerge)