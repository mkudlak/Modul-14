//Zadanie: Wydzielamy komponenty! 
/*
Teraz Twoim zadaniem będzie podzielenie kodu, który napisaliśmy wcześniej na jak najmniejsze komponenty.

Najpierw stwórz klasę Movie za pomocą var Movie = React.createClass({...});. 

Następnie dodaj do niej metodę .render() i przenieś do niej odpowiedni fragment kodu obsługujący
 wyświetlanie informacji na temat filmu.

 Po napisaniu metody .render() dokonaj walidacji propsów komponentu dodając parametr propTypes. Następnie 
stwórz instancję (ReactElement) na podstawie klasy Movie za pomocą 
React.createElement(Movie, {key: movie_id, ...więcej_propsow},);

Pamiętaj, żeby wyciągnąć klucz z elementu li na wysokość deklaracji elementu Movie (tak jak powyżej).
Kroki od od 1 do 3 należy wykonać również dla klas: MovieTitle, MovieDescription, MoviesList :)*/
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
 //TWORZENIE KLASY MOVIE
  var Movie = React.createClass ({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
      },

    render: function() {
        return (
          React.createElement('li', {},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(MovieDesc, {desc: this.props.movie.desc}),
          React.createElement(MovieImage, {img: this.props.movie.src}),
          )
        )
      },

  });


//Walidacji propsów komponentu dodając parametr propTypes.
  var MovieTitle = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.createElement('h2', {}, this.props.title)
    }
  })
  
  var MovieDesc = React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.createElement('p', {}, this.props.desc)
    }
  })
  
  var MovieImage = React.createClass({
    propTypes: {
      img: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.createElement('img', {src: this.props.img})
    }
  })

  
  var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {movie: movie});
  });
  
  var element = React.createElement('ol', {}, moviesElements);
  
  ReactDOM.render(element, document.getElementById('app'));
  
  
  
  
