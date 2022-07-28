const eng = ["area", "arrive", "hello", "halo", "help", "okay", ];
const it = ["ciao", "buonasera", "arrivederci"];
const langs = [eng, it];

document.addEventListener('DOMContentLoaded', function() {
  const inp = document.querySelector("#multi-lang-autocomplete");
  inp.addEventListener('keyup', onKeyUpHandler);
});

// compare value of input against all words in a list
export const matches = (inputString, ls) => ls.filter(word => word.startsWith(inputString));
export const checkAllLanguages = (languagesList, inputString) => languagesList.map(lang => matches(inputString, lang ));

function onKeyUpHandler(e) {
	console.log(checkAllLanguages(langs, e.target.value));
}