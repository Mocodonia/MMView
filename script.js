const button = document.getElementById('testButton'); //declare the testing thing

button.addEventListener('click', () => {
  alert('MMView is online.');
});

//for viewer.html later to automatically update the name of the place, will have to pull from a JSON file with the image name
document.getElementById("placeName").textContent = currentLocationName;
