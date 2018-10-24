var roleUpgrader = {

  /** @param {Creep} creep **/
  run: function(creep) {
      creep.say('U'); // + creep.memory.orderNumber);
    if (!creep.memory.gathering && creep.carry.energy == 0) {
      creep.memory.gathering = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.gathering && creep.carry.energy == creep.carryCapacity) {
      creep.memory.gathering = false;
      //  creep.say('🚧 upgrade');
    }
    //creep.memory.gathering = false
    if (0 && creep.name == 'E18N6upgrader1' && creep.room.name != 'W17N6') {
      var flag = Game.flags['E18N5_conroller'];
        if (creep.moveTo(flag) == ERR_NOT_IN_RANGE) {
          creep.moveTo(flag, {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          });
        }
    }
    else {
    if (creep.memory.gathering) {
      var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
        filter: (drop) => {
          return (drop.amount > 50 && drop.resourceType == RESOURCE_ENERGY);
        }
      });
      //  console.log(droppedEnergy.amount);
      if (droppedEnergy) {
        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
          creep.moveTo(droppedEnergy, {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          });
          //  creep.moveTo(sources[creep.memory.orderNumber - 1], { visualizePathStyle: { stroke: '#ffaa00' } });
        }
      } else {
        var containers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_CONTAINER && structure.store[
              RESOURCE_ENERGY] >= 600) || (structure.structureType == STRUCTURE_STORAGE && structure.store[
              RESOURCE_ENERGY] >= 10000);
          }
        });
        if (containers) {
          //if (containers.length > 0) {
          if (creep.withdraw(containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(containers, {
              visualizePathStyle: {
                stroke: '#ffffff'
              }
            });
          }
        } else {
          //var sources = creep.room.find(FIND_SOURCES); //
          var sources = creep.pos.findClosestByPath(FIND_SOURCES, {
            filter: (source) => {
              return (source.room == creep.room);
            }
          });
          if (sources) {
            //creep.memory.orderNumber % 2]
            if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources, {
                visualizePathStyle: {
                  stroke: '#ffffff'
                }
              });
            }
          }
        }
      }

    }
    if (!creep.memory.gathering) {
      {
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller, {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          });
        }
      }

    }}
  }
};

module.exports = roleUpgrader;
