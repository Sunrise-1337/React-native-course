import { action, makeObservable, observable } from "mobx";
import { ProductModel } from "../models/products.model"
import { OrderModel } from "../models/order.model";

export class CartStore {
    @observable orders: {[key: string]: OrderModel} = {};
    @observable ordersAmount: number = 0;
    @observable totalPrice: number = 0;

    constructor() {
        makeObservable(
            this,
            // {
            //     orders: observable,
            //     ordersCount: computed,
            //     toAddOrder: action,
            //     toDeleteOrder: action,
            // }
        )
    }

    @action
    toAddUnitToOrder(product: ProductModel): void{
        this.ordersAmount++

        if (this.isSuchKeyPresent(product.name)) {
            let order = this.orders[product.name]

            order = {
                ...order,
                amountOfUnits: order.amountOfUnits++
            }

            this.totalPrice += order.price
            this.orders = {...this.orders}
            return
        }

        this.orders[product.name] = new OrderModel(product)
        this.totalPrice += product.price

        this.orders = {...this.orders}
    }

    @action
    toDeleteUnitFromOrder(product: ProductModel): void{
        if (this.areThereSuchDishesInOrder(product.name)) {
            let order = this.orders[product.name]
            
            order.amountOfUnits--
            this.ordersAmount--
            this.totalPrice -= order.price

            if (order.amountOfUnits === 0) {
                this.toDeleteDishTypeFromOrder(order)
            } else {
                this.orders = {...this.orders}
            }
        }
    }

    
    @action
    toDeleteDishTypeFromOrder(order: OrderModel | ProductModel): void{
        const {amountOfUnits, price} =  {...this.orders[order.name]}

        delete this.orders[order.name]

        this.orders = {...this.orders}

        this.ordersAmount -= amountOfUnits
        this.totalPrice -= amountOfUnits * price
    }

    @action
    toCleanTheCart(): void{
        this.orders = {};
        this.ordersAmount = 0;
        this.totalPrice = 0;
    }

    private isSuchKeyPresent(key: string): boolean{
        return this.orders.hasOwnProperty(key)
    }

    private areThereSuchDishesInOrder(name: string): boolean{
        return this.isSuchKeyPresent(name) && this.orders[name].amountOfUnits > 0
    }
}

export default new CartStore()