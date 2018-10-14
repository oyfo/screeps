var HARVESTER = {
  desiredAmount: 3,
  composition: [WORK, WORK, WORK,
    CARRY, CARRY, CARRY,
    MOVE, MOVE
  ],
  role: 'harvester'
};
var BUILDER = {
  desiredAmount: 1,
  composition: [WORK, WORK, WORK,
    CARRY, CARRY, CARRY,
    MOVE, MOVE
  ],
  role: 'builder'
};
var UPGRADER = {
  desiredAmount: 6,
  composition: [WORK, WORK, WORK,
    CARRY, CARRY, CARRY,
    MOVE, MOVE,
  ],
  role: 'upgrader'
};
var REPAIRER = {
  desiredAmount: 1,
  composition: [WORK, WORK, WORK,
    CARRY, CARRY,
    MOVE, MOVE
  ],
  role: 'repairer'
};
module.exports = {
  keepAlive: function() {
    for (var name in Memory.creeps) {
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
      }
    }

    if (Game.time % 5 == 0) {
      spawnWorkerIfNeeded(BUILDER);
      spawnWorkerIfNeeded(UPGRADER);
      spawnWorkerIfNeeded(REPAIRER);
      spawnWorkerIfNeeded(HARVESTER);
      var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
      var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
      var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
      console.log('H/B/U: ' + harvesters.length + '/' + HARVESTER.desiredAmount + ' | ' +
        builders.length + '/' + BUILDER.desiredAmount + ' | ' +
        upgraders.length + '/' + UPGRADER.desiredAmount +
        '. Energy available: ' + Game.rooms['E18N6'].energyAvailable + '/' +
        Game.rooms['E18N6'].energyCapacityAvailable);

      if (Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
          '🛠️' + spawningCreep.memory.role,
          Game.spawns['Spawn1'].pos.x + 1,
          Game.spawns['Spawn1'].pos.y, {
            align: 'left',
            opacity: 0.8
          });
      }
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

function spawnWorkerIfNeeded(workerType) {
  var listOfWorkers = _.filter(Game.creeps, (creep) => creep.memory.role == workerType.role);
  if (listOfWorkers.length < workerType.desiredAmount) {
    var orderNumber = findOrderNumber(workerType);
    var newName = workerType.role + orderNumber
    console.log('Spawning new ' + workerType.role + ': ' + newName); // + '. Energy available: ' + Game.rooms['E18N6'].energyAvailable + '/' + Game.rooms['E18N6'].energyCapacityAvailable);
    var composition = workerType.composition;
    //for (var i = 0; i <(500 - Game.rooms['E18N6'].energyCapacityAvailable)/50; i++) {
    //  composition.push('MOVE');
    //}
    Game.spawns['Spawn1'].spawnCreep(composition, newName, {
      memory: {
        role: workerType.role,
        orderNumber: orderNumber
      }
    });
  }
};

Game.rooms['E18N6'].energyCapacityAvailable
