import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    contactno: "+919818946005",
    website: "https://www.google.com",
    company: "PrefabMarket",
  },
];

export default users;
