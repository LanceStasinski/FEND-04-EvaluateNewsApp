//capitalize first letter and lowercase the rest function found posted by
//gurvinder372 at https://stackoverflow.com/questions/36996698/how-do-i-lowercase-any-string-then-capitalize-only-the-first-letter-of-the-word
//This function is used in the constructEntry function to make the results
//from the api more pleasent to read.

function capitalFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export {capitalFirstLetter}