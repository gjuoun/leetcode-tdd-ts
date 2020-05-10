"use strict";
/**
 * @param {number[]} seats
 * @return {number}
 */
// const maxDistToClosest = function (seats: number[]): number {
Object.defineProperty(exports, "__esModule", { value: true });
//   let start = 0, end = 0, longest = 0;
//   let _start = 0, _end = 0
//   for (let i = 0; i < seats.length; i++) {
//     if (seats[i] === 0) {
//       // [0...] || 1->0 
//       if (i === 0 || seats[i - 1] === 1) {
//         _start = i
//       }
//       // 0-> 1 || [...0]
//       if (
//         (seats[i + 1] === 1 && i !== seats.length - 1)
//         || (i === seats.length - 1)) {
//         let _length = i - _start + 1
//         if (_length >= longest) {
//           longest = _length
//           start = _start
//           end = i
//         }
//       }
//     }
//   }
//   if (start === 0 || end === seats.length - 1)
//     return longest
//   else
//     return Math.ceil(longest / 2)
// };
const maxDistToClosest = function (seats) {
    let edgeStart = 0, edgeEnd = 0, edgeLongest = 0;
    let btwStart = 0, btwEnd = 0, btwLongest = 0;
    if (seats[0] === 0 || seats[seats.length - 1] === 0) {
        for (let i = 0; i < seats.length; i++) {
            if (seats[i] !== 0)
                continue;
            let _start = i;
            while (seats[i] === 0) {
                i++;
            }
            let _end = i;
            let _length = _end - _start;
            if ((_length >= edgeLongest) &&
                (_start === 0 || _end === seats.length)) {
                edgeStart = _start;
                edgeEnd = _end;
                edgeLongest = _length;
            }
        }
    }
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] !== 0)
            continue;
        let _start = i;
        while (seats[i] === 0) {
            i++;
        }
        let _end = i;
        let _length = _end - _start;
        if ((_length >= btwLongest) &&
            (_start !== 0) &&
            (_end !== seats.length)) {
            btwStart = _start;
            btwEnd = _end;
            btwLongest = _length;
        }
    }
    return btwLongest > edgeLongest * 2 ?
        Math.ceil((btwLongest % 2 ? btwLongest + 1 : btwLongest) / 2) :
        edgeLongest;
};
exports.maxDistToClosest = maxDistToClosest;
//# sourceMappingURL=849. Maximize Distance to Closest Person.js.map