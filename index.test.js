const sinon = require('sinon');
const { expect } = require('chai');

describe('transforma abertura para markdown', () => {
  it ('Verifica tag {{< highlight react >}}', () => {
    const expected = '```jsx ...qualquer coisa aqui ```';
    const result = '{{< highlight react >}} ....conteúdo {{< /highlight >}}';
    expect(result).to.equal(expected);
  });
  it ('Verifica tag {{< highlight >}}', () => {
    const expected = '``` ...qualquer coisa aqui ```';
    const result = '{{< highlight >}} ....conteúdo {{< /highlight >}}';
    expect(result).to.equal(expected);

  });
  it ('Verifica tag {{< vm id="" >}}', () => {
    const id = 460187293
    const expected = `{{< vm id="${id}" >}}`;
    const result = `<iframe src="https://player.vimeo.com/video/${id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    expect(result).to.equal(expected);
  });
  it ('Verifica tag {{< extlink text="" href="" >}}', () => {
    const href = 'https://testing-library.com/docs/react-testing-library/cheatsheet'
    const text = 'cheatsheet'
    const expected = `[${text}](${href})`;
    const result = `{{< extlink text="${text}" href="${href}">}}`;
    expect(result).to.equal(expected);
  });
});
