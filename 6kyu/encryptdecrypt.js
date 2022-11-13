function encrypt(text, n) {
  let encrypted = text;
  for (let i = 0; i < n; i++) {
    encrypted =
      encrypted
        .split("")
        .map((item, index) => {
          if (index % 2 === 1) return item;
        })
        .join("") +
      encrypted
        .split("")
        .map((item, index) => {
          if (index % 2 === 0) return item;
        })
        .join("");
  }
  return encrypted;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
    return encryptedText;
  }

  const helper = function (str) {
    let odds = str.slice(0, str.length / 2);
    let evens = str.slice(str.length / 2);
    let output = "";

    for (let i = 0; i < str.length; i++) {
      if (i % 2) {
        output += odds[0];
        odds = odds.slice(1);
      } else {
        output += evens[0];
        evens = evens.slice(1);
      }
    }

    return output;
  };

  for (let i = 0; i < n; i++) {
    encryptedText = helper(encryptedText);
  }

  return encryptedText;
}
