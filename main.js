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
var towers = require('tower');
var links = require('link');



module.exports.loop = function() {
  workers.keepAlive();
  towers.behave('E18N6', 15000, 40000);
  towers.behave('E18N7', 1000, 5000);
  links.linkIt('E18N6', [18, 33], [6,5]);

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == 'builder') {
      roleBuilder.run(creep);
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
  }
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
  
  // var room = 'E18N6'
  // for (var spawn in Game.spawns){
  //   if(Game.spawns[spawn].room.name ==room) {
  //     console.log(Game.spawns[spawn].room.name);
  //     console.log(Game.spawns[spawn].name);
  //   };
  // }

  //STRUCTURE_CONTROLLER
  /*  var containers = Game.rooms['E18N6'].find(FIND_STRUCTURES, {
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
