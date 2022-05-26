const { expect } = require("chai");
const Bailey = require("../class/bailey");
const { Enemy } = require("../class/enemy");
const { Player } = require("../class/player");
const { Room } = require("../class/room");
const { Character } = require("../class/character");
const { World } = require("../class/world");

describe ("Bailey class", () => {
    let bailey;
    let room;
    let player;

    beforeEach( function() {
        bailey = new Bailey("test", "ruff", room);
        room =  new Room("Test Room", "A test room");
        player = new Player("player", room);
    });

    it ("should be a child class of Enemy", () => {
        expect(bailey instanceof Enemy).to.be.true;
    });

    it ("should set an instance of Bailey to have the name 'Bailey'", () => {
        expect(bailey.name).to.equal("Bailey");
    });

    it ("should do 100 attack damage.", () => {
        expect(bailey.strength).to.equal(100);
    })

    it ("should be possible to pet Bailey and make him your friend", () => {
        player.pet("Bailey");
        expect(bailey.friend).to.be.true;
        //not sure why this is failing
    });

});
