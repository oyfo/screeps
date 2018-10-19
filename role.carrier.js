var roleCarrier = {

  /** @param {Creep} creep **/
  run: function(creep) {
    //creep.say('C');
    //       21,33    prawy
    // lewy  17,35
    //container  5bc3700344afce3280eb5e69
    //creep.moveTo(24, 31, { visualizePathStyle: { stroke: '#ffffff' } });
  //  creep.moveTo(18,32);
    if (!creep.memory.picking && creep.carry.energy == 0) {
      creep.memory.picking = true;
    }
    if (creep.memory.picking && creep.carry.energy == creep.carryCapacity) {
      creep.memory.picking = false;
    }
    //console.log(creep.drop[RESOURCE_GHODIUM_OXIDE]);
    /*console.log('--------');
    console.log(creep.room.name);
    var flag = Game.flags[creep.room.name + '_1'];
    //console.log(flag);
    if (flag) {
      var dropPoint2 = flag.pos.findInRange(FIND_MY_STRUCTURES, 10, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_LINK);
        }
      });
    }
    console.log(dropPoint2);
    console.log('--------');*/
    if (creep.memory.picking) {
      //  var sources = creep.room.find(FIND_SOURCES);
      //var tomb = creep.pos.findClosestByPath(FIND_TOMBSTONES);
      //  console.log(tomb);
      var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
        filter: (drop) => {
          return (drop.amount > 200 && drop.resourceType == RESOURCE_ENERGY);
        }
      });
      if (droppedEnergy) {
        if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE
          /*,{
                    filter: (energy) => {
                      return (energy.amount > 200);
                    }
                  }*/
        ) {

          creep.moveTo(droppedEnergy, {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          });
          //  creep.moveTo(sources[creep.memory.orderNumber - 1], { visualizePathStyle: { stroke: '#ffaa00' } });
        }
      } else {
        var flag = Game.flags[creep.room.name + '_2'];
        pickContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return ((structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > creep.carryCapacity)&& (!structure.pos.inRangeTo(flag,2)));
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
              structure.energyCapacity * 0.85);
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
        /*console.log(dropPoint2);
        dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (
              //  Game.flags[creep.room.name]
              //(structure.structureType == STRUCTURE_CONTAINER && (structure.store[RESOURCE_ENERGY] < structure.storeCapacity * 0.9)) ||
              (structure.structureType == STRUCTURE_LINK && structure.energy < 800)
            );
          }
        });*/
      }
      if (!dropPoint) {
        dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] < structure.storeCapacity);
          }
        });
      }
      /*if (!dropPoint) {
        dropPoint = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] < (structure.storeCapacity * 0.75));
          }
        });

        console.log(dropPoint);
      }*/
      //  console.log(dropPoint);
      if (dropPoint) {
        if (creep.transfer(dropPoint, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(dropPoint, {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        creep.moveTo(18,32);
      }
    }
  }
};

module.exports = roleCarrier;
