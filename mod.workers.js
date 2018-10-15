var creepsDefinitions = require('creeps.definitions');

module.exports = {
  keepAlive: function() {
    if (Game.time % 5 == 0) {
      crearDeadCreepMemory();
      manageCreepSpawn(creepsDefinitions);
      /*
      if (Game.time % 600 == 0 && (Game.rooms['E18N6'].controller.level == 4)) {
        var numberOfExtensions = Game.rooms['E18N6'].find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION);
          }
        });
        console.log(numberOfExtensions.length);
        if (numberOfExtensions.length == 10){
          Game.rooms['E18N6'].createConstructionSite(24,31, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 11){
           Game.rooms['E18N6'].createConstructionSite(22,31, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 12){
          Game.rooms['E18N6'].createConstructionSite(23,30, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 13){
          Game.rooms['E18N6'].createConstructionSite(21,30, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 14){
          Game.rooms['E18N6'].createConstructionSite(16,32, STRUCTURE_EXTENSION);
        }
        if (numberOfExtensions.length == 15){
          Game.rooms['E18N6'].createConstructionSite(19,32, STRUCTURE_STORAGE);
        }
      }*/
    }
  }
};

function findOrderNumber(workerType) {
  var listOfWorkers = _.filter(Game.creeps, (creep) => creep.memory.role == workerType.role);
  for (var i = 1; i <= workerType.desiredAmount; i++) {
    if (!Game.creeps[workerType.role + i]) {
      return i;
    }
  }
}

function spawnWorker(workerType) {
  var orderNumber = findOrderNumber(workerType);
  var newName = workerType.role + orderNumber;
  console.log('Spawning new ' + workerType.role + ': ' + newName);
  var composition = workerType.composition;
  Game.spawns['Spawn1'].spawnCreep(composition, newName, {
    memory: {
      role: workerType.role,
      orderNumber: orderNumber
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

function manageCreepSpawn(creepsDefinitions) {
  var containers = Game.rooms['E18N6'].find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE);
    }
  });
  var resources = 0;
  containers.forEach(container => {
    resources = resources + container.store[RESOURCE_ENERGY];
  });
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
  var defenders = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender');
  var depositors = _.filter(Game.creeps, (creep) => creep.memory.role == 'depositor');
  var staticHarvester = _.filter(Game.creeps, (creep) => creep.memory.role ==
    'staticHarvester');
  var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');
  console.log(
    'H:' + harvesters.length + '/' + creepsDefinitions.HARVESTER.desiredAmount + ' | ' +
    'U:' + upgraders.length + '/' + creepsDefinitions.UPGRADER.desiredAmount + ' | ' +
    'D:' + defenders.length + '/' + creepsDefinitions.DEFENDER.desiredAmount + ' | ' +
    'R:' + repairers.length + '/' + creepsDefinitions.REPAIRER.desiredAmount + ' | ' +
    'B:' + builders.length + '/' + creepsDefinitions.BUILDER.desiredAmount + ' | ' +
    'Dep:' + depositors.length + '/' + creepsDefinitions.DEPOSITOR.desiredAmount + ' | ' +
    'Energy: ' + Game.rooms['E18N6'].energyAvailable + '/' + Game.rooms['E18N6'].energyCapacityAvailable +
    ' | ' +
    'Containers: ' + resources + '/' + ((containers.length - 1) * 2000 + 1000000)
  );

  if (harvesters.length < creepsDefinitions.HARVESTER.desiredAmount) {
    spawnWorker(creepsDefinitions.HARVESTER);
  } else if (carriers.length < creepsDefinitions.CARRIER.desiredAmount) {
    spawnWorker(creepsDefinitions.CARRIER);
  } else if (staticHarvester.length < creepsDefinitions.STATIC_HARVESTER.desiredAmount) {
    spawnWorker(creepsDefinitions.STATIC_HARVESTER);
  } else if (upgraders.length < creepsDefinitions.UPGRADER.desiredAmount) {
    spawnWorker(creepsDefinitions.UPGRADER);
  } else if (defenders.length < creepsDefinitions.DEFENDER.desiredAmount) {
    spawnWorker(creepsDefinitions.DEFENDER);
  } else if (depositors.length < creepsDefinitions.DEPOSITOR.desiredAmount) {
    spawnWorker(creepsDefinitions.DEPOSITOR);
  } else if (repairers.length < creepsDefinitions.REPAIRER.desiredAmount) {
    spawnWorker(creepsDefinitions.REPAIRER);
  } else if (builders.length < creepsDefinitions.BUILDER.desiredAmount) {
    spawnWorker(creepsDefinitions.BUILDER);
  }
}
