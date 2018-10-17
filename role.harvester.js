var roleHarvester = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('H'); // + creep.memory.orderNumber);
    if (!creep.memory.harvesting && creep.carry.energy == 0) {
      creep.memory.harvesting = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
      creep.memory.harvesting = false;
      //  creep.say('🚧 deposit');
    }
    {
      if (creep.memory.harvesting) {

        var droppedEnergy = null;
        /*var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
          filter: (drop) => {
            return (drop.amount > 50 && drop.resourceType == RESOURCE_ENERGY);
          }
        });*/
        if (droppedEnergy) {
          if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {

            creep.moveTo(droppedEnergy, {
              visualizePathStyle: {
                stroke: '#ffaa00'
              }
            });
          }
        } else {
          var sources = creep.room.find(FIND_SOURCES); //,{
          //(sources[creep.memory.orderNumber % 2]
          if (creep.harvest(sources[creep.memory.orderNumber % 2]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[creep.memory.orderNumber % 2], {
              visualizePathStyle: {
                stroke: '#ffaa00'
              }
            });
          }
        }
      } else {
        {
          var dropPoint = prioritizetDropPoints(creep);
          if (dropPoint.length > 0) {
            if (creep.transfer(dropPoint[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(dropPoint[0], {
                visualizePathStyle: {
                  stroke: '#ffffff'
                }
              });
            }
          } else {
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

      }
    }

  }
};

function prioritizetDropPoints(creep) {

  var targets = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType ==
          STRUCTURE_SPAWN) &&
        structure.energy < structure.energyCapacity;
    }
  });
  if (targets.length == 0) {
    targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity);
      }
    });
  }
  if (targets.length == 0) {
    targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_CONTAINER && structure.store[
          RESOURCE_ENERGY] < structure.storeCapacity);
      }
    });
  }
  return targets;
}
module.exports = roleHarvester;
