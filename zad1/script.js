
var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      photo: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny'
    },
    {
      id: 3,
      title: 'Piekna i Bestia',
      desc: 'Film o królu sawanny'
    },
    {
      id: 4,
      title: 'Coach Carter',
      desc: 'Film o koszykowce'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('image_url', {}, movie.photo)
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));