function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const convention = document.getElementById('naming-convention').value;

  let conversions = {
    'Camel Case': str => str.split(' ')[0] + str.split(' ').slice(1).map(capitalize).join(''),
    'Pascal Case': str => str.split(' ').map(capitalize).join(''),
  };
  if (convention === 'Camel Case' || convention === 'Pascal Case') {
    document.getElementById('result').textContent = conversions[convention](text);
  } else {
    document.getElementById('result').textContent = 'Error!';

  }

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
}