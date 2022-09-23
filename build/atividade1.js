"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const functionIMC_1 = require("./functionIMC");
const prompt = (0, prompt_sync_1.default)();
const peso = Number(prompt('Qual é o seu peso '));
const altura = Number(prompt('Qual é a sua altura '));
const imc = (0, functionIMC_1.calcIMC)(peso, altura);
console.log(`O seu imc é ${imc}`);
