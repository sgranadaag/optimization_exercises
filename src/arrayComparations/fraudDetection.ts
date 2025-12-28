import { complexityMeassure } from "../clossure/complexityMeassure.ts";
import {
  largeRandom as todaysTransactions,
  partialA
} from "../mocks/array.mock.ts";

const blacklist = partialA.map(item => item * 1_000_000)

/* 
    Fraud Detection: Fast Intersection Check

    A fraud engine compares today’s transaction IDs with a blacklist.

    Data
    todayTransactions = largeRandom
    blacklist = noOverlapA

    Task
    Determine if any transaction is blacklisted.

    Constraints
    You only need to know if one match exists
    Most of the time there is no match
    System is under high load

    Evaluation
    Early exit strategy
    Memory usage
    Best vs worst case performance 
*/

/**
 * Best behaviour for comparing arrays
 */
const hashComparation = () => {
  const hashedBlackList = new Set(blacklist)
  for (let i = 0; i < todaysTransactions.length; i++) {
    const isBlackListedTransaction = hashedBlackList.has(todaysTransactions[i]!)
    if (isBlackListedTransaction) return console.log("La transaccion esta el la lista negra")
  }
  console.log("Ninguna transaccion encontrada en la lista negra")
}

complexityMeassure(hashComparation)