var roleCarrier = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('C');
    if (!creep.memory.picking && creep.carry.energy == 0) {
      creep.memory.picking = true;
    }
    if (creep.memory.picking && creep.carry.energy == creep.carryCapacity) {
      creep.memory.picking = false;
    }
    if (creep.memory.picking) {
      var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
        filter: (drop) => {
          return (drop.amount > 200 && drop.resourceType == RESOURCE_ENERGY);
        }
      });
      if (droppedEnergy) {
        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
          creep.moveTo(droppedEnergy, {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          });
        }
      } else {
        var flag = Game.flags[creep.room.name + '_2'];
        pickContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return ((((structure.structureType == STRUCTURE_CONTAINER /*|| structure.structureType == STRUCTURE_STORAGE*/)&& (!structure.pos.inRangeTo(flag, 2))) && structure.store[RESOURCE_ENERGY] > creep.carryCapacity));
          }
        });
        //console.log(pickContainer);
        if (pickContainer) {
          if (creep.withdraw(pickContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(pickContainer, {
              visualizePathStyle: {
                stroke: '#ffffff'
              }
            });
          }
        }
        if (!pickContainer) {
          creep.moveTo(Game.flags[creep.room.name+ '_assembly'])
        }
      }
    }
    if (!creep.memory.picking) {
      var dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
          return ((structure.structureType == STRUCTURE_EXTENSION || structure.structureType ==
            STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity);
        }
      });
      if (!dropPoint) {

        dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_TOWER && structure.energy <
              structure.energyCapacity);
          }
        });
      }
      if (!dropPoint) {
        //console.log(creep.room.name);
        var flag = null;
        flag = Game.flags[creep.room.name + '_1'];
        //  console.log(flag);
        if (flag) {
          dropPoint = flag.pos.findInRange(FIND_MY_STRUCTURES, 10, {
            filter: (structure) => {
              return (structure.structureType == STRUCTURE_LINK && structure.energy < 800);
            }
          })[0];
        }
      }
      if (!dropPoint) {
        dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] < structure.storeCapacity);
          }
        });
      }
      if (dropPoint) {
        if (creep.transfer(dropPoint, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(dropPoint, {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
     // console.log('else');
        //creep.moveTo(18, 32);
        creep.moveTo(Game.flags[creep.room.name+ '_assembly'])
      }
    }
  }
};

module.exports = roleCarrier;
