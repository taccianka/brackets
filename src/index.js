module.exports = function check(str, bracketsConfig) {
    // your solution

    let stringArray = str.split("");
    let tempArray = [];
    let result;
    let i, flag;
    
    flag = 1;

    for (i = 0; i < stringArray.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                stringArray[i] == bracketsConfig[j][0] &&
                (bracketsConfig[j][0] != bracketsConfig[j][1] || flag == 1)
            ) {
                tempArray.push(stringArray[i]);
                if (bracketsConfig[j][0] == bracketsConfig[j][1]) flag = 0;
                continue;
            } else if (stringArray[i] == bracketsConfig[j][1]) {
                if (
                    tempArray[tempArray.length - 1] != bracketsConfig[j][0] &&
                    bracketsConfig[j][0] != bracketsConfig[j][1]
                ) {
                    return false;
                }
                if (tempArray[tempArray.length - 1] == bracketsConfig[j][0]) {
                    tempArray.pop();
                    if (bracketsConfig[j][0] == bracketsConfig[j][1]) flag = 1;
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
