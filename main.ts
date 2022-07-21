let hex2 = 0
let dec = 43
let result = ""
let chars = "0123456789abcdef"
while (dec != 0) {
    hex2 = dec % 16
    result = "" + chars.charAt(hex2) + result
    dec = Math.idiv(dec, 16)
}
result = "0x" + result
basic.showString(result)
