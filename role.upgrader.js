var roleUpgrader = {

  /** @param {Creep} creep **/
  run: function(creep) {
    //  creep.say('U');// + creep.memory.orderNumber);
    if (!creep.memory.gathering && creep.carry.energy == 0) {
      creep.memory.gathering = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.gathering && creep.carry.energy == creep.carryCapacity) {
      creep.memory.gathering = false;
      //  creep.say('🚧 upgrade');
    }

    if (creep.memory.gathering) {
      var containers = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (((structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE) && structure.store[
            RESOURCE_ENERGY] >= creep.carryCapacity));
        }
      });
      if (containers.length > 0) {
        if (creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(containers[0], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        var sources = creep.pos.findClosestByPath(FIND_SOURCES, {
          filter: (source) => {
            return (source.room == creep.room);
          }
        });
        if (sources) {
          if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources, {
              visualizePathStyle: {
                stroke: '#ffffff'
              }
            });
          }
        }
        //creep.moveTo(20, 26);
        /*var sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[creep.memory.orderNumber % 2]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[creep.memory.orderNumber % 2], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }*/
      }
    }
    if (!creep.memory.gathering) {
      if (creep.name == 'upgrader1' && creep.room !== Game.rooms.E18N7) {
        creep.say('Ur');
        console.log(creep.name + "going to other room");
        creep.moveTo(Game.flags.Flag1.pos);
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
  }
};

module.exports = roleUpgrader;
