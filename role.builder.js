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
      // if (creep.room != Game.rooms.E18N7 && creep.name == 'builder1'){
      //   console.log('wrong room for : '+creep.name);
      //   creep.moveTo(Game.flags.Flag1.pos);
      // } else {}
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
        var structuresToRepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (((structure.structureType != STRUCTURE_WALL && structure.structureType != STRUCTURE_RAMPART) && structure.hits <
              (structure.hitsMax * 0.85)) && creep.room == structure.room);
          }
        });
        if (!structuresToRepair) {
          structuresToRepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => {
              return (((structure.structureType === STRUCTURE_WALL && structure.hits <40000) || (structure.structureType === STRUCTURE_RAMPART && structure.hits < 55000)) && creep.room == structure.room);
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
