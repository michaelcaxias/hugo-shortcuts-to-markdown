import { convertHugoFileToMarkdown } from "./convertHugoToMarkdown";

export const main = async () => {
  const [, , inputFilePath, outputFilePath] = process.argv;
  if (inputFilePath && typeof inputFilePath === "string") {
    const outputFileName = outputFilePath
      ? outputFilePath
      : inputFilePath.split(".").shift()?.concat("-output.md");
    await convertHugoFileToMarkdown(inputFilePath, outputFileName  ||"./output.md");
  }
};

main();