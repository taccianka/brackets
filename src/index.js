module.exports = function check(str, bracketsConfig) {
    // your solution

    let stringArray = str.split("");
    let tempArray = [];
    let k = 0;
    let result;
    let i, temp;

      for (i = 0; i < stringArray.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++)   {
            if (stringArray[i] == bracketsConfig[j][0]) {
                tempArray.push(stringArray[i]);
            } else if (
                stringArray[i] == bracketsConfig[j][1]
            ) {
                 if (tempArray[tempArray.length - 1]  != bracketsConfig[j][0]) {
                    return false;
                 }
                 if (tempArray[tempArray.length - 1] == bracketsConfig[j][0])
                 {
                    tempArray.pop();
                 }
            } else continue;
        }
    }

    if (
        typeof tempArray != "undefined" &&
        tempArray != null &&
        tempArray.length > 0
    ) {
        return false;
    } else return true;
}
