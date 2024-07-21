class Billing {
    #amount;
    constructor(amount) {
        this.#amount = amount
    }
    calculateTotal() {
        return this.#amount * this.type()
    }
}

class Fixed extends Billing {
    type() {
        return 1
    }
}
class Hour extends Billing {
    constructor(amount,hour) {
        super(amount)
        this.hour = hour
    }
    type() {
        return this.hour
    }
}
class Item extends Billing {
    constructor(amount, item) {
        super(amount)
        this.item = item
    }
    type() {
        if (Array.isArray(this.item)) {
            return  this.item.reduce((acc, el) => acc + el)
        } else {
            return this.item
        }
    }
} 



