/**module.exports = */ function check(str, bracketsConfig) {
    // your solution

    let stri = "([{(}])()";
    const bracketsConfig1 = [
        ["(", ")"],
        ["[", "]"],
        ["{", "}"],
    ];
    let stringArray = stri.split("");
    let tempArray = [];
    let k = 0;
    let result;
    let i, temp;

    /* Working with identical brackets /*

/*    for (let j = 0; j < bracketsConfig1.length; j++) {
        for (let i = 0; i < stringArray.length; i++) {
            if (stringArray[i] == bracketsConfig1[j][0]) {
                tempArray.push(stringArray[i]);
            } else if (
                stringArray[i] == bracketsConfig1[j][1] &&
                tempArray[tempArray.length - 1] == bracketsConfig1[j][0]
            ) {
                tempArray.pop();
            }
        }
    }
*/

    for (let j = 0; j < bracketsConfig1.length; j++) {
        for (i = 0; i < stringArray.length; i++) {
            if (stringArray[i] == bracketsConfig1[j][0]) {
                tempArray.push(stringArray[i]);
            } else if (
                stringArray[i] == bracketsConfig1[j][1] &&
                tempArray[tempArray.length - 1] == bracketsConfig1[j][0]
            ) {
                tempArray.pop();
            } else continue;
        }
    }

    /*     for (let j = 0; j < bracketsConfig1.length; j++) {
            for (; i < stringArray.length; i++) {
                if (
                    stringArray[i] == bracketsConfig1[j][1] &&
                    tempArray[tempArray.length - 1] == bracketsConfig1[j][0]
                ) {
                    tempArray.pop();
                }
            }
        }
        temp--;
    }*/
    /*else if (
                stringArray[i] == bracketsConfig1[j][1] &&
                tempArray[tempArray.length - 1] == bracketsConfig1[j][0]
            ) {
                tempArray.pop();
            }*/

    if (
        typeof tempArray != "undefined" &&
        tempArray != null &&
        tempArray.length > 0
    ) {
        result = false;
    } else result = true;

    console.log("tempArray = ", tempArray);
    console.log("Result = ", result);
}
