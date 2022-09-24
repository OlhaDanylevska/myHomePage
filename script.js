var images, text;


images = ['https://www.allaboutbirds.org/guide/assets/photo/308074031-480px.jpg', 'https://www.allaboutbirds.org/guide/assets/photo/66035101-480px.jpg', 'https://biologydictionary.net/wp-content/uploads/2020/08/european-turtle-dove-1.jpg'];
text = ['Rock doves have a wide range of shades, but darker colours usually dominate their feathers. They are known as persistent pests in buildings in urban areas once their number grows.', 'Collared doves have pale pink and brown colours and a unique black collar on their neck. They also have slightly red feet and distinctive red eyes. They usually live alone, but it is not unusual to see them gathered in larger numbers.', 'The turtle dove has a unique size. It is smaller and also a little bit darker compared to the collared dove, but it is a little bit larger compared to blackbirds. The black and chestnut colour and pattern found on the wings make them easily recognisable. In recent times, the number of turtle doves has dropped.'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_space = document.getElementById('space');
  element_space.replaceChildren();
  let new_img = document.createElement('img');
  new_img.setAttribute("src", images.shift());

  element_space.appendChild(new_img);
  let new_div = document.createElement('div');
  new_div.innerText = text.shift();

  element_space.appendChild(new_div);

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
