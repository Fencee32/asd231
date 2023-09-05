console.log('script loaded')
console.error('asd')


document.querySelector('h1').onclick = function() {
    alert('Boldog új évet!');
};
document.querySelector('h2').onclick = function() {
    alert('Boldog új évet!2');
};

const kattinthatElem = document.getElementById('kattinthat');
kattinthatElem.style.cursor = 'pointer';