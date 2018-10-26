var roleAttacker = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('ATTACK');
  if (creep.room.name != Game.flags.attack.room.name) {
    //  console.log('move')
      creep.moveTo(Game.flags.attack.pos);
    } else {
 // console.log('dupa');
      var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
      if (target) {
            console.log('attacking');
          //  console.log(target)
        if (creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target.pos);
        }
      } else {
        target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
      //  console.log('else');
       // console.log(target)
        if (target) {
          //    console.log('attacking');
          if (creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
          }
        } else {
          creep.moveTo(Game.flags.attack.pos);
        }

      }
  }
  }
};

module.exports = roleAttacker;
