var roleClaimer = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('CLAIM');
    //creep.moveTo(Game.flags.Flag1.pos);
    /*  const target = creep.pos.findClosestByRange(FIND_ST);
      if (target) {
        console.log('attacking');
        if (creep.attack(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      }
      if (creep.room.controller && !creep.room.controller.my) {
        console.log('controller to get');
        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
        }
      }*/
  /*  var flag = Game.flags['E18N5_conroller'];
    if (creep.moveTo(flag) == ERR_NOT_IN_RANGE) {
      creep.moveTo(flag, {
        visualizePathStyle: {
          stroke: '#ffaa00'
        }
      });
    }*/
    if (!creep.room.controller.my) {
      if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
      }
    }
  }
};

module.exports = roleClaimer;



//Game.creeps['W7N3claimer1'].memory.role = 'builder'
