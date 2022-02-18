const tagHugo = '{{< highlight react >}} ....qualquer coisa aqui {{< /highlight >}}';

const regexps = {
  HUGO_HIGHLIGHT: /{{<\s?highlight\s?(\w+)?\s?>}}/g,
  HUGO_VIMEO: /{{<\s?vm\sid="(\w+)"?\s?>}}/g,
  HUGO_EXTLINK: /{{<\s?extlink\stext="(.+)"\s?href="(.+)"\s?>}}/g,
}

const tagTypes = {
  react: 'jsx'
}

function hugoTagsReplacer(_match, attribute) {
  if(tagTypes.attribute) {
    attribute = tagTypes.attribute;
  }
    return `\`\`\`${attribute}`;
}

const tagHugoTeste = tagHugo.replace(regexps.HUGO_HIGHLIGHT, hugoTagsReplacer);

console.log(tagHugoTeste);
  