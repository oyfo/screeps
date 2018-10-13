var roleRepairer = {

  /** @param {Creep} creep **/
  run: function(creep) {
    console.log('repairer carry energy: ' + creep.carry.energy);
    console.log(creep.memory.repairing);
    if (creep.memory.repairing && creep.carry.energy == 0) {
      creep.memory.repairing = false;
      creep.say('🔄 harvest');
    }
    if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
      creep.memory.repairing = true;
      creep.say('🚧 repair');
    }

    if (creep.memory.repairing) {
      //  creep.moveTo(24,24);
      var wallsTBC = creep.room.find(FIND_CONSTRUCTION_SITES, {
        filter: (structure) => {
          return (structure.structureType === STRUCTURE_WALL);
        }
      });
    //  console.log(wallsTBC)
      if (wallsTBC.length > 0) {
        if (creep.build(wallsTBC[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(wallsTBC[0], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        var wallsTBR = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType === STRUCTURE_WALL);
          }
        });
      //  console.log(wallsTBR);
        target = creep.pos.findClosestByPath(wallsTBR);
        console.log(target);
        creep.moveTo(24,24);
    //    if (target.length > 0) {
          // if (creep.repair(target) == ERR_NOT_IN_RANGE) {
          //   creep.moveTo(target, {
          //     visualizePathStyle: {
          //       stroke: '#ffffff'
          //     }
          //   });
          // }
      //  }
      }
    } else {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[creep.memory.orderNumber % 2]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[creep.memory.orderNumber % 2], {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      }
    }
  }
};

module.exports = roleRepairer;
