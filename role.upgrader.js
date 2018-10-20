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
    //creep.memory.gathering = false;
    if (creep.memory.gathering) {
      var flag = null;
      flag = Game.flags[creep.room.name + '_2'];
      //console.log(flag);
      //console.log(flag);
      var containers = null;
      /*if (flag) {
        containers = flag.pos.findInRange(FIND_MY_STRUCTURES, 10, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_LINK && structure.energy > (creep.carryCapacity - creep.carry.energy));
          }
        })[0];
        //console.log(containers)
      }*/
      if (!containers) {
        containers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_CONTAINER && structure.store[
              RESOURCE_ENERGY] >= 600) || (structure.structureType == STRUCTURE_STORAGE && structure.store[
              RESOURCE_ENERGY] >= 10000);
          }
        });
      }
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
      /*if (creep.name == 'E18N6upgrader2' && creep.room != Game.rooms.E18N7) {
        creep.say('Ur');
        console.log(creep.name + "going to other room");
        creep.moveTo(Game.flags.Flag2.pos);
      } else */
      {
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
