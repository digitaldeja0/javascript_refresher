//inline export

export default function makeCookie() {
  return "Bake Cookies";
}
//you need to make this function a traditional decalrative function

export const eatCookie = () => {
  return "Yum Yum";
};

export const serveCookie = () => {
  return "Order up";
};

//Other ways to export a function

// const makeCookie = () => {
//   return "Bake Cookies";
// };

// const eatCookie = () => {
//   return "Yum Yum";
// };

// const serveCookie = () => {
//   return "Order up";
// };

// export default makeCookie;
//or
// export {makeCookie, eatCookie, serveCookie}
