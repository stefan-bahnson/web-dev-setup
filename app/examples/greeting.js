export function renderGreeting (charArray) {
  let delay = 100;
  let greetElement = $('#greeting');

  charArray.map( (char, i) => {
    let charElement = $('<span>').text(char);

    i <= 5 && charElement.addClass('first');

    setTimeout(() => {
      greetElement.append(charElement);
    }, delay);
    delay += 60;
  });
}
