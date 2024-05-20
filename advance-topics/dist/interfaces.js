"use strict";
// Implements keywors is used to make class follow the protocol defined in the interface
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short // Let you add more properties but throws error if they are less than the interface
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        return "To implement two interfaces, write the exact name as in the interface";
    }
}
const youtube = new Youtube("standard", "10%", 1, "Javascript");
console.log("Hey! I am in interfaces file");
