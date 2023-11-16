const tags = require('../index')
const { test } = require('@jest/globals')

test('1', () => {
    expect(tags("<div><b><p>hello world</p></b></div>")).toBe(true)
})

test('2', () => {
    expect(tags("<div><i>hello</i>world</b>")).toBe("div")
})

test('3', () => {
    expect(tags("</div><p></p><div>")).toBe(false)
})

test('4', () => {
    expect(tags("<div><p></p><b><p></div>")).toBe(false)
})

test('5', () => {
    expect(tags("<div><p></p><b><p></div>")).toBe("b")
})

test('6', () => {
    expect(tags("<em></em><em></em><p></b>")).toBe("p")
})
