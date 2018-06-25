bgColor = prompt('bg-color: ');
fontColor = prompt('font-color: ');
name = prompt('The man youre inspired by is: ');
pic = prompt('pic: ');
text = prompt('text: ');

document.body.style.backgroundColor = bgColor;
console.log(document.querySelector('.page'));
document.querySelector('.page').style.color = fontColor;
document.querySelector('.name').innerHTML = name;
document.querySelector('.shortBio').innerHTML = text;
document.querySelector('.shortBio').className += ' animated';
	