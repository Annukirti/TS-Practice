interface User2 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User2 {
  githubToken: string;
}

interface Admin extends User2 {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};
hitesh.email = "h@hc.com";
// hitesh.dbId = 33 // Not allowed due to readonly
