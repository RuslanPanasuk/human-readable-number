module.exports = function toReadable (number) {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 10) return digits[number];
  if (number == 10) return tens[0];
  if (number > 10 && number < 20) return teens[number - 11];
  if (number >= 20 && number < 100 && number % 10 === 0) return `${tens[Math.floor((number -10) / 10)]}`;
  if (number >= 20 && number < 100) return `${tens[Math.floor((number -10) / 10)]} ${digits[number - (Math.floor(number / 10))*10]}`;
  if (number === 100) return `${digits[1]} hundred`; 
  if (number > 100 && number < 1000 && number % 100 === 0) return `${digits[Math.floor(number / 100)]} hundred`; 
  if (number > 100 && number < 1000) return `${digits[Math.floor(number / 100)]} hundred ${toReadable(number - (Math.floor(number / 100))*100)}`; 
}
