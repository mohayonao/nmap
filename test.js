"use strict";

const assert = require("assert");
const nmap = require(".");

assert.deepEqual(nmap(4, () => 0), [ 0, 0, 0, 0 ]);
assert.deepEqual(nmap(4, (_, i) => i), [ 0, 1, 2, 3 ]);
