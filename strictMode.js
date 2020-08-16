function sum(a, a, c) {
  // !!! syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}

function sum2(a, a, c) {
  return a + a + c;
}

sum2(2, 5, 5); // outputs 15
