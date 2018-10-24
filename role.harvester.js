var roleHarvester = {

  /** @param {Creep} creep **/
  run: function(creep) {

  /*  var definition = {
      E18N6: {
        desiredAmount: 0,
        composition: [WORK, WORK, WORK, WORK, WORK,
          MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
          CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
          CARRY, CARRY, CARRY, //to be able to repair container
        ]
      },
      E18N7: {
        desiredAmount: 0,
        composition: [WORK,
          MOVE,
          CARRY, CARRY, //to be able to repair container
        ]
      },
      E18N5: {
        desiredAmount: 2,
        composition: [WORK,
          MOVE, MOVE,
          CARRY, CARRY, //to be able to repair container
        ]
      }
    }*/

    creep.say('Hi'); // + creep.memory.orderNumber);
    if (!creep.memory.harvesting && creep.carry.energy == 0) {
      creep.memory.harvesting = true;
      //  creep.say('🔄 harvest');
    }
    if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
      creep.memory.harvesting = false;
      //  creep.say('🚧 deposit');
    } {
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
        //console.log('not harvestinf')
        /*var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        //  var targets = null;
        if (targets) {
          if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0], {
              visualizePathStyle: {
                stroke: '#ffffff'
              }
            });
          }
        } else */
        {
          var dropPoint = prioritizetDropPoints(creep);
          //console.log(dropPoint)
          if (dropPoint) {
            if (creep.transfer(dropPoint, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(dropPoint, {
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
  var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType ==
          STRUCTURE_SPAWN) &&
        structure.energy < structure.energyCapacity;
    }
  });
  if (!targets) {
    targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity);
      }
    });
  }
  if (!targets) {
    targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_CONTAINER && structure.store[
          RESOURCE_ENERGY] < structure.storeCapacity);
      }
    });
  }
  return targets;
}
module.exports = roleHarvester;
