const paragraph = document.querySelector('.text');
const poem = paragraph.textContent;

console.log(poem.length);

const result = poem.replace(/;/g, '\n');
console.log(result);

const substring = result.replace(/\s/g, '');
console.log(substring);

const newText = result.slice(28, 50);
console.log(newText);

const replacedText = newText.replace("клён", "дубе");
console.log(replacedText);

const replacedText2 = result.toUpperCase();
console.log(replacedText2);

const replacedText3 = result.replace(/клён/g, "дуб");
console.log(replacedText3);

const index = replacedText3.indexOf('моря');
console.log(index);



