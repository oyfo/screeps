var creepsDefinitions = require('creeps.definitions');

module.exports = {
  keepAlive: function() {
    if (Game.time % 5 == 0) {
      crearDeadCreepMemory();
      manageCreepSpawn(creepsDefinitions, 'E18N6', 1);
      manageCreepSpawn(creepsDefinitions, 'E18N7', 2);
    //  reserveController('E18N6','E17N6');


    }
  }
};
//Game.rooms[E17N6].controller
function reserveController(fromRoom, toRoom){
  //console.log(Game.rooms[toRoom].controller.reservation.username);
  //console.log(Game.rooms[toRoom].controller.reservation.ticksToEnd);
  var claimers1  = findNumberOfRolesInRoom('claimer', fromRoom).length;
  var claimers2  = findNumberOfRolesInRoom('claimer', toRoom).length;
  var claim = claimers1 + claimers2;
  console.log('how many claimers:  '+claim);

  if( !Game.rooms[toRoom].controller.reservation && claim < 0 ){
    console.log("SPRAWWWN1");
    spawnWorker(creepsDefinitions.CLAIMER, fromRoom);
  } else if (claim < 0 && (Game.rooms[toRoom].controller.reservation.ticksToEnd < 1000)) {
    console.log("SPRAWWWN2");
    spawnWorker(creepsDefinitions.CLAIMER, fromRoom);
  }
//  if(claim == 0 && (Game.rooms[toRoom].controller.reservation.ticksToEnd < 1000 )){

  //  spawnWorker(creepsDefinitions.CLAIMER, fromRoom);
  //}

}

function manageCreepSpawn(creepsDefinitions, room, roomNumber) {
  var containers = Game.rooms[room].find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE);
    }
  });
  var resources = 0;
  containers.forEach(container => {
    resources = resources + container.store[RESOURCE_ENERGY];
  });
  var harvesters = findNumberOfRolesInRoom('harvester', room);
  var builders = findNumberOfRolesInRoom('builder', room);
  var upgraders = findNumberOfRolesInRoom('upgrader', room);
  var repairers = findNumberOfRolesInRoom('repairer', room);
  var defenders = findNumberOfRolesInRoom('defender', room);
  var staticHarvestersRemote = findNumberOfRolesInRoom('staticHarvesterRemote', room);
  var staticHarvesters = findNumberOfRolesInRoom('staticHarvester', room);
  var carriers = findNumberOfRolesInRoom('carrier', room);
  var slaveReceivers = findNumberOfRolesInRoom('slaveReceiver', room);
  var claimers = findNumberOfRolesInRoom('claimer', room);

  console.log(roomNumber + " room: " + room +
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
  } else if (slaveReceivers.length < creepsDefinitions.SLAVE_RECEIVER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.SLAVE_RECEIVER, room);
  } else if (claimers.length < creepsDefinitions.CLAIMER[room].desiredAmount) {
    spawnWorker(creepsDefinitions.CLAIMER, room);
  }
}

function findOrderNumber(workerType, room) {
  var listOfWorkers = _.filter(Game.creeps, (creep) => creep.memory.role == workerType.role);
  for (var i = 1; i <= workerType[room].desiredAmount; i++) {
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

function findNumberOfRolesInRoom(role, room) {
  return (_.filter(Game.creeps, (creep) => creep.memory.role == role && creep.memory.birthRoom == room));
}
