function splitText(text) {
  const words = text.split(" ");
  const maxLength = 140;
  let fragments = [];
  let currentFragment = "";

  for (let i = 0; i < words.length; i++) {
    if (
      currentFragment.length + words[i].length + fragments.length + 1 <=
      maxLength
    ) {
      currentFragment += words[i] + " ";
    } else {
      fragments.push(currentFragment.trim());
      currentFragment = words[i] + " ";
    }
  }

  if (currentFragment !== "") {
    fragments.push(currentFragment.trim());
  }

  if (fragments.length > 1) {
    for (let i = 0; i < fragments.length; i++) {
      fragments[i] += ` ${i + 1}/${fragments.length}`;
    }
  }

  return fragments;
}

// Проверка
const text1 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit";
const result1 = splitText(text1);
console.log(result1);

const text2 =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl";
const result2 = splitText(text2);
console.log(result2);
