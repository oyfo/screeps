var roleUpgrader = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('U' + creep.memory.orderNumber);
    if (creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
      creep.say('🔄 harvest');
    }
    if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
      creep.say('🚧 upgrade');
    }
    //  creep.moveTo(21,23);
    if (!creep.memory.upgrading) {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[creep.memory.orderNumber % 2]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[creep.memory.orderNumber % 2], {
          visualizePathStyle: {
            stroke: '#ffffff'
          }
        });
      }
    } else {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller, {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      }
    }
  }
};

module.exports = roleUpgrader;

//[source #5bbcadfc9099fc012e6383fd],[source #5bbcadfc9099fc012e6383fe]
