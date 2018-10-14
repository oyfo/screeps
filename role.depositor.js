var roleDepositor = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('_' + creep.memory.orderNumber);
    if (!creep.memory.harvesting && creep.carry.energy == 0) {
      creep.memory.harvesting = true;
      creep.say('🔄 harvest');
    }
    if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
      creep.memory.harvesting = false;
      creep.say('🚧 deposit');
    }
    if (creep.memory.harvesting) {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[(creep.memory.orderNumber + 1) % 2]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[(creep.memory.orderNumber + 1) % 2], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    } else {
      var targets = propritizedTargets(creep);
      if (targets.length > 0) {
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
        }
      } else {
        creep.moveTo(24, 31, { visualizePathStyle: { stroke: '#ffffff' } });
      }
    }
  }
};

function propritizedTargets(creep) {
  var targets = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity);
    }
  });
  if (targets.length == 0) {
    targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_CONTAINER && structure.store[
          RESOURCE_ENERGY] < structure.storeCapacity);
      }
    });
  }
  return targets;
}
module.exports = roleDepositor;
