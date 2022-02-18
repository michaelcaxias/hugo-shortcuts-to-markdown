const tagHugo = '{{< highlight react >}} ....qualquer coisa aqui {{< /highlight >}}';

const regexes = {
  HUGO_HIGHLIGHT: /{{<\s?highlight\s?(\w+)?\s?>}}/g
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

const tagHugoTeste = tagHugo.replace(regexes.HUGO_HIGHLIGHT, hugoTagsReplacer);

console.log(tagHugoTeste);
  