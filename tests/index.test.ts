import sinon from 'sinon';
import { expect } from 'chai';
import replaceHugoWithMarkdown from '..';

describe('transforma abertura para markdown', () => {
  it('Verifica tag {{< highlight react >}}', () => {
    const expected = '```jsx ...conteúdo ```';
    const result = replaceHugoWithMarkdown('{{< highlight react >}} ...conteúdo {{< /highlight >}}');
    expect(result).to.equal(expected);
  });
  it('Verifica tag {{< highlight >}}', () => {
    const expected = '``` ...conteúdo ```';
    const result = replaceHugoWithMarkdown('{{< highlight >}} ...conteúdo {{< /highlight >}}');
    expect(result).to.equal(expected);

  });
  it('Verifica tag {{< vm id="" >}}', () => {
    const id = 460187293
    const expected = `<iframe src="https://player.vimeo.com/video/${id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    const result = replaceHugoWithMarkdown(`{{< vm id="${id}" >}}`);
    expect(result).to.equal(expected);
  });
  it('Verifica tag {{< extlink text="" href="" >}}', () => {
    const href = 'https://testing-library.com/docs/react-testing-library/cheatsheet'
    const text = 'cheatsheet'
    const expected = `[${text}](${href})`;
    const result = replaceHugoWithMarkdown(`{{< extlink text="${text}" href="${href}">}}`);
    expect(result).to.equal(expected);
  });
});
