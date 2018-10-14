//module.exports = {
var definitions = {
  HARVESTER: {
    desiredAmount: 0,
    composition: [WORK, WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE
    ],
    role: 'harvester'
  },
  DEPOSITOR: {
    desiredAmount: 0,
    composition: [WORK, WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE
    ],
    role: 'depositor'
  },
  BUILDER: {
    desiredAmount: 1,
    composition: [WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY, CARRY,
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
    desiredAmount: 0,
    composition: [WORK, WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE
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
  },
  STATIC_HARVESTER: {
    desiredAmount: 2,
    composition: [WORK, WORK, WORK, WORK, WORK,
      MOVE
    ],
    role: 'staticHarvester'
  },
  CARRIER: {
    desiredAmount: 2,
    composition: [WORK,
        CARRY, CARRY, CARRY,
      MOVE, MOVE ,MOVE, MOVE, MOVE
    ],
    role: 'carrier'
  },
}
module.exports = definitions;
