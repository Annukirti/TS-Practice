"use strict";
class PhotoClass {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // Does not create issue if you are implementing the function
    getReelsCount() {
        return 10;
    }
}
class Snapchat extends PhotoClass {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getCount() {
        console.log("Count printing in the child class.");
    }
}
// const photoClass = new PhotoClass("standard", "40%"); // Cannot create an instance of an abstract class
// Instead create instance of the child class
const snapchat = new Snapchat("standard", "40%", 3);
console.log("I am in the abstract class file");
console.log("getReelsCount", snapchat.getReelsCount());
snapchat.getCount();
