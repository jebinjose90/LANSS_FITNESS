export class BMI {
    static calculate(weight: number, heightCm: number): number {
        const heightM = heightCm / 100;
        return weight / (heightM ** 2);
    }

    static interpret(bmi: number, age: number, gender: string): string {
        if (age < 18) {
            return "For children and teens, consult a doctor for accurate BMI assessment.";
        } else if (bmi < 18.5) {
            return "Underweight: A balanced diet and strength training may help.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight: Keep up with a healthy lifestyle.";
        } else if (bmi >= 25 && bmi < 29.9) {
            return gender === "male"
                ? "Overweight: Try increasing physical activity and reducing calorie intake."
                : "Overweight: A balanced diet and regular exercise could benefit you.";
        } else {
            return gender === "male"
                ? "Obese: A personalized fitness plan could improve your health."
                : "Obese: Consult a healthcare provider for guidance.";
        }
    }
}
