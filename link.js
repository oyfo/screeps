module.exports = {
  linkIt: function(room, sender, receiver) {
    const linkSender = Game.rooms[room].lookForAt(LOOK_STRUCTURES, sender[0], sender[1], {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_LINK);
      }
    })[0];
    const linkReceiver = Game.rooms[room].lookForAt(LOOK_STRUCTURES, receiver[0], receiver[1], {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_LINK);
      }
    })[0];
    //console.log(linkSender.cooldown);

    if (linkSender.energy == 800 && linkReceiver.energy < 300) {
      // console.log('linkReady');
      linkSender.transferEnergy(linkReceiver);
    }
    //console.log(linkSender.cooldown);

  }
};

//    ((structure.structureType === STRUCTURE_WALL) && structure.hits < 8000)
