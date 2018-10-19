//module.exports = {
var definitions = {
  CARRIER: {
    E18N6: {
      desiredAmount: 2,
      composition: [WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE,MOVE
      ]
    },
    E18N7: {
      desiredAmount: 3,
      composition: [WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    role: 'carrier'
  },
  BUILDER: {
    E18N6: {
      desiredAmount: 1,
      composition: [WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
      ]
    },
    E18N7: {
      desiredAmount: 1,
      composition: [WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE
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
    E18N7: {
      desiredAmount: 0,
      composition: [WORK,
        MOVE, MOVE,
        CARRY, CARRY, //to be able to repair container
      ]
    },
    role: 'harvester'
  },
  UPGRADER: {
    E18N6: {
      desiredAmount: 2,
      composition: [WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE,
      ]
    },
    E18N7: {
      desiredAmount: 2,
      composition: [WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE,
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
    E18N7: {
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
    E18N7: {
      desiredAmount: 0,
      composition: [ATTACK, ATTACK, ATTACK,ATTACK,ATTACK,ATTACK,
        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    role: 'defender'
  },
  STATIC_HARVESTER: {
    E18N6: {
      desiredAmount: 2,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE
      ]
    },
    E18N7: {
      desiredAmount: 2,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE
      ]
    },
    role: 'staticHarvester'
  },
  DEPOSITOR: {
    E18N6: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE
      ]
    },
    E18N7: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE
      ]
    },
    role: 'depositor'
  },
  STATIC_HARVESTER_REMOTE: {
    E18N6: {
      desiredAmount: 1,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
      ]
    },
    E18N7: {
      desiredAmount: 0,
      composition: [WORK, WORK, WORK, WORK, WORK,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
      ]
    },
    role: 'staticHarvesterRemote'
  },
  SLAVE_RECEIVER: {
    E18N6: {
      desiredAmount: 1,
      composition: [WORK,
        MOVE,
        CARRY,
      ]
    },
    E18N7: {
      desiredAmount: 0,
      composition: [WORK,
        MOVE,
        CARRY,
      ]
    },
    role: 'slaveReceiver'
  },
  CLAIMER: {
    E18N6: {
      desiredAmount: 0,
      composition: [WORK,
        MOVE,
        CARRY,
      ]
    },
    E18N7: {
      desiredAmount: 0,
      composition: [WORK,
        MOVE,
        CARRY,
      ]
    },
    role: 'claimer'
  }
};

module.exports = definitions;
