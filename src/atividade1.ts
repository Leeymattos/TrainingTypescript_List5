import PromptSync from "prompt-sync";
import { calcIMC } from "./functionIMC";

const prompt = PromptSync()

const peso = Number(prompt('Qual é o seu peso '));
const altura = Number(prompt('Qual é a sua altura '));

const imc = calcIMC(peso, altura)


console.log(`O seu imc é ${imc}`)