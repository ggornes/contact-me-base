import React, {Component} from 'react';
import logo from './logo.svg';
import {Row, Col} from 'reactstrap';
// inserted comment

/*
const dummyContacts = [
  {
    key:'001',
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
    key:'002',
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
];*/

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  /*
  addContact = (event) => {
    event.preventDefault();
    const newContact = this.state.currentContact;
    // ToDo: validate contact information
    const newListOfContacts = [this.state.contacts,...,newContact];
    this.setState({
      contacts: newListOfContacts,
      currentContact: {key:'', name:'', address1:'', address2:'', suburb:'', state:'', country:'',
        email:'', phone:'', mobile:''}
    })
  };
  */

  myClickEvent = (event) => {
    console.log(this);
  };

  showContactDetails = (event) => {
    event.preventDefault();

    console.log(event.target);
    console.log("contact details");


  };


  addContact = (event) => {
    event.preventDefault();
    // ToDo validations
    const newContact = {
      id: Date.now(),
      name:document.getElementById("contactName").value,
      address1:document.getElementById("address1").value,
      address2:document.getElementById("address2").value,
      suburb:document.getElementById("suburb").value,
      state:document.getElementById("state").value,
      country:document.getElementById("country").value,
      email:document.getElementById("email").value,
      phone:document.getElementById("phone").value,
      mobile:document.getElementById("mobile").value
    };

    console.log(newContact);

    const contacts =[...this.state.contacts, newContact];
    this.setState({
      contacts: contacts
    });
    // const contactText = event.target.value;
    // console.log(this.state.contacts);

    this.deleteFields();


  };

  deleteFields = () => {
    document.getElementById("contactName").value="";
    document.getElementById("address1").value="";
    document.getElementById("address2").value="";
    document.getElementById("suburb").value="";
    document.getElementById("state").value="";
    document.getElementById("country").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("mobile").value="";
  };

  render() {
    // console.log(this);

    const contacts = this.state.contacts.map(function(item){

      return (
          <li
              key={item.id}
              onClick={console.log(item.id)}
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
                    <label>Name:</label>
                  </Col>
                  <Col>
                    <input
                        id="contactName"
                        type="text"
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
                        id="address1"
                        type="text"
                        placeholder="Contact Address"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Address 2:</label>
                  </Col>
                  <Col>
                    <input
                        id="address2"
                        type="text"
                        placeholder="Contact Address 2"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Suburb:</label>
                  </Col>
                  <Col>
                    <input
                        id="suburb"
                        type="text"
                        placeholder="Contact Suburb"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>State:</label>
                  </Col>
                  <Col>
                    <input
                        id="state"
                        type="text"
                        placeholder="Contact State"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Country:</label>
                  </Col>
                  <Col>
                    <input
                        id="country"
                        type="text"
                        placeholder="Contact Country"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Email:</label>
                  </Col>
                  <Col>
                    <input
                        id="email"
                        type="text"
                        placeholder="Contact Email"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Phone:</label>
                  </Col>
                  <Col>
                    <input
                        id="phone"
                        type="text"
                        placeholder="Contact Phone"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label>Mobile:</label>
                  </Col>
                  <Col>
                    <input
                        id="mobile"
                        type="text"
                        placeholder="Contact Mobile"/>
                  </Col>
                </Row>

                <Row>
                  <Col>

                  </Col>
                  <Col>
                    <button>Cancel</button>
                    <button onClick={this.addContact}>Save</button>
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
