var roleSlaveReceiver = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('SR');
    var flag = Game.flags[creep.room.name + '_2'];
    //console.log(creep.pos)
    //console.log(flag.pos)
    //creep.moveTo(5,12)
    if (!creep.pos.isNearTo(flag.pos)) {
      creep.moveTo(flag.pos, {
        visualizePathStyle: {
          stroke: '#ffaa00'
        }
      });
      //   console.log('if')
    } else {
      //  console.log('else')
      linkReceiver = flag.pos.findInRange(FIND_MY_STRUCTURES, 3, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_LINK);
        }
      })[0];
      //    console.log('link receiver: ' +linkReceiver);
      var containerReceiver = flag.pos.findInRange(FIND_STRUCTURES, 3, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_CONTAINER);
        }
      })[0];
      //console.log('contaierReveiver: ' +containerReceiver);
      if (linkReceiver.energy > creep.carryCapacity && creep.carry.energy < creep.carryCapacity) {
        //  console.log('if');
        creep.withdraw(linkReceiver, RESOURCE_ENERGY);
      } else {
        creep.transfer(containerReceiver, RESOURCE_ENERGY);
      }
    }
  }
};

module.exports = roleSlaveReceiver;
