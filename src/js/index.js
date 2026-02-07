// task 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = " ";
for (const friend of friends) {
  string += friend;
}
console.log(string);

const joinFriends = friends.join(",");
console.log(joinFriends);

// task 2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  " Карточка-5",
];
const cardToRemuve = "Карточка-3";
const newCards = cards.splice(cards.indexOf(cardToRemuve), 1);
console.log(cards);

// task 3
const cardToInset = "Карточка-6";
// cards.push("Карточка-6");
const anotherCards = cards.splice(cards.length, 0, cardToInset);
console.log(cards);

// task 4
const cardToUpdate = "Карточка-4";
const savingIndex = cards.indexOf(cardToUpdate);
const anotherNewCards = cards.splice(savingIndex, 1, "Карточка-9");
console.log(cards);
