"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conversor;
function conversor(cantidad, unidad) {
  if (unidad == "lb") return cantidad * 0.45;else {
    return cantidad / 0.45;
  }
}