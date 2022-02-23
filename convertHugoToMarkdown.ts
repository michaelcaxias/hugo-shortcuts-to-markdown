import { readFile, writeFile } from "fs/promises";

type langTypesEntries = {
  [key: string]: string,
}

const LANG_TYPES: langTypesEntries = {
  react: "jsx",
};

const REGEXPS = {
  HUGO_HIGHLIGHT: {
    regexp: /{{\s*<\s*highlight\s*(\w+?)?\s?>}}([\s\S]*?){{\s*<\s*\/\s*highlight\s*>\s*}}/g,
    replacer: (_match: string, lang: string = '', content: string) =>
      `\`\`\`${LANG_TYPES[lang] ? LANG_TYPES[lang] : lang }${content}\`\`\``,
  },
  HUGO_VIMEO: {
    regexp: /{{\s*<\s*vm\s*id="(\w+?)"\s*>\s*}}/g,
    replacer: (_match: string, attr: string) =>
      `<iframe src="https://player.vimeo.com/video/${attr}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`,
  },
  HUGO_EXTLINK: {
    regexp: /{{\s*<\s*extlink\s*text="(.+?)"\s*href="(.+?)"\s*>\s*}}/g,
    replacer: (_match: string, text: string, href: string) =>
      `[${text}](${href})`,
  },
  HUGO_FIGURE: {
    regexp: /{{\s*<\s*figure\s+(?:[a-z]+=".*?")*?\s*(?:src="(.*?)")\s*(?:[a-z]+=".*?")*?\s*(?:caption="(.*?)")?\s*(?:[a-z]+=".*"\s*)*>\s*}}/g,
    replacer: (_match: string, src: string, caption: string) => {
      if (!caption) return `![${src.split('/').pop()?.split('.').shift()}](${src})`
      return `|![${caption}](${src})|\n|:--:|\n|${caption}|`;
    }
  },
  HUGO_NEXT_BTN: {
    regexp: /{{\s*<\s*next-btn\s*>\s*}}/g,
    replacer: (_match: string) => '',
  },
  HUGO_YOUTUBE: {
    regexp: /{{\s*<\s*yt\s*id="(.+?)"\s*>\s*}}/g,
    replacer: (_match: string, id: string) =>
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  HUGO_YOUTUBE_PLAYLIST: {
    regexp: /{{\s*<\s*ytp\s*id="(.+?)"\s*>\s*}}/g,
    replacer: (_match: string, id: string) =>
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  HUGO_VERSIONING_YOUR_CODE: {
    regexp: /{{\s*<\s*versioning-your-code\s*>\s*}}/g,
    replacer: (_match: string) => '<!-- importar objeto c9a1c1f5-1761-4749-8125-12b6495abc76 -->',
  },
};

export function replaceHugoWithMarkdown(content: string): string {
  Object.values(REGEXPS).forEach(({regexp, replacer}) => {
    content = content.replace(regexp, replacer);
  });
  return content;
}

export async function convertHugoFileToMarkdown(input: string, output: string) {
  const content = await readFile(input, "utf8");
  const result = replaceHugoWithMarkdown(content);
  await writeFile(output, result);
}
