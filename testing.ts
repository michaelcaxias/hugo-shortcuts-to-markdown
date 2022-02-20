import { convertHugoFileToMarkdown } from ".";

const file = "./index.md";
const output = "./output.md";

convertHugoFileToMarkdown(file, output)
  .then(() => console.log(`Conversão de ${file} -> ${output} concluída!`))
