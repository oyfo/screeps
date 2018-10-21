//module.exports = {
var definitions = {
  CARRIER: {
    W8N3: {
      desiredAmount: 2,
      composition: [WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 2,
      composition: [WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
      ]
    },
    role: 'carrier'
  },
  BUILDER: {
    W8N3: {
      desiredAmount: 1,
      composition: [WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, CARRY,
      ]
    },
    W7N3: {
      desiredAmount: 1,
      composition: [WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE,MOVE,MOVE,MOVE
      ]
    },
    role: 'builder'
  },
  HARVESTER: {
    W8N3: {
      desiredAmount: 0,
      composition: [WORK, 
        MOVE,
        CARRY,
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [WORK,
        MOVE, MOVE,
        CARRY, CARRY //to be able to repair container
      ]
    },
    role: 'harvester'
  },
  UPGRADER: {
    W8N3: {
      desiredAmount: 3,
      composition: [WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE
      ]
    },
    W7N3: {
      desiredAmount: 3,
      composition: [WORK, WORK, WORK, WORK,
        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
      ]
    },
    role: 'upgrader'
  },
  REPAIRER: {
    W8N3: {
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
    W8N3: {
      desiredAmount: 0,
      composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ATTACK, ATTACK
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ATTACK, ATTACK
      ]
    },
    role: 'defender'
  },
  STATIC_HARVESTER: {
    W8N3: {
      desiredAmount: 2,
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
  DEPOSITOR: {
    W8N3: {
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
  STATIC_HARVESTER_REMOTE: {
    W8N3: {
      desiredAmount: 0,
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
  SLAVE_RECEIVER: {
    W8N3: {
      desiredAmount: 0,
      composition: [WORK,
        MOVE,
        CARRY,
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [WORK,
        MOVE,
        CARRY,
      ]
    },
    role: 'slaveReceiver'
  },
  CLAIMER: {
    W8N3: {
      desiredAmount: 0,
      composition: [CLAIM,
        MOVE, MOVE, MOVE, MOVE,
        CARRY,
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [CLAIM,
        MOVE, MOVE, MOVE, MOVE,
      ]
    },
    role: 'claimer'
  },
  ATTACKER: {
    W8N3: {
      desiredAmount: 0,
      composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ATTACK, ATTACK
      ]
    },
    W7N3: {
      desiredAmount: 0,
      composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ATTACK, ATTACK
      ]
    },
    role: 'attacker'
  }
};

module.exports = definitions;