$(document).ready(function() {
  function searchMovie(movieName){
    $.ajax({
      type: 'GET',
      url: `https://api.themoviedb.org/3/search/company?api_key=380b0e09e540c1e5680debdf9ad794f3&page=1&query=${movieName}`,
      success: function(data) {

         movies.innerHTML=""
         $.each(data.results, function(i, data){
            console.log('movies::', movies);
            movies.append( data.name )

         })
      }
    })
  }
  document.getElementById('movie-submit-button')
    .addEventListener('click',  function(event){
          console.log('event:', event);
          searchMovie(document.getElementById('movie-search-field').value)
                                  event.preventDefault()
                                })
  })
