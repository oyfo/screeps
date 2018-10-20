var roleRepairer = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('R' + creep.memory.orderNumber);
    if (creep.memory.repairing && creep.carry.energy == 0) {
      creep.memory.repairing = false;
      creep.say('🔄 harvest');
    }
    if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
      creep.memory.repairing = true;
      creep.say('🚧 repair');
    }
    //creep.moveTo(22,26);
    //HARVERS
    if (!creep.memory.repairing) {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[creep.memory.orderNumber % 2]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[creep.memory.orderNumber % 2], {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      }
    } else {
      //BUILD
      var wallsToConstruct = creep.room.find(FIND_CONSTRUCTION_SITES, {
        // filter: (structure) => {
        //   return (structure.structureType === STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART);
        // }
      });
      if (wallsToConstruct.length > 0) {
        if (creep.build(wallsToConstruct[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(wallsToConstruct[0], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        //REPAIR
        var wallsToRepair = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return ((structure.structureType === STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART || structure.structureType == STRUCTURE_ROAD) && structure.hits < 3000);
          }
        });
        if (wallsToRepair.length > 0) {
          //console.log(wallsToRepair.length);
          //  console.log(wallsToRepair);
          if (creep.repair(wallsToRepair[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(wallsToRepair[0]);
          }
        } else {
          //GO AWAY IF FULL
          creep.memory.repairing = false;
          if (creep.carry.energy == creep.carryCapacity) {
            creep.moveTo(21, 26);
          }

        }
      }
    }
  }
};

module.exports = roleRepairer;
