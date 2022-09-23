export const calcIMC = (peso: number, altura: number) => {
    return Math.round(peso / Math.pow(altura, 2));
}