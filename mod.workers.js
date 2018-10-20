var creepsDefinitions = require('creeps.definitions');
module.exports = {
  keepAlive: function() {
    if (Game.time % 5 == 0) {
      crearDeadCreepMemory();
      manageCreepSpawn(creepsDefinitions, 'W7N3');
      //manageCreepSpawn(creepsDefinitions,'E18N7');
      //console.log('order number: ' +findOrderNumber(creepsDefinitions.HARVESTER, 'E18N6'));

      /*if (Game.time % 5 == 0 && (Game.rooms.E18N6.controller.level == 5)) {
        var numberOfExtensions = Game.rooms.E18N6.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION);
          }
        });
         console.log(numberOfExtensions.length);
         (numberOfExtensions.length == 20) {
          Game.rooms.E18N6.createConstructionSite(23, 34, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 21) {
          Game.rooms.E18N6.createConstructionSite(24, 35, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 22) {
          Game.rooms.E18N6.createConstructionSite(19, 30, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 23) {
          Game.rooms.E18N6.createConstructionSite(24, 29, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 24) {
          Game.rooms.E18N6.createConstructionSite(28, 31, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 25) {
          Game.rooms.E18N6.createConstructionSite(25, 28, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 26) {
          Game.rooms.E18N6.createConstructionSite(24, 29, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 27) {
          Game.rooms.E18N6.createConstructionSite(18, 31, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 28) {
          Game.rooms.E18N6.createConstructionSite(20, 29, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 29) {
          Game.rooms.E18N6.createConstructionSite(19, 28, STRUCTURE_EXTENSION);
        }
        //if (numberOfExtensions.length == 25){
        //  Game.rooms.E18N6.createConstructionSite(19,32, STRUCTURE_STORAGE);
        //}
      }*/
    }
  }
};

function findOrderNumber(workerType, room) {
  var listOfWorkers = _.filter(Game.creeps, (creep) => creep.memory.role == workerType.role);
  for (var i = 1; i <= workerType[room].desiredAmount; i++) {
    //  console.log(i);
    //  console.log(workerType.role);
    //  console.log(Game.creeps[workerType.role]);
    if (!Game.creeps[room + workerType.role + i]) {
      return i;
    }
  }
}

function spawnWorker(workerType, room) {
  var spawnsInRoom = null;
  for (var spawn in Game.spawns) {
    if (Game.spawns[spawn].room.name == room) {
      spawnsInRoom = Game.spawns[spawn].name;
    }
  }
  var orderNumber = findOrderNumber(workerType, room);
  var newName = room + workerType.role + orderNumber;
  console.log('Spawning new ' + newName);
  var composition = workerType[room].composition;
  console.log(spawnsInRoom);
  Game.spawns[spawnsInRoom].spawnCreep(composition, newName, {
    memory: {
      role: workerType.role,
      orderNumber: orderNumber,
      birthRoom: room
    }
  });
}

function crearDeadCreepMemory() {
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
}

function manageCreepSpawn(creepsDefinitions, room) {
  //room = 'E18N6';
  var containers = Game.rooms[room].find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE);
    }
  });
  var resources = 0;
  containers.forEach(container => {
    resources = resources + container.store[RESOURCE_ENERGY];
  });
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.birthRoom == room);
  var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.birthRoom == room);
  var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.birthRoom == room);
  var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.birthRoom == room);
  var defenders = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.birthRoom == room);
  //var depositors = _.filter(Game.creeps, (creep) => creep.memory.role == 'depositor');
  var staticHarvestersRemote = _.filter(Game.creeps, (creep) => creep.memory.role ==
    'staticHarvesterRemote' && creep.memory.birthRoom == room);
  var staticHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role ==
    'staticHarvester' && creep.memory.birthRoom == room);
  var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier' && creep.memory.birthRoom == room);

  console.log("room: " + room +
    ' SH:' + staticHarvesters.length + '/' + creepsDefinitions.STATIC_HARVESTER[room].desiredAmount + ' | ' +
    'U:' + upgraders.length + '/' + creepsDefinitions.UPGRADER[room].desiredAmount + ' | ' +
    'C:' + carriers.length + '/' + creepsDefinitions.CARRIER[room].desiredAmount + ' | ' +
    'D:' + defenders.length + '/' + creepsDefinitions.DEFENDER[room].desiredAmount + ' | ' +
    'B:' + builders.length + '/' + creepsDefinitions.BUILDER[room].desiredAmount + ' | ' +
    //'Dep:' + depositors.length + '/' + creepsDefinitions.DEPOSITOR.desiredAmount + ' | ' +
    'Energy: ' + Game.rooms[room].energyAvailable + '/' + Game.rooms[room].energyCapacityAvailable +
    ' | ' +
    'Containers: ' + resources + '/' + ((containers.length - 1) * 2000 + 1000000)
  );

  if (harvesters.length < creepsDefinitions.HARVESTER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.HARVESTER, room);
  } else if (staticHarvestersRemote.length < creepsDefinitions.STATIC_HARVESTER_REMOTE[room].desiredAmount) {
    spawnWorker(creepsDefinitions.STATIC_HARVESTER_REMOTE, room);
  } else if (carriers.length < creepsDefinitions.CARRIER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.CARRIER, room);
  } else if (staticHarvesters.length < creepsDefinitions.STATIC_HARVESTER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.STATIC_HARVESTER, room);
  } else if (upgraders.length < creepsDefinitions.UPGRADER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.UPGRADER, room);
  } else if (defenders.length < creepsDefinitions.DEFENDER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.DEFENDER, room);
    //} else if (depositors.length < creepsDefinitions.DEPOSITOR.desiredAmount) {
    //  spawnWorker(creepsDefinitions.DEPOSITOR);
  } else if (repairers.length < creepsDefinitions.REPAIRER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.REPAIRER, room);
  } else if (builders.length < creepsDefinitions.BUILDER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.BUILDER, room);
  }
}
