import React, {Component} from 'react';
import logo from './logo.svg';
import {Row, Col} from 'reactstrap';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        id: {
          value: ''
        },
        name: {
          value: ''
        },
        address1: {
          value: ''
        },
        address2: {
          value: ''
        },
        suburb: {
          value: ''
        },
        state: {
          value: ''
        },
        country: {
          value: ''
        },
        email: {
          value: ''
        },
        phone: {
          value: ''
        },
        mobile: {
          value: ''
        }
      },

      contacts: [],
      currentContact: {
        id:'',
        name:'',
        address1:'',
        address2:'',
        suburb:'',
        state:'',
        country:'',
        email:'',
        phone:'',
        mobile:''
      },
      dummyContacts: [
        {
          id: 1,
          name:'John Smith',
          address1:'Evergreen Fields 142',
          address2:'a2',
          suburb:'Suburb',
          state:'Springfield',
          country:'AAA',
          email:'jsmith@example.com',
          phone:'1234324',
          mobile:'2342343'
        },
        {
          id: 2,
          name:'Will Smith',
          address1:'Nowhere street 142',
          address2:'a2',
          suburb:'Suburb',
          state:'Your Head',
          country:'BBB',
          email:'ws@example.com',
          phone:'1234324',
          mobile:'2342343'
        }
      ]

    }
  } // End Constructor


  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
  };

  formSubmitHandler = (e) => {
    // ie addContact
    e.preventDefault();

    // ToDo Validate information



    const tempId = this.state.formControls.id.value;


    if (tempId !== '') {
      // if tempId is empty, it means we are trying to update an existing contact
      // so we have to find the index of that contact
      const index = this.state.contacts.findIndex(x => x.id == tempId);
      //console.log(index);

      // get the contacts from state
      const contactsList = [...this.state.contacts];

      // edit the current contact
      contactsList[index] = {
        id:this.state.formControls.id.value,
        name:this.state.formControls.name.value,
        address1:this.state.formControls.address1.value,
        address2:this.state.formControls.address2.value,
        suburb:this.state.formControls.suburb.value,
        state:this.state.formControls.state.value,
        country:this.state.formControls.country.value,
        email:this.state.formControls.email.value,
        phone:this.state.formControls.phone.value,
        mobile:this.state.formControls.mobile.value
      };

      // set the new state with the updated contact information
      this.setState({
        contacts: contactsList
      });

      //console.log(contactsList);

      // if we are creating a new contact
    } else {

      const newContact = {
        id: Date.now(),
        name:this.state.formControls.name.value,
        address1:this.state.formControls.address1.value,
        address2:this.state.formControls.address2.value,
        suburb:this.state.formControls.suburb.value,
        state:this.state.formControls.state.value,
        country:this.state.formControls.country.value,
        email:this.state.formControls.email.value,
        phone:this.state.formControls.phone.value,
        mobile:this.state.formControls.mobile.value
      };
      const newListOfContacts = [...this.state.contacts, newContact];
      this.setState({
        contacts: newListOfContacts
      });
    }

    this.deleteFields();


  };


  myClickEvent = (e) => {
    console.log(this.state.contacts.id);
  };



  getContactIndex = (myId) => {
    const index = this.state.contacts.findIndex(x => x.id === myId);
    //console.log(this.state.contacts.findIndex(x => x.id === myId));
    console.log(this.state.contacts[index].id);

    this.setState({
      formControls: {
        id: {
          value: this.state.contacts[index].id.toString()
        },
        name: {
          value: this.state.contacts[index].name
        },
        address1: {
          value: this.state.contacts[index].address1
        },
        address2: {
          value: this.state.contacts[index].address2
        },
        suburb: {
          value: this.state.contacts[index].suburb
        },
        state: {
          value: this.state.contacts[index].state
        },
        country: {
          value: this.state.contacts[index].country
        },
        email: {
          value: this.state.contacts[index].email
        },
        phone: {
          value: this.state.contacts[index].phone
        },
        mobile: {
          value: this.state.contacts[index].mobile
        }
      }
    });



  };


  showContactDetails = (event) => {
    event.preventDefault();

    console.log(event.target);
    console.log("contact details");


  };

  cancelClick = (e) => {
    e.preventDefault();
    this.deleteFields();
  };


  deleteFields = () => {


    this.setState({
      formControls: {
        id: {
          value: ''
        },
        name: {
          value: ''
        },
        address1: {
          value: ''
        },
        address2: {
          value: ''
        },
        suburb: {
          value: ''
        },
        state: {
          value: ''
        },
        country: {
          value: ''
        },
        email: {
          value: ''
        },
        phone: {
          value: ''
        },
        mobile: {
          value: ''
        }
      }
    });
  };

  render() {
    // console.log(this);

    const contacts = this.state.contacts.map((item) => {

      return (
          <li
              key={item.id}
              onClick={e => this.getContactIndex(item.id)}
          >
                {item.name}
          </li>)
    });

    return (
        <div className="App">
          <header className="bg-dark text-light">Here goes the header</header>


          <Row>
            <Col xs="12" sm="3">
              <h1 onClick={this.myClickEvent}>Contacts</h1>
              <ul>{contacts}</ul>

            </Col>

            <Col xs="12" sm="3">
              <h1> ADD/EDIT/SHOW</h1>
              <form>
                <Row>
                  <Col>
                    <label>Id:</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      name="id"
                      value={this.state.formControls.id.value}
                      onChange={this.changeHandler}
                      id="contactId"
                      disabled="enabled"
                      />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Name:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="name"
                        value={this.state.formControls.name.value}
                        onChange={this.changeHandler}
                        id="contactName"
                        placeholder="Contact Name"
                        />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Address:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="address1"
                        value={this.state.formControls.address1.value}
                        onChange={this.changeHandler}
                        id="address1"
                        placeholder="Contact Address"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Address 2:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="address2"
                        value={this.state.formControls.address2.value}
                        onChange={this.changeHandler}
                        id="address2"
                        placeholder="Contact Address 2"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Suburb:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="suburb"
                        value={this.state.formControls.suburb.value}
                        onChange={this.changeHandler}
                        id="suburb"
                        placeholder="Contact Suburb"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>State:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="state"
                        value={this.state.formControls.state.value}
                        onChange={this.changeHandler}
                        id="state"
                        placeholder="Contact State"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Country:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="country"
                        value={this.state.formControls.country.value}
                        onChange={this.changeHandler}
                        id="country"
                        placeholder="Contact Country"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Email:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="email"
                        value={this.state.formControls.email.value}
                        onChange={this.changeHandler}
                        id="email"
                        placeholder="Contact Email"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Phone:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="phone"
                        value={this.state.formControls.phone.value}
                        onChange={this.changeHandler}
                        id="phone"
                        placeholder="Contact Phone"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Mobile:</label>
                  </Col>
                  <Col>
                    <input
                        type="text"
                        name="mobile"
                        value={this.state.formControls.mobile.value}
                        onChange={this.changeHandler}
                        id="mobile"
                        placeholder="Contact Mobile"/>
                  </Col>
                </Row>

                <Row>
                  <Col>

                  </Col>
                  <Col>
                    <button onClick={this.cancelClick}>Cancel</button>
                    <button onClick={this.formSubmitHandler}>Save</button>
                  </Col>
                </Row>

              </form>
            </Col>

          </Row>

          <footer className="bg-dark text-light">Here goes the footer</footer>
        </div>
    );

  }
}
