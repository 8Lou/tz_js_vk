const splitText = (text) => {
  const words = text.split(" ");
  const maxLength = 140;
  let fragments = [];
  let currentFragment = "";

  words.forEach((word) => {
    if (
      currentFragment.length + word.length + fragments.length + 1 <=
      maxLength
    ) {
      currentFragment += word + " ";
    } else {
      fragments.push(currentFragment.trim());
      currentFragment = word + " ";
    }
  });

  if (currentFragment.trim() !== "") {
    fragments.push(currentFragment.trim());
  }

  if (fragments.length > 1) {
    fragments = fragments.map(
      (fragment, index) => `${fragment} ${index + 1}/${fragments.length}`
    );
  }

  return fragments;
};

// Проверка
const text1 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit";
const result1 = splitText(text1);
console.log(result1);

const text2 =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl";
const result2 = splitText(text2);
console.log(result2);
