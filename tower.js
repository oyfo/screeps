module.exports = {
  behave: function() {
    var hostiles = Game.rooms.W7N3.find(FIND_HOSTILE_CREEPS);
    var towers = Game.rooms.W7N3.find(FIND_MY_STRUCTURES, {
      filter: {
        structureType: STRUCTURE_TOWER
      }
    });
    if (hostiles.length > 0) {
      var username = hostiles[0].owner.username;
      Game.notify(`User ${username} spotted in room W7N3`);
      /*var towers = Game.rooms['E18N6'].find(FIND_MY_STRUCTURES, {
        filter: {
          structureType: STRUCTURE_TOWER
        }
      });*/
      towers.forEach(tower => tower.attack(hostiles[0]));
    } else {
      towers.forEach(tower => {
        var structuresToRepair = tower.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return ((structure.structureType != STRUCTURE_WALL && structure.structureType != STRUCTURE_RAMPART) && structure.hits <
              (structure.hitsMax * 0.75));
          }
        });
        if (structuresToRepair.length == 0) {
          structuresToRepair = tower.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
              return ((structure.structureType === STRUCTURE_WALL && structure.hits < 1000 || structure.structureType === STRUCTURE_RAMPART && structure.hits < 1000));
            }
          });
        }
        //console.log(structuresToRepair)
        tower.repair(structuresToRepair[0]);
      });
    }
  }
};

//    ((structure.structureType === STRUCTURE_WALL) && structure.hits < 8000)
