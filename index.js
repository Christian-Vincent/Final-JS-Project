(function () {
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
window.toTitleCase = toTitleCase;
function handleUserSearch (){
  const inputValue = document.getElementById("search-bar").value;
  const inputValue2 = inputValue.replace(" ", "%20");
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=6e5552cf92372341dd989c6f8d82a257&language=en-US&query=${inputValue2}&page=1&include_adult=false`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(response => {
    renderPosters(response);
  })
  .catch(err => {
    
  });
  const renderPosters = (response) => {
    console.log(response);
    document.getElementById("movies").innerHTML = response.results[0].vote_average;
  }
}
document.getElementById("button").onclick = function() {
  handleUserSearch();
}
})();