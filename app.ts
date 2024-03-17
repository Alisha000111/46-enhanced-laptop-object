let laptop = {
    make: "hp",
    model: "XPS 18",
    year: 2024,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
