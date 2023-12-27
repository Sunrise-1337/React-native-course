import { ProductModel } from "./products.model";

export class OrderModel extends ProductModel{
    amountOfUnits: number;

    constructor(product: ProductModel, amount: number = 1) {
        super()

        Object.assign(this, product)
        this.amountOfUnits = amount
    }
}