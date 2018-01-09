var Contacts = React.createClass({
    propTypes: {
      items: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      var contacts = this.props.items.map(function(contact) {
        return (
            <Contact items={contact} key={contact.id}></Contact>
        )

      });
  
        return (
            <ul className={contactsList}>Contacts</ul>
        )
    }
  });

//POPRZEDNIE
/*
    render: function() {
      var contacts = this.props.items.map(function(contact) {
          return React.createElement(Contact, {item: contact, key: contact.id});
      });
  
      return (
        React.createElement('ul', {className: 'contactsList'}, contacts)
      );
    }
  
*/


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