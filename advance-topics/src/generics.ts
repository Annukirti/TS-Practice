const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// Generic Methods
// Better way than mentioning two many types or any keyword
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
identityThree("Annu");

// Works same as Type
function identityFour<T>(val: T): T {
  return val;
}

identityThree(3);
identityThree("Annu");

interface Bottle {
  brand: string;
  type: number;
}

function identityFive<Bottle>(val: Bottle): Bottle {
  return val;
}

identityFive({ brand: "Milton", type: "Sipper" });

// ========================================================================================================================================

// Generics in Array and Arrow functions

function getSearchedProduct<T>(products: T[]): T {
  return products[0];
}

function getSearchedProducts<T>(products: T[]): T[] {
  return products;
}

const getProducts1 = <T>(prod: T[]): T => {
  return prod[1];
};

const getProducts2 = <T>(prod: T[]): T[] => {
  return prod;
};

const getProducts3 = <T>(prod: T[]): Array<T> => {
  return prod;
};

const getProducts4 = <T>(prod: T[]): Array<T> => {
  return prod;
};

// ========================================================================================================================================

// Generic classes

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, {
  connection: "string",
  username: "string",
  password: "string",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
