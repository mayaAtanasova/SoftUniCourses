function barIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$%\.]*<(?<prod>\w+)>[^\|\$%\.]*\|(?<qty>\d+)\|([^\|\$%\.\d]*)(?<price>[0-9]+\.*\d*)\$/;
    let totIncome = 0;
    let text = input.shift();
    while (text != 'end of shift') {
        if (pattern.test(text)) {
            let match = pattern.exec(text);
            let [name, prod, qty, price] = Object.values(match.groups);
            let totPrice = Number(qty) * Number(price);
            totIncome += totPrice;
            console.log(`${name}: ${prod} - ${totPrice.toFixed(2)}`);
        }
        text = input.shift();
    }
    console.log(`Total income: ${totIncome.toFixed(2)}`);
}
barIncome(["%George%<Croissant>|2|10.3$",
"%Peter%<Gum>|1|1.3$",
"%Maria%<Cola>|1|2.4$",
"end of shift"]
)