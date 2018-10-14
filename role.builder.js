var roleBuilder = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('B' + creep.memory.orderNumber);
    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
      creep.say('🔄 harvest');
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
      creep.say('🚧 build');
    }
  //creep.moveTo(21,26);
    if (creep.memory.building) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
        //  console.log(targets[0]);
          creep.moveTo(targets[0], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      }else{
        creep.moveTo(27,27);
      }
    } else {
      var sources = creep.room.find(FIND_SOURCES);
      //console.log(sources);
      //sources[creep.memory.orderNumber % 2]
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      //  console.log(creep.memory.orderNumber + '   ' +(sources[creep.memory.orderNumber % 2]))
        creep.moveTo(sources[0], {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      }
    }
  }
};

module.exports = roleBuilder;
