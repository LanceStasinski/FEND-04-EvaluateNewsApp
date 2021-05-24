//capitalize first letter and lowercase the rest function modified from post by
//gurvinder372 at https://stackoverflow.com/questions/36996698/how-do-i-lowercase-any-string-then-capitalize-only-the-first-letter-of-the-word
//This function is used in the constructEntry function to make the results
//from the api more pleasent to read.

function capitalFirstLetter (string) {
  const upper = string.charAt(0).toUpperCase();
  const lower = string.slice(1).toLowerCase();
  return upper + lower;
}

export {capitalFirstLetter}