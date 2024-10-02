const { Command } =  require("commander");
const program = new Command();


program
  .name("File word counter")
  .version("1.0.0")
  .description("CLI file word counter utility");

program.command('count-words')
  .description("count the number of lines in a text files")
  .argument('<file>', 'file to count')
  .action(function(file){

    const fs = require("fs");
    const path = require("path");

    let filepath = path.join(__dirname, file);
    let text = fs.readFileSync(filepath, "utf-8");
    let count = 0;

    text = text.split(" ");
    count = text.length;

    console.log(`the number of words in the file ${file} is ${count}`);
  });


program.parse();
