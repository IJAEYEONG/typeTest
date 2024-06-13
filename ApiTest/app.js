const http = require('https');

const options = {
  method: 'GET',
  hostname: 'api.themoviedb.org',
  port: null,
  path: '/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=10&sort_by=popularity.desc',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGFkNzVjNTY5ODE4MzI2YTc2ODZlNjk4NGM0ZDk5NiIsInN1YiI6IjY1MzA2YzdlYTZhNGMxMDEwYzhhOWZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPXgu9F1MMBqf1cESbmLViRplDATe3JiYt9nZhVDqsQ'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
