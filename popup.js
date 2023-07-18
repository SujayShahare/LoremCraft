const loremIpsumRandomWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'gallia', 'est', 'omnis', 'divisa', 
    'in', 'partes', 'tres', 'quarum', 'unam', 'incolunt', 'belgae', 'aliam', 'aquitani', 'tertiam', 
    'qui', 'ipsorum', 'lingua', 'celtae', 'nostra', 'galli', 'appellantur', 'hi', 'omnes', 'lingua', 
    'institutis', 'legibus', 'inter', 'se', 'differunt', 'gallos', 'ab', 'aquitanis', 'garumna', 'flumen', 
    'a', 'belgis', 'matrona', 'et', 'sequana', 'dividit', 'horum', 'omnium', 'fortissimi', 'sunt', 'belgae', 
    'propterea', 'quod', 'a', 'cultu', 'atque', 'humanitate', 'provinciae', 'longissime', 'absunt', 
    'minimeque', 'ad', 'eos', 'mercatores', 'saepe', 'commeant', 'atque', 'ea', 'quae', 'ad', 'effeminandos', 
    'animos', 'pertinent', 'important', 'proximique', 'sunt', 'germanis', 'qui', 'trans', 'rhenum', 
    'incolunt', 'quibuscum', 'continenter', 'bellum', 'gerunt', 'qua', 'de', 'causa', 'helvetii', 
    'quoque', 'reliquos', 'gallos', 'virtute', 'praecedunt', 'quod', 'fere', 'cotidianis', 'proeliis', 
    'cum', 'germanis', 'contendunt', 'cum', 'aut', 'suis', 'finibus', 'eos', 'prohibent', 'aut', 'ipsi',
     'in', 'eorum', 'finibus', 'bellum', 'gerunt'
];


const generateRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const generateSentence = () => {
  const sentenceLength = generateRandomInteger(5, 15);

  let startIndex = generateRandomInteger(
    0,
    loremIpsumRandomWords.length - sentenceLength
  );
  let sentence = loremIpsumRandomWords[startIndex];

  for (let i = 1; i < sentenceLength; i++) {
    const nextWord = loremIpsumRandomWords[startIndex + i];
    sentence += " " + nextWord;
  }

  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
};


const generateParagraph = (numOfSentences) => {
  const sentences = [];

  for (let i = 0; i < numOfSentences; ++i) {
    sentences.push(generateSentence());
  }

  return sentences.join(" ");
};


const generateWholeText = (numOfSentences, numOfParagraphs) => {
  const paragraphs = [];

  for (let i = 0; i < numOfParagraphs; ++i) {
    paragraphs.push(generateParagraph(numOfSentences));
  }

  return paragraphs.join("\n\n");
};


document.getElementById("generate-button").addEventListener("click", () => {
  const numOfParagraphs = parseInt(
    document.getElementById("paragraph-number").value
  );
  const numOfSentences = parseInt(
    document.getElementById("sentences-number").value
  );
  const loremText = generateWholeText(numOfParagraphs, numOfSentences);
  document.getElementById("lorem-ipsum-text").innerText = loremText;
});


document.getElementById("copy-button").addEventListener("click", () => {
  const text = document.getElementById("lorem-ipsum-text").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Error copying text:", error);
    });
});
