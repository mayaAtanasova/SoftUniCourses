function solve() {
  document.getElementById('output').innerHTML = '';
  let text = document.getElementById('input').value;
  let result = text.split('.');
  for (let i = 0; i < result.length - 1; i += 3) {
    let temp = result.slice(i, i + 3).join('.');
    let paragraph = `<p>${temp}</p>`;
    document.getElementById('output').innerHTML += paragraph;
  }
}