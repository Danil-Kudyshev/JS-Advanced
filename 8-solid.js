class Billing {
    #amount;
    constructor() {
        this.#amount = 1000
    }
    calculateTotal() {
        return this.#amount
    }
}
class Fixed extends Billing {

}
class Hour extends Billing {
    constructor(hour) {
        super()
        this.hour = hour
    }
    calculateTotal () {
        return super.calculateTotal() * this.hour
    }
}
class Item extends Billing {
    constructor(item) {
        super()
        this.item = item
    }
    calculateTotal () {
        return super.calculateTotal() * this.item ? 
        super.calculateTotal() * this.item : 
        super.calculateTotal() * this.item.length
    }
} 
const bill = new Billing()
bill.calculateTotal(); //1000
const fixed = new Fixed()
fixed.calculateTotal(); //1000
const hour = new Hour(12)
hour.calculateTotal(); // 12000
const item = new Item([1,2,3,4,5])
item.calculateTotal(); // 5000



