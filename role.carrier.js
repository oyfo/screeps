var roleCarrier = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('C');
    //       21,33    prawy
    // lewy  17,35
    //container  5bc3700344afce3280eb5e69
    //creep.moveTo(24, 31, { visualizePathStyle: { stroke: '#ffffff' } });
    if (!creep.memory.picking && creep.carry.energy == 0) {
      creep.memory.picking = true;
    }
    if (creep.memory.picking && creep.carry.energy == creep.carryCapacity) {
      creep.memory.picking = false;
    }

    if (creep.memory.picking) {
      var sources = creep.room.find(FIND_SOURCES);
      var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
        filter: (drop) => {
          return (drop.amount > 60);
        }
      });
      if (droppedEnergy) {
        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
          creep.moveTo(droppedEnergy, { visualizePathStyle: { stroke: '#ffaa00' } });
        //  creep.moveTo(sources[creep.memory.orderNumber - 1], { visualizePathStyle: { stroke: '#ffaa00' } });
        }
      }
    }
    if (!creep.memory.picking) {
      var dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
          return ((structure.structureType == STRUCTURE_EXTENSION || structure.structureType ==
            STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity);
        }
      });
      if (!dropPoint) {
        dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_TOWER && structure.energy <
              structure.energyCapacity * 0.85);
          }
        });
      }
      if (!dropPoint) {
        dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return ((structure.structureType == STRUCTURE_CONTAINER) &&
              structure.store[RESOURCE_ENERGY] < structure.storeCapacity * 0.9);
          }
        });
      }
      if (dropPoint) {
        if (creep.transfer(dropPoint, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(dropPoint, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }
  }
}

module.exports = roleCarrier;