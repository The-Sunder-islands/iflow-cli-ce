/**
 * @module Htn
 * @category unknown
 * @label unknown
 * @position 521 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Htn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Htn = T((a$e) => {
  "use strict";
  Object.defineProperty(a$e, "__esModule", { value: !0 });
  a$e.PriorityQueue = void 0;
  var ine = 0,
    OIt = (t) => Math.floor(t / 2),
    s$e = (t) => t * 2 + 1,
    Gbe = (t) => t * 2 + 2,
    NIt = class {
      constructor(e = (r, n) => r > n) {
        ((this.comparator = e), (this.heap = []));
      }
      size() {
        return this.heap.length;
      }
      isEmpty() {
        return this.size() == 0;
      }
      peek() {
        return this.heap[ine];
      }
      push(...e) {
        return (
          e.forEach((r) => {
            (this.heap.push(r), this.siftUp());
          }),
          this.size()
        );
      }
      pop() {
        let e = this.peek(),
          r = this.size() - 1;
        return (r > ine && this.swap(ine, r), this.heap.pop(), this.siftDown(), e);
      }
      replace(e) {
        let r = this.peek();
        return ((this.heap[ine] = e), this.siftDown(), r);
      }
      greater(e, r) {
        return this.comparator(this.heap[e], this.heap[r]);
      }
      swap(e, r) {
        [this.heap[e], this.heap[r]] = [this.heap[r], this.heap[e]];
      }
      siftUp() {
        let e = this.size() - 1;
        for (; e > ine && this.greater(e, OIt(e)); ) (this.swap(e, OIt(e)), (e = OIt(e)));
      }
      siftDown() {
        let e = ine;
        for (
          ;
          (s$e(e) < this.size() && this.greater(s$e(e), e)) || (Gbe(e) < this.size() && this.greater(Gbe(e), e));
        ) {
          let r = Gbe(e) < this.size() && this.greater(Gbe(e), s$e(e)) ? Gbe(e) : s$e(e);
          (this.swap(e, r), (e = r));
        }
      }
    };
  a$e.PriorityQueue = NIt;
});