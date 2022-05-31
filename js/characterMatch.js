exports.isCharacterMatch = function(string1, string2) {
    let newStr1  = string1.toLowerCase().split("").sort().join("").trim();
    let newStr2  = string2.toLowerCase().split("").sort().join("").trim();
    return (newStr1 === newStr2) 
}
// Having issues with case; zach === attack. Worked when testing.

// Added trim() for Challange question to test true.