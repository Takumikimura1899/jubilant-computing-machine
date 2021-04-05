// いろんな例
console.log('Hello, world!')
console.log('こんにちは世界！')
console.log(1 + 2)
console.log(10 - 4 * 8)
const answer = 42
console.log(answer)
const breakfast = "お茶漬け"
console.log("今日の朝ごはんは" + breakfast + "でした")
console.log(`今日の朝ご飯は${breakfast}でした。`)
console.log(`8 + 7 = ${8 + 7}`)
const html = `
<div class="container">
    <p>test</p>
</div>
`
console.log(html)
const days = [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土",
]
console.log(days)
console.log(days.length)
console.log(days[0])
console.log(days[1])
const nengou = ["明治","大正","昭和","平成",]
console.log(nengou)
nengou.push("令和")
console.log(nengou)
nengou.splice(3, 1)
console.log(nengou)
nengou[2] = "syouwa"
console.log(nengou)

const num = Math.random()

if (num >= 0.5) {
    console.log("大きめ")
} else {
    console.log("小さめ")
}

console.log(`数： ${num}`)

if (true) {
    console.log(`必ずこちらが実行される`)
} else {
    console.log(`こちらは実行されない`)
}

if (false) {
    console.log(`今度はこちらが実行されない`)
} else {
    console.log(`こちらが実行される`)
}

const a = 2
const b = 3
console.log(a === b)
console.log(a !== b)
console.log(a < b)
console.log(a <= b)
console.log(a > b)
console.log(a >= b)

const c = 10
const d = 2 * 5
console.log(c === d)
console.log(c !== d)
console.log(c < d)
console.log(c <= d)
console.log(c > d)
console.log(c >= d)

console.log(a === b && c === d)
console.log(a === b || c=== d)
console.log(!(a === b))