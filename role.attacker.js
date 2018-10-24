var roleAttacker = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('ATTACK');
  //  console.log(Game.flags.attack.room.name);
  //  console.log(creep.room.name)
  //  if (creep.room.name != Game.flags.attack.room.name) {
    //  creep.moveTo(Game.flags.attack.pos);
    //} else {
  //    console.log('else')
      var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
      if (target) {
            console.log('attacking');
        if (creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target.pos);
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
    //}
  }
};

module.exports = roleAttacker;
