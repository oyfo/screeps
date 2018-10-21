var workers = require('mod.workers');

module.exports = {
  behave: function(room, wallHp, rampartHp) {

    const hostileAttackers = Game.rooms[room].find(FIND_HOSTILE_CREEPS, {
      filter: function(object) {
        return object.getActiveBodyparts(ATTACK) > 0;
      }
    });
    const hostileHealers = Game.rooms[room].find(FIND_HOSTILE_CREEPS, {
      filter: function(object) {
        return object.getActiveBodyparts(HEAL) > 0;
      }
    });
    var hostiles = Game.rooms[room].find(FIND_HOSTILE_CREEPS);
    if (hostiles.length >0){
      var numberOfDefenders = workers.findRolesInRoom('defender', room).length;
      console.log(numberOfDefenders);
      if (numberOfDefenders <2) {
        workers.spawnWorker('DEFENDER', room);
      }
    }

    var towers = Game.rooms[room].find(FIND_MY_STRUCTURES, {
      filter: {
        structureType: STRUCTURE_TOWER
      }
    });
    if (hostileHealers.length > 0) {
      var username = hostileHealers[0].owner.username;
      console.log('ENEMY healers!!!!!')

      Game.notify(`User ${username} spotted in room ` + room);
      towers.forEach(tower => tower.attack(hostileHealers[0]));
    } else if (hostileAttackers.length > 0) {
      console.log('enemy attacker!!!!');
      var username = hostileAttackers[0].owner.username;
      Game.notify(`User ${username} spotted in room ` + room);
      towers.forEach(tower => tower.attack(hostileAttackers[0]));
    } else if (hostiles.length > 0) {
      towers.forEach(tower => tower.attack(hostiles[0]))
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
              return ((structure.structureType === STRUCTURE_WALL && structure.hits < wallHp || structure.structureType === STRUCTURE_RAMPART && structure.hits < rampartHp));
            }
          });
        }
        tower.repair(structuresToRepair[0]);
      });
    }
  }
};


function findNumberOfRolesInRoom(role, room) {
  return (_.filter(Game.creeps, (creep) => creep.memory.role == role && creep.memory.birthRoom == room));
}
