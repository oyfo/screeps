var creepsDefinitions = require('creeps.definitions');
var HARVESTER = creepsDefinitions.HARVESTER;
var BUILDER = creepsDefinitions.BUILDER;
var UPGRADER = creepsDefinitions.UPGRADER;
var REPAIRER = creepsDefinitions.REPAIRER;
var DEFENDER = creepsDefinitions.DEFENDER;

module.exports = {
  keepAlive: function() {
    crearDeadCreepMemory();

    if (Game.time % 5 == 0) {
      manageCreepSpawnOrder(creepsDefinitions);
      /*spawnWorkerIfNeeded(BUILDER);
      spawnWorkerIfNeeded(UPGRADER);
      spawnWorkerIfNeeded(REPAIRER);
      spawnWorkerIfNeeded(HARVESTER);*/
      /*var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
      var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
      var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
      var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
      console.log('H/B/U/R: ' + harvesters.length + '/' + HARVESTER.desiredAmount + ' | ' +
        builders.length + '/' + BUILDER.desiredAmount + ' | ' +
        upgraders.length + '/' + UPGRADER.desiredAmount + ' | ' +
        repairers.length + '/' + REPAIRER.desiredAmount +
        '. Energy available: ' + Game.rooms['E18N6'].energyAvailable + '/' +
        Game.rooms['E18N6'].energyCapacityAvailable);*/

    /*  if (Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
          '🛠️' + spawningCreep.memory.role,
          Game.spawns['Spawn1'].pos.x + 1,
          Game.spawns['Spawn1'].pos.y, {
            align: 'left',
            opacity: 0.8
          });
      }*/
    }
  }
};

function findOrderNumber(workerType) {
  var listOfWorkers = _.filter(Game.creeps, (creep) => creep.memory.role == workerType.role);
  for (var i = 1; i <= workerType.desiredAmount; i++) {
    if (!Game.creeps[workerType.role + i]) {
      return i
    }
  }
};

/*function spawnWorkerIfNeeded(workerType) {
  var listOfWorkers = _.filter(Game.creeps, (creep) => creep.memory.role == workerType.role);
  if (listOfWorkers.length < workerType.desiredAmount) {
    var orderNumber = findOrderNumber(workerType);
    var newName = workerType.role + orderNumber
    console.log('Spawning new ' + workerType.role + ': ' + newName);
    var composition = workerType.composition;
    Game.spawns['Spawn1'].spawnCreep(composition, newName, {
      memory: {
        role: workerType.role,
        orderNumber: orderNumber
      }
    });
  }
};*/

function spawnWorker(workerType) {
  var orderNumber = findOrderNumber(workerType);
  var newName = workerType.role + orderNumber
  console.log('Spawning new ' + workerType.role + ': ' + newName);
  var composition = workerType.composition;
  Game.spawns['Spawn1'].spawnCreep(composition, newName, {
    memory: {
      role: workerType.role,
      orderNumber: orderNumber
    }
  });

};

function crearDeadCreepMemory() {
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
}

function manageCreepSpawnOrder(creepsDefinitions) {
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
  var defenders = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender');
  console.log(
    'H:' + harvesters.length + '/' + creepsDefinitions.HARVESTER.desiredAmount + ' | ' +
    'U:' + upgraders.length + '/' + creepsDefinitions.UPGRADER.desiredAmount + ' | ' +
    'D:' + defenders.length + '/' + creepsDefinitions.DEFENDER.desiredAmount + ' | ' +
    'R:' + repairers.length + '/' + creepsDefinitions.REPAIRER.desiredAmount + ' | ' +
    'B:' + builders.length + '/' + creepsDefinitions.BUILDER.desiredAmount + ' | ' +
    'Energy: ' + Game.rooms['E18N6'].energyAvailable + '/' + Game.rooms['E18N6'].energyCapacityAvailable
  );

  if (harvesters.length < creepsDefinitions.HARVESTER.desiredAmount) {
    spawnWorker(creepsDefinitions.HARVESTER);
  } else if (upgraders.length < creepsDefinitions.UPGRADER.desiredAmount) {
    spawnWorker(creepsDefinitions.UPGRADER);
  } else if (defenders.length < creepsDefinitions.DEFENDER.desiredAmount) {
    spawnWorker(creepsDefinitions.DEFENDER);
  } else if (repairers.length < creepsDefinitions.REPAIRER.desiredAmount) {
    spawnWorker(creepsDefinitions.REPAIRER);
  } else if (builders.length < creepsDefinitions.BUILDER.desiredAmount) {
    spawnWorker(creepsDefinitions.BUILDER);
  }
}
