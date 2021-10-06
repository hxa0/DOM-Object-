// dom.attr(empty, 'title', 'hi,I am Frank')
// const title = dom.attr(empty, 'title')
// console.log(`title:${title}`)
// dom.text(e1, '你好,这是新的内容')



// dom.style(test, { color: 'red' })
// dom.class.add(test, 'red')
// dom.class.remove(test, 'red')
// console.log(dom.class.has(test, "blue"))
// const fn = () => {
//     console.log('点击了')
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)
// const testDiv = dom.find('#test')[0]
// console.log(testDiv)

// console.log(dom.previous(empty))
// const t = dom.find('#travel')[0]


const div = dom.find('#test>.red')[0]
console.log(div)
dom.style(div, 'color', 'red')
const divList = dom.find('.red')
console.log(divList)
dom.each(divList, (n) => console.log(n))