function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    console.log("Hello")
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(name)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}


// function introductionWithLanguageOptional(name, language) {
//     language = "JavaScript"
//     return `Hi, my name is ${name} and I am learning to program in ${language}.`
// }
