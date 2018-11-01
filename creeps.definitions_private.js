//module.exports = {
  var definitions = {
    CARRIER: {
      W7N3: {
        desiredAmount: 2,
        composition: [ 
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
        ]
      },
      W8N3: {
        desiredAmount: 2,
        composition: [
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE
        ]
      },
      W5N3: {
        desiredAmount: 2,
        composition: [
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE
        ]
      },
      role: 'carrier'
    },
    BUILDER: {
      W7N3: {
        desiredAmount: 2,
        composition: [WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ]
      },
      W8N3: {
        desiredAmount: 2,
        composition: [WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, CARRY,
        ]
      },
      W5N3: {
        desiredAmount: 2,
        composition: [WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY,CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
        ]
      },
      role: 'builder'
    },
    HARVESTER: {
      W7N3: {
        desiredAmount: 0,
        composition: [WORK,
          MOVE, MOVE, MOVE,
          CARRY, CARRY, //to be able to repair container
        ]
      },
      W8N3: {
        desiredAmount: 0,
        composition: [WORK,
          MOVE,
          CARRY,
        ]
      },
      W5N3: {
        desiredAmount: 0,
        composition: [WORK, 
          CARRY, CARRY, 
          MOVE, MOVE,
        ]
      },
      role: 'harvester'
    },
    UPGRADER: {
      W7N3: {
        desiredAmount: 3,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ]
      },
      W8N3: {
        desiredAmount: 3,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE
        ]
      },
      W5N3: {
        desiredAmount: 2,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE,
        ]
      },
      role: 'upgrader'
    },
    REPAIRER: {
      W7N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE
        ]
      },
      W8N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE
        ]
      },
      W5N3: {
        desiredAmount: 0,
        composition: [WORK,
          CARRY,
          MOVE,
        ]
      },
      role: 'repairer'
    },
    DEFENDER: {
      W7N3: {
        desiredAmount: 0,
        composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK
        ]
      },
      W8N3: {
        desiredAmount: 0,
        composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK
        ]
      },
      W5N3: {
        desiredAmount: 0,
        composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK
        ]
      },
      role: 'defender'
    },
    STATIC_HARVESTER: {
      W7N3: {
        desiredAmount: 2,
        composition: [WORK, WORK, WORK, WORK, WORK, WORK,
          MOVE
        ]
      },
      W8N3: {
        desiredAmount: 2,
        composition: [WORK, WORK, WORK, WORK, WORK, WORK,
          MOVE
        ]
      },
      W5N3: {
        desiredAmount: 2,
        composition: [WORK, WORK, WORK, WORK, WORK, WORK,
          MOVE
        ]
      },
      role: 'staticHarvester'
    },
    DEPOSITOR: {
      W7N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE
        ]
      },
      W8N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE
        ]
      },
      W5N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE
        ]
      },
      role: 'depositor'
    },
    STATIC_HARVESTER_REMOTE: {
      W7N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
        ]
      },
      W8N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
        ]
      },
      W5N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY //to be able to repair container
        ]
      },
      role: 'staticHarvesterRemote'
    },
    SLAVE_RECEIVER: {
      W7N3: {
        desiredAmount: 0,
        composition: [
          MOVE,
          CARRY,
        ]
      },
      W8N3: {
        desiredAmount: 1,
        composition: [
          MOVE,
          CARRY,
        ]
      },
      W5N3: {
        desiredAmount: 1,
        composition: [
          MOVE,
          CARRY,
        ]
      },
      role: 'slaveReceiver'
    },
    CLAIMER: {
      W7N3: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ]
      },
      W8N3: {
        desiredAmount: 0,
        composition: [CLAIM,
          MOVE, MOVE, MOVE, MOVE,
          CARRY,
        ]
      },
      W5N3: {
        desiredAmount: 0,
        composition: [CLAIM,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
        ]
      },
      role: 'claimer'
    },
    ATTACKER: {
      W7N3: {
        desiredAmount: 0,
        composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          ATTACK, ATTACK
        ]
      },
      W8N3: {
        desiredAmount: 0,
        composition: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          ATTACK, ATTACK
        ]
      },
      W5N3: {
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
