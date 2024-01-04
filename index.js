function makeAPICall() {
    let searchParam = document.getElementById("searchBar").value;
    let API_KEY = 'e7962e4';
  
    // get the data
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}`)
      .then(function (res) {
        return res.json()
      })
      .then(function (res) {
        console.log(res.Search);
        displayData(res.Search)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  function displayData(moviesList) {
    let container = document.getElementById('container');
    container.innerHTML = ""
  
    if (!moviesList || moviesList.length === 0) {
      let notFoundDiv = document.createElement("div")
      notFoundDiv.className = "abc"
      notFoundDiv.textContent = "No Results Found"
      container.appendChild(notFoundDiv)
    } else {
      moviesList.map((movie) => {
        let movieCard = document.createElement("div")
        movieCard.className = "cart";
  
        // Create Image
        let posterElement = document.createElement("img")
        posterElement.src = movie.Poster;
        posterElement.style.width = "97%";
  
        // Create Title
        let titleElement = document.createElement("p")
        titleElement.textContent = "Title : " + movie.Title;
  
        // Create Year
        let yearElement = document.createElement("p")
        yearElement.textContent = "Year : " + movie.Year;
  
        // Create IMDB ID;
        let idElement = document.createElement("p")
        idElement.textContent = "IMDB-ID : " + movie.imdbID;
  
        // Create Type
        let typeElement = document.createElement("p")
        typeElement.textContent = "Type : " + movie.Type;
  
        movieCard.append(
          posterElement,
          titleElement,
          yearElement,
          idElement,
          typeElement
        )
        container.append(movieCard)
      })
    }
  }

    let timerId;
    function debounce(callback,delay){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(function(){
            callback();
        },delay)
    }