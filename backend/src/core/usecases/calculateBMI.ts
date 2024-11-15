import { BMI } from "../entities/BMI";

export function calculateBMI(weight: number, heightCm: number, age: number, gender: string) {
    const bmi = BMI.calculate(weight, heightCm);
    const interpretation = BMI.interpret(bmi, age, gender);
    return { bmi: bmi.toFixed(2), interpretation };
}
