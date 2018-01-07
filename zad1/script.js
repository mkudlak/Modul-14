
var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      src: 'harry.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      src: 'krollew.jpg'
    },
    {
      id: 3,
      title: 'Piekna i Bestia',
      desc: 'Film o królu sawanny',
      src: 'pieknaibestia.jpg'
    },
    {
      id: 4,
      title: 'Coach Carter',
      desc: 'Film o koszykowce',
      src: 'coachcarter.jpg'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.src})
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));