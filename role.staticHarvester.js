var roleStaticHarvester = {

  /** @param {Creep} creep **/
  run: function(creep) {
    var sources = creep.room.find(FIND_SOURCES);
    if (creep.harvest(sources[creep.memory.orderNumber - 1]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[creep.memory.orderNumber - 1], {
        visualizePathStyle: {
          stroke: '#ffaa00'
        }
      });
    }
  }
};

module.exports = roleStaticHarvester;
