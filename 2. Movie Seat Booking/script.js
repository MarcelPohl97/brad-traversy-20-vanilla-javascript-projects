const container = document.querySelector('.seat-container');

container.addEventListener('click', e => {
    if (
      e.target.classList.contains('seat') &&
      !e.target.classList.contains('taken')
    ) {
      e.target.classList.toggle('selection');
      update_selected_seats();
    }
  });

  let update_selected_seats = () => {
    const seats_counter = document.querySelectorAll(".selection");
    const selected_seats = document.getElementById("seat-counter");
    selected_seats.innerHTML = seats_counter.length;
  }

const movie_searcher_form = document.getElementById("movie-searcher-form")
const movie_searcher_form_animator = document.getElementById("movie-search-animate")

movie_searcher_form_animator.addEventListener('click', () => {
  movie_searcher_form.classList.toggle("movie-animate-form");

})

//Animate function
  const animate_form = () => {
    const movie_form = document.getElementById("movie-searcher");
    movie_form.style.width = "100vw";
    movie_form.style.height = "100vh";
    movie_form.style.borderTopRightRadius = "0%";
    movie_form.style.borderBottomRightRadius = "0%";
    movie_form.h1.style.opacity = "0";
  }

  let fetch_url = "http://www.omdbapi.com/?apikey=75046c65&t=riverdale"