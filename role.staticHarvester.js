var roleStaticHarvester = {

  /** @param {Creep} creep **/
  run: function(creep) {
    var sources = creep.room.find(FIND_SOURCES);
  //  console.log(creep.memory.orderNumber);
  //  console.log('sources ' + sources[creep.memory.orderNumber - 1]);
    if (creep.harvest(sources[creep.memory.orderNumber - 1]) == ERR_NOT_IN_RANGE) {
      //console.log("CREEPERROR")
      creep.moveTo(sources[creep.memory.orderNumber - 1], { visualizePathStyle: { stroke: '#ffaa00' } });
    }
  }
};

module.exports = roleStaticHarvester;
