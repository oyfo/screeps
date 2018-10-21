var roleAttacker = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('ATTACK');
    if (creep.room != Game.flags.Flag1.room) {
      creep.moveTo(Game.flags.Flag1.pos);
    }
    var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (target) {
      //    console.log('attacking');
      if (creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    } else {
      target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
      if (target) {
        //    console.log('attacking');
        if (creep.attack(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      }
      /*if (creep.room.controller && !creep.room.controller.my) {
        console.log('controller to get');
        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
        }
      }*/
    }
  }
};

module.exports = roleAttacker;
