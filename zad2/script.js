/*var GalleryItem = React.createClass({  //MOVIETITLE MOVIEDESC MOVIEIMAGE
    propTypes: {
      image: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {},
          React.createElement('h2', {}, this.props.image.name),
          React.createElement('img', {src: this.props.image.src})
        )
      )
    },
  });

var element = React.createElement(GalleryItem);
ReactDOM.render(element, document.getElementById('app'));

var kot = {
    name: 'Kotek',
    src: 'http://imgur.com/n8OYCzR.png',
  };
  
  var element = React.createElement(GalleryItem, {image: kot});*/


  //ZADANIE


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

  var Movie = React.createClass ({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
      },

    render: function() {
        return (
          React.createElement('li', {},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(MovieDesc, {desc: this.props.movie.desc}),
          React.createElement(MovieImage, {img: this.props.movie.src})
          )
        )
      },

  });
  var MovieTitle = React.createElement({
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.createElement('h2', {}, this.props.title)
    }
  })
  
  var MovieDesc = React.createElement({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.createElement('p', {}, this.props.desc)
    }
  })
  
  var MovieImage = React.createElement({
    propTypes: {
      img: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.createElement('img', {src: this.props.img})
    }
  })
  
  var element = React.createElement(GalleryItem);
  ReactDOM.render(element, document.getElementById('app'));
  
  
  
  
  
  
  //Z POPRZEDNIEGO ZADANIA
  /*
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
*/