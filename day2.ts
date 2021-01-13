import { map } from "lodash";
import { INPUT, numbersFromInput } from "./day1"

const numbers = numbersFromInput(INPUT)
let result = 0;
let msg = "";
for (let i1 = 0; i1 < numbers.length - 1; i1++) {
    for (let i2 = 0; i2 < numbers.length - 1; i2++) {
        for (let i3 = 0; i3 < numbers.length - 1; i3++) {
            let sum = numbers[i1] + numbers[i2] + numbers[i3]
            if (sum === 2020) {
                result = numbers[i1] * numbers[i2] * numbers[i3];
                msg = numbers[i1] + ", " + numbers[i2] + ", " + numbers[i3] +": " + result
            }
        }
    }
}
console.log(msg);
