function init(){
  var input = document.getElementById('entryinput');
  var results = document.getElementById('textoutput');
  var button = document.GetElementById('entrybutton');
  button.addEventListener('click', function(){
	results.innerHTML = input.value;
	alert("Sean Reimer: " + input.value);
  });
}
window.addEventListener('load', init);