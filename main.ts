function dec2hex (dec: number) {
    result = ""
    chars = "0123456789abcdef"
    while (dec != 0) {
        hex2 = dec % 16
        result = "" + chars.charAt(hex2) + result
        dec = Math.idiv(dec, 16)
    }
    return "0x" + result
}
let hex2 = 0
let chars = ""
let result = ""
let dec = 0
dec = 43
basic.showString("" + (dec2hex(dec)))
