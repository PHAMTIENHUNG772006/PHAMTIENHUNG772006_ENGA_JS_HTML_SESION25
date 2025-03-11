let upFirstCharecter = (string) => {
    let splitString = string.split(" ");
    let upAndLowerdWord = splitString.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    let joinString = upAndLowerdWord.join(" ");
    console.log(joinString);
}

let strings = "hello WORLD";
upFirstCharecter(strings);