import { Request, Response } from "express";
import { calculateBMI } from "../../../core/usecases/calculateBMI";

export function calculateBMIHandler(req: Request, res: Response) {
    const { weight, heightCm, age, gender } = req.body;
    if (!weight || !heightCm || !age || !gender) {
        res.status(400).json({ error: "Missing required fields" });
    }
    const result = calculateBMI(parseFloat(weight), parseFloat(heightCm), Number(age), gender);
    res.status(200).json(result);
}
