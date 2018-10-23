var roleStaticHarvesterRemote = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('R');
    if (!creep.memory.gathering && creep.carry.energy == 0) {
      creep.memory.gathering = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.gathering && creep.carry.energy == creep.carryCapacity) {
      creep.memory.gathering = false;
      //  creep.say('🚧 upgrade');
    }
    if (creep.memory.gathering) {
      if (creep.room == Game.rooms.E18N6) {
        if (creep.moveTo(0, 13) == ERR_NOT_IN_RANGE) {
          creep.moveTo(0, 13, {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          });
        }
      } else {
        var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
          filter: (drop) => {
            return (drop.amount > 50 && drop.resourceType == RESOURCE_ENERGY);
          }
        });
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
          var sources = creep.room.find(FIND_SOURCES);
          if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0], {
              visualizePathStyle: {
                stroke: '#ffaa00'
              }
            });
          }
        }
      }
    }
    if (!creep.memory.gathering) {
      if (creep.room == Game.rooms.E17N6) {
        //console.log('in remote room');
        if (creep.moveTo(49, 13) == ERR_NOT_IN_RANGE) {
          creep.moveTo(49, 13, {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          });
        }
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

module.exports = roleStaticHarvesterRemote;
