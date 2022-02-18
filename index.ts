type langTypesEntries = {
  [key: string]: string,
}

const LANG_TYPES: langTypesEntries = {
  react: "jsx",
};

const REGEXPS = {
  HUGO_HIGHLIGHT: {
    regexp: /{{<\s*highlight\s*(\w+)?\s?>}}([\s\S]*){{<\s*\/highlight\s*>}}/g,
    replacer: (_match: string, lang: string = '', content: string) =>
      `\`\`\`${LANG_TYPES[lang] ? LANG_TYPES[lang] : lang }${content}\`\`\``,
  },
  HUGO_VIMEO: {
    regexp: /{{<\s*vm\s*id="(\w+)"\s*>}}/g,
    replacer: (_match: string, attr: string) =>
      `<iframe src="https://player.vimeo.com/video/${attr}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`,
  },
  HUGO_EXTLINK: {
    regexp: /{{<\s*extlink\s*text="(.+)"\s*href="(.+)"\s*>}}/g,
    replacer: (_match: string, text: string, href: string) =>
      `[${text}](${href})`,
  },
};

export default function replaceHugoWithMarkdown(content: string): string {
  Object.values(REGEXPS).forEach(({regexp, replacer}) => {
    content = content.replace(regexp, replacer);
  });
  return content;
}
