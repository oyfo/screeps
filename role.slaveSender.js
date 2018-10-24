var roleSlaveSender = {

    /** @param {Creep} creep **/
    run: function(creep) {
      creep.say('SS');
      var flag = Game.flags[creep.room.name + '_sender'];
      if (!creep.pos.isNearTo(flag.pos)) {
        creep.moveTo(flag.pos, {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      } else {
        linkSender = flag.pos.findInRange(FIND_MY_STRUCTURES, 2, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_LINK);
          }
        })[0];
        var containerSender = flag.pos.findInRange(FIND_STRUCTURES, 2, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_CONTAINER);
          }
        })[0];
        if (linkSender.energy < creep.carryCapacity && creep.carry.energy < creep.carryCapacity) {
          creep.transfer(linkReceiver, RESOURCE_ENERGY);
        } else {
          creep.withdraw(containerSender, RESOURCE_ENERGY);
        }
      }
    }
  };
  
  module.exports = roleSlaveSender;
  