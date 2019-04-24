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