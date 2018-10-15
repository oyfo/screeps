var roleHarvester = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('H'); // + creep.memory.orderNumber);
    if (!creep.memory.harvesting && creep.carry.energy == 0) {
      creep.memory.harvesting = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
      creep.memory.harvesting = false;
      //  creep.say('🚧 deposit');
    }
    if (creep.memory.harvesting) {
      var sources = creep.room.find(FIND_SOURCES);
      //5bbcadfc9099fc012e6383fe
      //(sources[creep.memory.orderNumber % 2]
      if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[1], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    } else {
      var dropPoint = propritizedTargets(creep);
      if (dropPoint.length > 0) {
        if (creep.transfer(dropPoint[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(dropPoint[0], { visualizePathStyle: { stroke: '#ffffff' } });
        }
      } else {
        creep.moveTo(24, 31, { visualizePathStyle: { stroke: '#ffffff' } });
      }
    }
  }
};

function propritizedTargets(creep) {

  //TO JEST DOBRE!!! do uzycia pozniej!
  /*var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_CONTAINER) &&
        structure.store[RESOURCE_ENERGY] < structure.storeCapacity;
    }
  });
  console.log(target);*/
  var targets = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType ==
          STRUCTURE_SPAWN) &&
        structure.energy < structure.energyCapacity;
    }
  });
  if (targets.length == 0) {
    targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity);
      }
    });
  }
  /*if (targets.length == 0) {
    targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_CONTAINER && structure.store[
          RESOURCE_ENERGY] < structure.storeCapacity);
      }
    });
  }*/
  //  console.log('new harvester: ' + targets.length);
  return targets;
}
module.exports = roleHarvester;
