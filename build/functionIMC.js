"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcIMC = void 0;
const calcIMC = (peso, altura) => {
    return Math.round(peso / Math.pow(altura, 2));
};
exports.calcIMC = calcIMC;
