const buf = Buffer.from('Hello!')

console.log(buf)
console.log(buf[0])
console.log(buf[1])
console.log(buf.toString())
console.log(buf.length)

buf.forEach(element => {
	console.log(element)
})

buf.write('Good day!')

console.log(buf.toString())

const buf2 = Buffer.alloc(10)

buf2.write('Good day!')
buf2[0] = 111

console.log(buf2.subarray(0).toString())

const slice = buf2.subarray(0, 2)
console.log(slice.toString())

console.log(buf2.toString())

const buf3 = Buffer.alloc(40)
buf3.set(buf)
console.log(buf3)

const buf4 = Buffer.alloc(20)
buf4.set(buf2.subarray(1,3), 1)
console.log(buf4)