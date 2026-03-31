const calculate = {
    value: 0,
    add(n) {
        this.value += n;
        return this;
    },
    subtract(n) {
        this.value -= n;
        return this;
    }

}
console.log(calculate.add(10).subtract(6));
// so in above case we added functions in the objects
