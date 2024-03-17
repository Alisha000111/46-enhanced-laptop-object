var laptop = {
    make: "hp",
    model: "XPS 18",
    year: 2024,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
