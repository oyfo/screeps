var roleBuilder = {

  /** @param {Creep} creep **/
  run: function(creep, wallHp, rampartHp) {

    //creep.say('B'); // + creep.memory.orderNumber);
    if (!creep.memory.gathering && creep.carry.energy == 0) {
      creep.memory.gathering = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.gathering && creep.carry.energy == creep.carryCapacity) {
      creep.memory.gathering = false;
      //  creep.say('🚧 build');
    }
    if (!creep.memory.gathering) {
      var targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
      if (targets) {
        if (creep.build(targets) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets, {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        var structuresToRepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (((structure.structureType != STRUCTURE_WALL && structure.structureType != STRUCTURE_RAMPART) && structure.hits <
              (structure.hitsMax * 0.85)) && creep.room == structure.room);
          }
        });
        if (!structuresToRepair) {
          structuresToRepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => {
              return (((structure.structureType === STRUCTURE_WALL && structure.hits < wallHp) || (structure.structureType === STRUCTURE_RAMPART && structure.hits < rampartHp)) && creep.room == structure.room);
            }
          });
        }
        if (structuresToRepair) {
          if (creep.repair(structuresToRepair) == ERR_NOT_IN_RANGE) {
            creep.moveTo(structuresToRepair);

          }
        }
        //  creep.moveTo(27, 27);
      }
    } else {
      var sources = propritizedSources(creep);
      if (creep.withdraw(sources, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources, {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      }
    }
  }
};

function propritizedSources(creep) {
  var sources = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: (structure) => {
      return ((structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] >= 600) || (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] >= 10000));
    }
  });
  return sources;
}
module.exports = roleBuilder;
