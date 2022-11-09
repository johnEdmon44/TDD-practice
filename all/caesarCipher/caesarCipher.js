function caesarCipher(string) {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    const index = alphabets.indexOf(string[i].toLowerCase());
    if (index === -1) {
      cipher += string[i];
      continue;
    }
    const newIndex = (index + 1) % 26;
    const newLetter = alphabets[newIndex];
    cipher +=
      string[i] === string[i].toUpperCase() ? newLetter.toUpperCase() : newLetter;
  }
  return cipher;
}

export default caesarCipher