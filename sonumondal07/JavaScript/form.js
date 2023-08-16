function correctAlpha() {
  let inputTag = document.getElementsByTagName("input");
  let textarea = document.getElementsByTagName("textarea");

  let regex = / /g;

  let str1 = inputTag[0].value;
  let result1 = str1.replace(regex, "-");
  inputTag[0].value = result1;

  let str4 = textarea[0].value;
  let result4 = str4.replace(regex, "-");
  textarea[0].value = result4;
}
