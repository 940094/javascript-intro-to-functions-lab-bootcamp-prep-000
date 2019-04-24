function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string) // string returns a string variable 'hello'
  console.log(string.toUpperCase()) // which is convereted to upper via the toUpperCase() method which returns a string variable
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if string.toLowerCase() === string // if string is lowercase
    return ("I can't hear you!")
   string.toLowerCase() === string // if string is lowercase
    return ("I can't hear you!")
  
}

describe('sayHiToGrandma(string)', function() {

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})