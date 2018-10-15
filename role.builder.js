var roleBuilder = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('B'); // + creep.memory.orderNumber);
    if (!creep.memory.gathering && creep.carry.energy == 0) {
      creep.memory.gathering = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.gathering && creep.carry.energy == creep.carryCapacity) {
      creep.memory.gathering = false;
      //  creep.say('🚧 build');
    }
    //creep.moveTo(21,26);
    if (!creep.memory.gathering) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        creep.moveTo(27, 27);
      }
    } else {
      var sources = propritizedSources(creep);
      if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      }
    }
  }
};

function propritizedSources(creep) {
  var sources = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
      return ((structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] >= creep.carryCapacity) || (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] >= creep.carryCapacity));
    }
  });
  return sources;
}
module.exports = roleBuilder;
