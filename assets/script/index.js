const paragraph = document.querySelector('.text');
const poem = paragraph.innerHTML;

const result = poem.replace(/;/g, ';\n');

const substring = result.replace(/\s/g, '');

const newText = result.slice(28, 50);

const replacedText = newText.replace("клён", "дубе");

const replacedText2 = result.toUpperCase();

const replacedText3 = result.replace(/клён/g, "дуб");

const index = replacedText3.indexOf('моря');

const findLetter = replacedText[0];
const bigLetter = findLetter.toUpperCase();
const tail = replacedText.slice(1);
const modifiedText = bigLetter + tail;

console.log(`1. Количество символов в тексте: ${poem.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

const result1 = `1. Количество символов в тексте: ${poem.length}`;
const paragraph1 = document.createElement('p');
paragraph1.textContent = result1;
document.body.appendChild(paragraph1);

const result2 = `2. Текст с переносами строк: \n ${result}`;
const paragraph2 = document.createElement('p');
paragraph2.innerText = result2;
document.body.appendChild(paragraph2);

const result3 = `3. Текст с удалёнными пробелами: ${substring}`;
const paragraph3 = document.createElement('p');
paragraph3.innerText = result3;
document.body.appendChild(paragraph3);

const result4 = `4. Извлечение подстроки: ${newText}`;
const paragraph4 = document.createElement('p');
paragraph4.innerText = result4;
document.body.appendChild(paragraph4);

const result5 = `5. Замена "клён" на "дубе": ${replacedText}`;
const paragraph5 = document.createElement('p');
paragraph5.innerText = result5;
document.body.appendChild(paragraph5);

const result6 = `6. Строка result в верхнем регистре: ${replacedText2}`;
const paragraph6 = document.createElement('p');
paragraph6.innerText = result6;
document.body.appendChild(paragraph6);

const result7 = `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`;
const paragraph7 = document.createElement('p');
paragraph7.innerText = result7;
document.body.appendChild(paragraph7);

const result8 = `8. Индекс первого вхождения "моря": ${index}`;
const paragraph8 = document.createElement('p');
paragraph8.innerText = result8;
document.body.appendChild(paragraph8);

const result9 = `9. Строка с измененной первой буквой: ${modifiedText}`;
const paragraph9 = document.createElement('p');
paragraph9.innerText = result9;
document.body.appendChild(paragraph9);


