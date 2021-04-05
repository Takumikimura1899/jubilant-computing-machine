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


const score = Math.random() * 100

console.log(`点数: ${score}`)

if(score >= 90) {
    console.log("秀")
} else if(score >= 75) {
    console.log("優")
} else if(score >= 60) {
    console.log("良")
} else if(score >= 30) {
    console.log("可")
} else {
    console.log("不可")
} 

for (let i = 0; i < 10; i++) {
    console.log(i)
}
for (let i = 0; i < 10; i++) {
    console.log(i)
}

let s = 2
while(s < 100000) {
    console.log(s)
    s = s*s
}


const friends = ["サーバル", "フェネック", "アライグマ"]

friends.forEach((friend) => {
    console.log(friend)
})


function cook(food1, food2) {
    console.log(food1 +"を切ります。")
    console.log(food1 +"を炒めます。")
    console.log(food2 +"をすりおろします。")
    console.log(food1 +"に" + food2 + "を混ぜます。")
}

cook("豚肉", "生姜")


function foo(a, b, c) {
    console.log(`fooが引数${a},${b},${c}で呼び出された`)     // ${}は``で囲む
}

function bar() {
    console.log("barが呼び出された")
}

foo(1, "abc", true)
bar()


function applyTax(price) {
    const result = price * 0.1
    return result
}

const tax =applyTax(12000)
console.log(tax)



// function double(X) {
//     return X * 2
// }

// // 以下のようにも書ける(アロー関数という)
// const double = (X) => {
//     return X * 2
// }

// // アロー関数の時は引数が１つだけの場合は()を省略できる
// const double = X => {
//     return X * 2
// }

// // 更にアロー関数の書き方の時に限り、関数の中身がreturnだけの時は{}を省略できる
// const double = X => X * 2

