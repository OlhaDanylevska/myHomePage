var array, images_next;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


array = ['https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/24/cb/5b/24cb5b0c-3563-0d49-10be-54ce67ee7b25/source/256x256bb.jpg', 'https://b.thumbs.redditmedia.com/6qT0Layv6DvETeSGVGNORPzRweGgJZFJ8VJfQJW-xZk.png', 'https://sane-science.org/img/love-nature.jpg'];
let element_picture = document.getElementById('picture');
array.push(array[0]);
element_picture.setAttribute("src", array.shift());


document.getElementById('button_pre').addEventListener('click', (event) => {
  let element_picture2 = document.getElementById('picture');
  array.unshift(array.slice(-1)[0]);
  element_picture2.setAttribute("src", array.pop());

});

document.getElementById('button_next').addEventListener('click', (event) => {
  let element_picture3 = document.getElementById('picture');
  array.push(array[0]);
  element_picture3.setAttribute("src", array.shift());

});
randomMember(images_next);


function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_text = document.getElementById('text');
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('text').value)));

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button1').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text1').value);

  element_list.appendChild(new_li);

});
