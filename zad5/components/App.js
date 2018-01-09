var contacts = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
    },
    {
      id: 2,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
    },
    {
      id: 3,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
    }
  ];
  
  var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
  };
  
  var App = React.createClass({
    render: function() {
      return (
        <div className={'app'}>
            <ContactForm contact={contactForm}></ContactForm>
            <Contact items={contacts}></Contact>   
        </div>
      );
    }
  });
  //POPRZEDNIE
  /*
  var App = React.createClass({
    render: function() {
      return (
        React.createElement('div', {className: 'app'},
          React.createElement(ContactForm, {contact: contactForm}),
          React.createElement(Contacts, {items: contacts}, {})
        )
      );
    }
  });



/*
  //return (
    <div className={'contactItem'}>
    <img className={'contactImage'} src={'link-do-obrazka.png'}/>
    <p className={'contactLabel'}>
        Imię: {this.props.contact.firstName}
    </p>
    <a href={'mailto:' + this.props.item.email}>
    {this.props.item.email}
    </a>
</div>

return (
        React.createElement('div', {className: 'contactItem'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
          }),
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
*/