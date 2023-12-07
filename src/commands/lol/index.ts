/* eslint-disable perfectionist/sort-array-includes */
/* eslint-disable perfectionist/sort-union-types */
/* eslint-disable guard-for-in */
/* eslint-disable perfectionist/sort-enums */
/* eslint-disable perfectionist/sort-objects */

import { Command, ux } from '@oclif/core'

type calculateLuckyLevelProps = {
  hasBeenLateThisWeek: boolean;
  hasWorkedFromHomeThisWeek: boolean;
  minutesLate: number;
}

type cardLevel = 'SSR' | 'SR' | 'R' | 'N'

enum PENALTY_LEVEL {
  NO_EXTRA_PENATLY = 0,
  PENALTY_LEVEL_ONE = 1,
  PENALTY_LEVEL_TWO = 2,
  PENALTY_LEVEL_THREE = 3
}

const probabilityMap = {
  [PENALTY_LEVEL.NO_EXTRA_PENATLY]: {
    SSR: 0.9,
    SR: 0.05,
    R: 0.04,
    N: 0.01
  },
  [PENALTY_LEVEL.PENALTY_LEVEL_ONE]: {
    SSR: 0.2,
    SR: 0.6,
    R: 0.15,
    N: 0.05
  },
  [PENALTY_LEVEL.PENALTY_LEVEL_TWO]: {
    SSR: 0.05,
    SR: 0.1,
    R: 0.35,
    N: 0.5
  },
  [PENALTY_LEVEL.PENALTY_LEVEL_THREE]: {
    SSR: 0.01,
    SR: 0.04,
    R: 0.05,
    N: 0.9
  },
}

const cardToPromptMap = {
  SSR: "You are lucky and you get away for free!",
  SR: "You are late! ¥10 is your penalty!",
  R: "You are late! ¥15 is your penalty!",
  N: "This is probably not your first time! ¥20 is your penalty!"
}


const pickRandomNumberFromSet = (set: { [key: string]: number }) => {
  let sum = 0;
  for (const j in set) {
    sum += set[j];
  }

  let pick = Math.random() * sum;
  for (const j in set) {
    pick -= set[j];
    if (pick <= 0) {
      return j;
    }
  }
}

export const generateProbabilityMap = (options: calculateLuckyLevelProps) => {
  let penaltyLevel: PENALTY_LEVEL = 0;
  if (options.minutesLate > 5) {
    penaltyLevel++
  }

  if (options.hasBeenLateThisWeek) {
    penaltyLevel++
  }

  if (options.hasWorkedFromHomeThisWeek) {
    penaltyLevel++
  }

  return probabilityMap[penaltyLevel]
}

const convertStringToBoolean = (answer: string) => {
  if (['n', 'N', 'no', 'No', 'NO', 'Nope', 'nope'].includes(answer)) {
    return false
  }

  return true
}

export default class LateOrLucky extends Command {
  static args = {}

  static description = 'Late or lucky'

  static examples = [
    `$lol (./src/commands/lol/index.ts)
`,
  ]

  static flags = {}

  async run(): Promise<void> {
    const name = await ux.prompt('What is your name?')

    const hasBeenLateThisWeek = convertStringToBoolean(await ux.prompt('Have you been late in the last 5 working days? (y/n)', {type: 'normal'}))

    const hasWorkedFromHomeThisWeek = convertStringToBoolean(await ux.prompt("Have you worked from home in the last 5 working days? (y/n)", {type: 'normal'}))

    const minutesLate = Number(await ux.prompt('How many minutes late are you?', {type: 'normal'}))

    const result: 'SSR' | 'SR' | 'R' | 'N' = (pickRandomNumberFromSet(generateProbabilityMap({ hasBeenLateThisWeek, hasWorkedFromHomeThisWeek, minutesLate })) || 'N') as cardLevel

    this.log(`Hi ${name}, the card you picked is ${result}. ${cardToPromptMap[result]}!`)
  }
}
