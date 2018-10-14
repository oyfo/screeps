var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleDepositor = require('role.depositor');
var workers = require('mod.workers');
var towers = require('tower');
var roleStaticHarvester = require('role.staticHarvester');
var roleCarrier = require('role.carrier');

module.exports.loop = function() {
  workers.keepAlive();
  towers.behave();

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
  }
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
}
