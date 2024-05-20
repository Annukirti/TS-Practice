abstract class PhotoClass {
  constructor(public cameraMode: string, public filter: string) {}
  // Lets create method definition in abstract class
  //   getCount():void   // Function implementation is missing or not immediately following the declaration
  abstract getCount(): void;

  // Does not create issue if you are implementing the function
  getReelsCount(): number {
    return 10;
  }
}

class Snapchat extends PhotoClass {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getCount(): void {
    console.log("Count printing in the child class.");
  }
}

// const photoClass = new PhotoClass("standard", "40%"); // Cannot create an instance of an abstract class

// Instead create instance of the child class
const snapchat = new Snapchat("standard", "40%", 3);
console.log("I am in the abstract class file");

console.log("getReelsCount", snapchat.getReelsCount());

snapchat.getCount();
