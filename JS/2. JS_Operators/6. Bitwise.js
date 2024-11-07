//--> 6. Bitwise Operators <--//

/*
Bitwise operators perform bitwise operations 
on binary representations of integers.
*/

let c = 5; // 0101 in binary
let d = 3; // 0011 in binary

console.log(c & d); // Bitwise AND (1 - 0001)
console.log(c | d); // Bitwise OR (7 - 0111)
console.log(c ^ d); // Bitwise XOR (6 - 0110)
console.log(~c); // Bitwise NOT (-6)
console.log(c << 1); // Left shift (10 - 1010)
console.log(c >> 2); // Right shift (1 - 0001)
console.log(c >>> 1); 
// Right shift with zero fill (2 - 0010)
