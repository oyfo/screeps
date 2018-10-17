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
  STATIC_HARVESTER_REMOTE: {
    desiredAmount: 1,
    composition: [WORK, WORK, WORK, WORK, WORK,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
      CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
    ],
    role: 'staticHarvesterRemote'
  },
  BUILDER: {
    desiredAmount: 1,
    composition: [WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
    ],
    role: 'builder'
  },
  HARVESTER: {
    desiredAmount: 2,
    composition: [WORK, WORK, WORK, WORK, WORK,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
      CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, //to be able to repair container
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
    desiredAmount: 5,
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
