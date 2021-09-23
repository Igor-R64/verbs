function changeVerb(pronoun, verb) {

    const upper = pronoun.toLowerCase();
    const upperVerb = verb.toLowerCase();

    const regexa = /деть$/;
    const regexb = /ти$/;
    const regexc = /ать$/;
    const regexd = /ить$/;

    if (upper === "я" && regexa.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexa, "жу")))
    } else if (upper === "я" && regexb.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexb, "у")))
    } else if (upper === "я" && regexc.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexc, "аю")))
    } else if (upper === "я" && regexd.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexd, "ю")))
    } else if (upper === "ты" && regexa.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexa, "дишь")))
    } else if (upper === "ты" && regexb.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexb, "ёшь")))
    } else if (upper === "ты" && regexc.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexc, "аешь")))
    } else if (upper === "ты" && regexd.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexd, "ишь")))
    } else if (upper === "он" || "она" && regexa.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexa, "дит")))
    } else if (upper === "он" || "она" && regexb.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexb, "ет")))
    } else if (upper === "он" || "она" && regexc.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexc, "ет")))
    } else if (upper === "он" || "она" && regexd.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexd, "ит")))
    } else if (upper === "мы" && regexa.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexa, "дим")))
    } else if (upper === "мы" && regexb.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexb, "ём")))
    } else if (upper === "мы" && regexc.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexc, "ем")))
    } else if (upper === "мы" && regexd.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexd, "им")))
    } else if (upper === "вы" && regexa.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexa, "дите")))
    } else if (upper === "вы" && regexb.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexb, "ёте")))
    } else if (upper === "вы" && regexc.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexc, "ете")))
    } else if (upper === "вы" && regexd.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexd, "те")))
    } else if (upper === "они" && regexa.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexa, "дят")))
    } else if (upper === "они" && regexb.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexb, "ут")))
    } else if (upper === "они" && regexc.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexc, "ют")))
    } else if (upper === "они" && regexd.test(upperVerb)) {
        console.log((upper), (upperVerb.replace(regexd, "ят")))
    }
}

changeVerb("я", "видеть")
changeVerb("я", "идти")
changeVerb("я", "делать")
changeVerb("я", "говорить")

