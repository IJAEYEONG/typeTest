fetch("https://api.themoviedb.org/3/movie/157336?api_key=10ad75c569818326a7686e6984c4d996&language=ko-KR")
  .then((response) => response.json())
  .then((data) => {
    // 데이터를 처리하고 HTML에 추가
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = `
        <h1>${data.title}</h1>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title} Poster">
        <p>${data.overview}</p>
    `;
  })
  .catch((error) => {
    console.log("데이터를 가져오는 중 오류가 발생했습니다.", error);
  });
