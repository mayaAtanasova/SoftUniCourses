function cityTaxes(name, population, treasury) {
    return{
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(perc) {
            this.population *= (100 + perc) / 100;
        },
        applyRecession(perc) {
            this.treasury *= (100 - perc) / 100;
        }
    };
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);


city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

