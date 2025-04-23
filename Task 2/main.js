const heading = document.querySelector('h1');
heading.style.backgroundColor = 'lightgreen';
heading.style.fontWeight = '700';

const paragraphs = document.querySelectorAll('p');
if (paragraphs[1]) paragraphs[1].style.color = 'red';
if (paragraphs[2]) paragraphs[2].style.textDecoration = 'underline';
if (paragraphs[3]) paragraphs[3].style.fontStyle = 'italic';

const list = document.getElementById('myList');
list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.gap = '10px';
list.style.padding = '0';

const span = document.querySelector('span');
if (span) span.style.display = 'none';
