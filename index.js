const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
/*function addTogether (a, b) {
    return a + b
}*/
function addTogether(acc, element) {
    return acc + element;
}
const totalBatteries = batteryBatches.reduce(addTogether, 0)



