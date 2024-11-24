/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = (init) => {
    let not = init
    let changingValue = init
    return {
        increment() {

            changingValue++
            let newVal = changingValue
            return newVal
        },
        decrement() {
           changingValue--
           let newVal = changingValue
           return newVal
        },
        reset() {
            changingValue = not
            let newVal = changingValue
            return newVal
        }
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */