//module.exports = {
var definitions = {
  CARRIER: {
    desiredAmount: 2,
    composition: [WORK,
        CARRY, CARRY, CARRY,
      MOVE, MOVE ,MOVE, MOVE, MOVE
    ],
    role: 'carrier'
  },
  STATIC_HARVESTER: {
    desiredAmount: 2,
    composition: [WORK, WORK, WORK, WORK, WORK,
      MOVE
    ],
    role: 'staticHarvester'
  },
  BUILDER: {
    desiredAmount: 2,
    composition: [WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
    ],
    role: 'builder'
  },
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
  UPGRADER: {
    desiredAmount: 4,
    composition: [WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE, MOVE
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
};

module.exports = definitions;
