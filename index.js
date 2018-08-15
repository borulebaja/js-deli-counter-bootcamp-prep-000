function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length > 0)
  katzDeliLine.push(name)
  return "Welcome," + name + ". You are number" + katzDeliLine.length + "in line."
}
function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!"
} else {
  var shift = katzDeliLine.shift(0)
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0)
  return "The line is currently empty."
} else {
  return "The line is currently: 1." + katzDeliLine[0]"
}