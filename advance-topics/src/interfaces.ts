interface Photo {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): string;
}

// Implements keywors is used to make class follow the protocol defined in the interface
class Instagram implements Photo {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements Photo, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string // Let you add more properties but throws error if they are less than the interface
  ) {}
  createStory(): string {
    return "To implement two interfaces, write the exact name as in the interface";
  }
}

const youtube = new Youtube("standard", "10%", 1, "Javascript");
console.log("Hey! I am in interfaces file");
