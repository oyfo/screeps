var workers = require('mod.workers');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
//var roleRepairer = require('role.repairer');
//var roleDepositor = require('role.depositor');
var roleStaticHarvester = require('role.staticHarvester');
var roleStaticHarvesterRemote = require('role.staticHarvesterRemote');
var roleCarrier = require('role.carrier');
var roleAttacker = require('role.attacker');
var roleSlaveReceiver = require('role.slaveReceiver');
//var roleSlaveSender = require('role.slaveSender');
var roleClaimer = require('role.claimer');
var roleDefender = require('role.defender');
var towers = require('tower');
var links = require('link');

module.exports.loop = function() {
  /*remember to have flags:
  W7N3_flag_2 - away from conrainers where you want to put resources
  W7N3_controller - only for claiming, needs more work
  W7N3_assembly - for ide creeps
  */
  // console.log(Game.spawns['Spawn' + 1].room.name)
  var room1, room2, room3;
  var wallHpRoom1, wallHpRoom2, wallHpRoom3;
  var server;
//  console.log('test')
  var spawn1 = Game.spawns['Spawn' + 1].room.name
  if (spawn1 == 'W7N3') {
    //console.log('private');
    //PRIVATE
    server = 'private';
    room1 = Game.spawns['Spawn' + 1].room.name;
    room2 = Game.spawns['Spawn' + 2].room.name;
    room3 = Game.spawns['Spawn' + 3].room.name;
    wallHpRoom1 = 600000;
    wallHpRoom2 = 600000;
    wallHpRoom3 = 300000;
    workers.keepAlive(room1, 1, server);
    workers.keepAlive(room2, 2, server);
    workers.keepAlive(room3, 3, server);
    towers.behave(room1, 15000, 40000, server);
    towers.behave(room2, 10000, 10000, server);
    towers.behave(room3, 5000, 5000, server);
  }

  if (spawn1 == 'E18N6') {
  //  console.log('official');
    //OFFICIAL
  //  server = 'official';
    room1 = Game.spawns['Spawn' + 1].room.name;
    room2 = Game.spawns['Spawn' + 2].room.name;
    room3 = Game.spawns['Spawn' + 3].room.name;
    wallHpRoom1 = 600000;
    wallHpRoom2 = 600000;
    wallHpRoom3 = 200000;
    workers.keepAlive(room1, 1, server);
    workers.keepAlive(room2, 2, server);
    workers.keepAlive(room3, 3, server);
    towers.behave(room1, 15000, 20000, server);
    towers.behave(room2, 15000, 20000, server);
    towers.behave(room3, 4000, 4000, server);
    links.linkIt(room1, [18, 33], [6, 5]);
  //  links.linkIt(room2, [3, 6], [35, 12]);

  }
  /// workers.keepAlive('W7N3', 1);
  //workers.keepAlive('W8N3', 2);
  //towers.behave('W7N3', 15000, 40000);
  //towers.behave('W8N3', 5000, 2000);

  // towers.behave('E18N7', 15000, 30000);
  // links.linkIt('W8N3', [18, 33], [6, 5]);
  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == 'builder' && creep.room.name == room1) {
      roleBuilder.run(creep, wallHpRoom1, wallHpRoom1);
    }
    if (creep.memory.role == 'builder' && creep.room.name == room2) {
      roleBuilder.run(creep, wallHpRoom2, wallHpRoom2);
    }
    if (creep.memory.role == 'builder' && creep.room.name == room3) {
      roleBuilder.run(creep, wallHpRoom3, wallHpRoom3);
    }
    if (creep.memory.role == 'builder' && creep.room.name == 'E18N5') {
      roleBuilder.run(creep, wallHpRoom3, wallHpRoom3);
    }
    if (creep.memory.role == 'repairer') {
      roleRepairer.run(creep);
    }
    // if (creep.memory.role == 'depositor') {
    //   roleDepositor.run(creep);
    // }
    if (creep.memory.role == 'staticHarvester') {
      roleStaticHarvester.run(creep);
    }
    if (creep.memory.role == 'carrier') {
      roleCarrier.run(creep);
    }
    if (creep.memory.role == 'staticHarvesterRemote') {
      roleStaticHarvesterRemote.run(creep);
    }
    if (creep.memory.role == 'attacker') {
      roleAttacker.run(creep);
    }
    if (creep.memory.role == 'slaveReceiver') {
      roleSlaveReceiver.run(creep);
    }
    // if (creep.memory.role == 'slaveSender') {
    //   roleSlaveSender.run(creep);
    // }
    if (creep.memory.role == 'claimer') {
      roleClaimer.run(creep);
    }
    if (creep.memory.role == 'defender') {
      roleDefender.run(creep);
    }
  }

  /*
    if (Game.time % 60 == 0 && (Game.rooms.W8N3.controller.level == 3)) {
      var numberOfExtensions = Game.rooms.W8N3.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_EXTENSION);
        }
      });
       console.log('number of extensions: ' + numberOfExtensions.length);
      if (numberOfExtensions.length == 5) {
        Game.rooms.W8N3.createConstructionSite(36, 26, STRUCTURE_EXTENSION);
      }
      if (numberOfExtensions.length == 6) {
        Game.rooms.W8N3.createConstructionSite(37, 25, STRUCTURE_EXTENSION);
      }
      if (numberOfExtensions.length == 7) {
        Game.rooms.W8N3.createConstructionSite(34, 28, STRUCTURE_EXTENSION);
      }
      if (numberOfExtensions.length == 8) {
        Game.rooms.W8N3.createConstructionSite(38, 28, STRUCTURE_EXTENSION);
      }
      if (numberOfExtensions.length == 9) {
        Game.rooms.W8N3.createConstructionSite(39, 27, STRUCTURE_EXTENSION);
      }
      if (numberOfExtensions.length == 10) {
        Game.rooms.W8N3.createConstructionSite(29, 44, STRUCTURE_TOWER);
      }
      //if (numberOfExtensions.length == 25){
      //  Game.rooms.W8N3.createConstructionSite(19,32, STRUCTURE_STORAGE);
      //}
    }*/

  // var room = 'W8N3'
  // for (var spawn in Game.spawns){
  //   if(Game.spawns[spawn].room.name ==room) {
  //     console.log(Game.spawns[spawn].room.name);
  //     console.log(Game.spawns[spawn].name);
  //   };
  // }

  //STRUCTURE_CONTROLLER
  /*  var containers = Game.rooms['W8N3'].find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_CONTAINER);
      }
    });
    var resources = 0;
    containers.forEach(container => {
      resources = resources + container.store[RESOURCE_ENERGY];
    })
    console.log('Containers: ' + resources + '/' + containers.length * 2000);
    //console.log(containers);*/
};
