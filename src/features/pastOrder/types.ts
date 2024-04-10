export type PastOrder = {
    id?: number,
    date: Date | string,
    roomNumber: number,
    mainDish: string,
    sideDish: string,
    size: "0.75" | "1" | "1.25",
}