import makeCookie from "../module/cookie.js";
import { serveCookie, eatCookie } from "../module/cookie.js";
import { serveCookie as serve, eatCookie as eat } from "../module/cookie.js";
import * as Cookies from "./cookie.js";

import User from "./user.js";

console.log(makeCookie());
console.log(serveCookie());
console.log(eatCookie());

console.log(eat());

console.log(Cookies.serveCookie());
console.log(Cookies.default());

const user1 = new User("daisy", "daisy@gmail.com");
console.log(user1);
console.log(user1.greeting());
