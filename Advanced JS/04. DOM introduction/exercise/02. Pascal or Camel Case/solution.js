function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const convention = document.getElementById('naming-convention').value;

  let conversions = {
    'Camel Case': (str) => {
      return str.split(' ')[0] + str.split(' ').slice(1).map(x => capitalize(x)).join('');
    },
    'Pascal Case': (str) => {
      return str.split(' ')
        .map(x => capitalize(x))
        .join('');
    },
  }
  if (convention === 'Camel Case' || convention === 'Pascal Case') {
    document.getElementById('result').textContent = conversions[convention](text);
  } else {
    document.getElementById('result').textContent = 'Error!'

  }

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
}