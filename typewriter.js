const sentence = "hello there from lighthouse labs";
const stdOut = process.stdout;

const sentLen = sentence.length;

const printLettersStartingAtIndex = function(i) {
  setTimeout(() => {
    stdOut.write(sentence[i]);
    if(i + 1 < sentLen) {
      printLettersStartingAtIndex(i + 1);
    };
    if (i === sentLen - 1) {
      stdOut.write("\n");
    }
  }, 50)
}

const typeSentence = function() {
  printLettersStartingAtIndex(0);
}

typeSentence()






