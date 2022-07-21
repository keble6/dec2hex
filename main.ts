let hex2 = 0
let dec = 18
let chars = [
"0",
"1",
"2",
"4",
"5",
"6",
"7",
"8",
"9",
"a",
"b",
"c",
"d",
"e",
"f"
]
let divisor = 16
let result = ""
while (dec != 0) {
    hex2 = dec % 16
    result = "" + result + chars.charAt(hex2)
    dec = Math.idiv(dec, 16)
}
basic.showString("Hello!")
