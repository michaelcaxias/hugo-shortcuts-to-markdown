import sinon from 'sinon';
import { expect } from 'chai';
import { replaceHugoWithMarkdown } from '../convertHugoToMarkdown';

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

  it('Verifica tag {{<versioning-your-code >}}', () => {
    const expected = '<!-- importar objeto c9a1c1f5-1761-4749-8125-12b6495abc76 -->';
    const result = replaceHugoWithMarkdown('{{<versioning-your-code >}}');
    expect(result).to.equal(expected);
  });

  it('Verifica tag {{< vm id="" >}}', () => {
    const id = 460187293
    const expected = `<iframe src="https://player.vimeo.com/video/${id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    const result = replaceHugoWithMarkdown(`{{< vm id="${id}" >}}`);
    expect(result).to.equal(expected);
  });

  it('Verifica tag {{< yt id="ZlKbVfL2cUk" >}}', () => {
    const id = 'ZlKbVfL2cUk';
    const expected = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    const result = replaceHugoWithMarkdown('{{< yt id="ZlKbVfL2cUk" >}}');
    expect(result).to.equal(expected);
  });

  it('Verifica tag {{< ytp id="PLAzhQg1MRUaMyCrK1Z1mzjHyj-FBx12xG" >}}', () => {
    const id = 'PLAzhQg1MRUaMyCrK1Z1mzjHyj-FBx12xG';
    const expected = `<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    const result = replaceHugoWithMarkdown('{{< ytp id="PLAzhQg1MRUaMyCrK1Z1mzjHyj-FBx12xG" >}}');
    expect(result).to.equal(expected);
  });

  it('Verifica tag {{< extlink text="" href="" >}}', () => {
    const href = 'https://testing-library.com/docs/react-testing-library/cheatsheet'
    const text = 'cheatsheet'
    const expected = `[${text}](${href})`;
    const result = replaceHugoWithMarkdown(`{{< extlink text="${text}" href="${href}">}}`);
    expect(result).to.equal(expected);
  });

  it('Verifica tag {{ <figure src="" class="" caption="" width="" /> }}', () => {
    const src = 'images/test.png'
    const caption = 'texto de caption'
    const expected = `|![${caption}](${src})|\n|:--:|\n|${caption}|`;
    const result = replaceHugoWithMarkdown(`{{ <figure src="${src}" class="" caption="${caption}" width="" /> }}`);
    expect(result).to.equal(expected);
  });

  it('Remove tag {{< next-btn >}}', () => {
    const expected = '';
    const result = replaceHugoWithMarkdown('{{< next-btn >}}');
    expect(result).to.equal(expected)
  });
});
