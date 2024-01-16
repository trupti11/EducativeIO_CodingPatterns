    const parseFile = "coding_qual_input.txt";
    const fs = require('fs');


    async function decode(message_file) {
        let dictionary = {} 
        let allFileContents = fs.readFileSync(parseFile, 'utf-8');
        allFileContents.split('\n').forEach(line =>  {
            line = line.trim().replace(/  +/g, ' ');
            let lineArr = line.split(' ');
            dictionary[lineArr[0]] = lineArr[1]
        });

        let output = "", arrSize = 1

        allFileContents = fs.readFileSync(message_file, 'utf-8');
            allFileContents.split('\n').forEach(line =>  {
                line = line.trim().replace(/  +/g, ' ');
                let lineArr = line.split(' ');
                output += dictionary[lineArr[arrSize - 1]] + " "
                arrSize++;
            });

        return output
    }

    async function main() {
        let messageFile = "encoded_file.txt"

        let output = await decode(messageFile)
        console.log(output);
    }

    main();