//module.exports = {
var definitions = {
  HARVESTER: {
    desiredAmount: 3,
    composition: [WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE,
    ],
    role: 'harvester'
  },
  BUILDER: {
    desiredAmount: 1,
    composition: [WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE
    ],
    role: 'builder'
  },
  UPGRADER: {
    desiredAmount: 5,
    composition: [WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE
    ],
    role: 'upgrader'
  },
  REPAIRER: {
    desiredAmount: 1,
    composition: [WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE
    ],
    role: 'repairer'
  },
  DEFENDER: {
    desiredAmount: 0,
    composition: [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
      TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
      MOVE, MOVE, MOVE, MOVE, MOVE
    ],
    role: 'defender'
  }
}
module.exports = definitions;
