//module.exports = {
var definitions = {
  CARRIER: {
    E18N6: {
      desiredAmount: 2,
      composition: [WORK,
        CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 2,
      composition: [WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE,
      ]
    },
    role: 'carrier'
  },
  STATIC_HARVESTER: {
    E18N6: {
      desiredAmount: 3,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE
      ]
    },
    W7N3: {
      desiredAmount: 2,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE
      ]
    },
    role: 'staticHarvester'
  },
  STATIC_HARVESTER_REMOTE: {
    E18N6: {
      desiredAmount: 1,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
      ]
    },
    role: 'staticHarvesterRemote'
  },
  BUILDER: {
    E18N6: {
      desiredAmount: 1,
      composition: [WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 2,
      composition: [WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE,
      ]
    },
    role: 'builder'
  },
  HARVESTER: {
    E18N6: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, //to be able to repair container
      ]
    },
    W7N3: {
      desiredAmount: 1,
      composition: [WORK,
        CARRY,
        MOVE,
      ]
    },
    role: 'harvester'
  },
  DEPOSITOR: {
    E18N6: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE
      ]
    },
    role: 'depositor'
  },
  UPGRADER: {
    E18N6: {
      desiredAmount: 7,
      composition: [WORK, WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 5,
      composition: [WORK, WORK, WORK,
        CARRY, CARRY, CARRY,
        MOVE, MOVE
      ]
    },
    role: 'upgrader'
  },
  REPAIRER: {
    E18N6: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE
      ]
    },
    role: 'repairer'
  },
  DEFENDER: {
    E18N6: {
      desiredAmount: 0,
      composition: [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
        MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
        MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    role: 'defender'
  },
};

module.exports = definitions;
