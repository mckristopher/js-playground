// Singleton : using ES6 Class

class Singleton {

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

let s1 = new Singleton();
let s2 = new Singleton();

console.log(s1 === s2)


// Singleton : using IIFE / Closure

const MsSingleton = (function () {
  let instance;
  
  createInstance = () => {
    return new Object('I am The Instance');
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance()
      }
      return instance;
    }
  }
})();

let mss1 = MsSingleton.getInstance();
let mss2 = MsSingleton.getInstance();

console.log(mss1 === mss2)
