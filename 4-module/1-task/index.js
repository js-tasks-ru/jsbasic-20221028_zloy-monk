function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('UL');
  for (let friend of friends) {
    ul.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }
  return ul
}
