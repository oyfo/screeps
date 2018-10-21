var roleDefender = {

  /** @param {Creep} creep **/
  run: function(creep) {
    creep.say('DEFEND!');

    var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (target) {
      console.log('attacking');
      if (creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    } 
  }
};

module.exports = roleDefender;
