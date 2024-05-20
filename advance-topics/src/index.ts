console.log("Typescript setup");

// Class; Access Modifiers: Private, public, protected; getters and setters

// class User {
//   public email: string;
//   name: string;
//   private readonly id: number = 1;
//   city: string = ""; // need initializer if not present in the constructor
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const user = new User("annu@mail.com", "annu");
// user.city = "gurgaon";
// // user.id = 3; //throw the error
// // user.id  // cant access the private members
// console.log(user);

// Shorter way
class User {
  private _count: number = 1; // Cant be accesses outside the class
  protected role: string = "Parent"; // Protected keyword will be accessible to child class
  readonly city: string = "Gurgaon";
  constructor(
    public email: string,
    public name: string,
    public userId: number
  ) {}

  // Private methods
  private deleteName() {
    console.log("name deleted");
  }

  // getter
  get count(): number {
    return this._count;
  }

  // setter
  // Does not return anything
  set count(count) {
    if (count <= 1) {
      throw new Error("Item should be more than 1");
    }
    this._count = count;
  }
}

// Inheritance
class SubUser extends User {
  isFamily: boolean = true;
  changeRole() {
    this.role = "Child"; // accessible due to the protected modifier on the role key in the parent class
  }
}

const user = new User("annu@mail.com", "annu", 1);
// user.deleteName() //  private and only accessible within class 'User'
console.log("Before", user.count); // 1
user.count = 10;
console.log("After", user.count); // 10
// user.count = 0;
// console.log("Error case check===", user.count); // Uncaught Error: Item should be more than 1

const subUser = new SubUser("annu@mail.com", "annu", 1);
// subUser.role // Cant access protected keyword outside the classes
