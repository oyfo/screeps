var workers = require('mod.workers');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleDepositor = require('role.depositor');
var roleStaticHarvester = require('role.staticHarvester');
var roleStaticHarvesterRemote = require('role.staticHarvesterRemote');
var roleCarrier = require('role.carrier');
var roleAttacker = require('role.attacker');
var roleSlaveReceiver = require('role.slaveReceiver');
var roleClaimer = require('role.claimer');
var roleDefender = require('role.defender');
var towers = require('tower');
var links = require('link');



module.exports.loop = function() {
  workers.keepAlive('W7N3', 1);
  workers.keepAlive('W8N3', 2);
  towers.behave('W7N3', 15000, 40000);
  towers.behave('W8N3', 5000, 2000);
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
    if (creep.memory.role == 'builder' && creep.room.name == 'W7N3') {
      roleBuilder.run(creep, 160000, 160000);
    }
    if (creep.memory.role == 'builder' && creep.room.name == 'W8N3') {
      roleBuilder.run(creep, 20000, 20000);
    }
    if (creep.memory.role == 'repairer') {
      roleRepairer.run(creep);
    }
    if (creep.memory.role == 'depositor') {
      roleDepositor.run(creep);
    }
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
    if (creep.memory.role == 'claimer') {
      roleClaimer.run(creep);
    }
    if (creep.memory.role == 'defender') {
      roleDefender.run(creep);
    }
  }


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
  }

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
