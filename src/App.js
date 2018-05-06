import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, ButtonGroup, ToggleButtonGroup, Button, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import logo from './cork.png';
import avatar from './ProfileTherapist.png';
import patientavatar from './person2.png';
import './App.css';
import { API_KEY, SESSION_ID, TOKEN } from "./config.js"

export class Book extends Component {
  bookAppt() {
    var url = "https://api.athenahealth.com/preview1/195900/appointments/965454?appointmenttypeid=522&ignoreschedulablepermission=true&patientid=32798"
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Authorization', 'Bearer 5w5pzg4naaqnwxmfkhazys7t');
    xhr.setRequestHeader('X-Originating-Ip', '69.162.16.16');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === "200") {
        console.table(users);
      } else {
        console.error(users);
      }
    }
    xhr.send();
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <img alt="cork" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="App-jumbotron">
          <Grid>
            <div class="row">
              <div class="col-md-12">
                <img src={avatar} className="App-avatar-large" alt="avatar" />
                <h4 className="App-center">Miranda Keyes, PhD</h4>
                <h4 className="App-center">(310) 117-2052</h4>
                <hr/>
              </div>
              <div class="col-md-3"/>
              <div class="col-md-3">
                <p>Thursday, 10 May 2018</p>
                <p>4:00 pm - 5:00 pm</p>
              </div>
              <div class="col-md-3">
                <p class="App-right">
                3234 Rodeo Drive<br/>
                Suite B<br/>
                Santa Monica, CA</p>
              </div>
              <div class="col-md-3"/>
            </div>
            <div class="row App-calendar-row">
              <div class="col-md-4"/>
              <div class="col-md-4">
                <ButtonGroup vertical className="App-question-button" data-toggle="buttons">
                  <Button
                    to="/"
                    bsStyle="default"
                    bsSize="large">
                    <Link to="/" class="App-link-default">Go back</Link>
                  </Button>
                  <Button
                    onClick={this.bookAppt.bind(this)}
                    bsStyle="primary"
                    bsSize="large">
                    <Link to="/engage" class="App-link-primary">Book it!</Link>
                  </Button>
                </ButtonGroup>
              </div>
              <div class="col-md-4"/>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export class Engage extends Component {
  cancelAppt() {
    var url = "https://api.athenahealth.com/preview1/195900/appointments/965452/cancel?ignoreschedulablepermission=true&patientid=32798"
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Authorization', 'Bearer 5w5pzg4naaqnwxmfkhazys7t');
    xhr.setRequestHeader('X-Originating-Ip', '69.162.16.16');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === "200") {
        console.table(users);
      } else {
        console.error(users);
      }
    }
    xhr.send();
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <img alt="cork" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="App-jumbotron">
          <Grid>
            <div class="row">
              <div class="col-md-12">
                <img src={avatar} className="App-avatar-large" alt="avatar" />
                <h4 className="App-center">Miranda Keyes, PhD</h4>
                <h4 className="App-center">(310) 117-2052</h4>
                <hr/>
              </div>
              <div class="col-md-3"/>
              <div class="col-md-3">
                <p>Thursday, 10 May 2018</p>
                <p>4:00 pm - 5:00 pm</p>
              </div>
              <div class="col-md-3">
                <p class="App-right">
                3234 Rodeo Drive<br/>
                Suite B<br/>
                Santa Monica, CA</p>
              </div>
              <div class="col-md-3"/>
            </div>
            <div class="row App-calendar-row">
              <div class="col-md-3"/>
              <div class="col-md-6">
                <p class="App-center">Over the last two weeks, how often have you felt down, depressed, or hopeless?</p>
              </div>
              <div class="col-md-3"/>
            </div>
            <div class="row">
              <div class="col-md-4"/>
              <div class="col-md-4">
                <ToggleButtonGroup type="checkbox" vertical className="App-question-button" data-toggle="buttons">
                  <ToggleButton
                    value={1}
                    bsStyle="success"
                    bsSize="large">
                    Not at all
                  </ToggleButton>
                  <ToggleButton
                    value={2}
                    bsStyle="info"
                    bsSize="large">
                    Several days
                  </ToggleButton>
                  <ToggleButton
                    value={3}
                    bsStyle="warning"
                    bsSize="large">
                    More than half of the days
                  </ToggleButton>
                  <ToggleButton
                    value={4}
                    bsStyle="danger"
                    bsSize="large">
                    Nearly every day
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div class="col-md-4"/>
            </div>
            <div class="row App-calendar-row">
              <div class="col-md-4"/>
              <div class="col-md-4">
                <p class="App-center">Are you still planning to come?</p>
              </div>
              <div class="col-md-4"/>
            </div>
            <div class="row">
              <div class="col-md-4"/>
              <div class="col-md-4">
                <ButtonGroup vertical className="App-question-button" data-toggle="buttons">
                  <Button
                    onClick={this.cancelAppt.bind(this)}
                    bsStyle="default"
                    bsSize="large">
                    <Link to="/" class="App-link-default">I have to cancel :(</Link>
                  </Button>
                  <Button
                    bsStyle="primary"
                    bsSize="large">
                    <Link to="/" class="App-link-primary">Of course!</Link>
                  </Button>
                </ButtonGroup>
              </div>
              <div class="col-md-4"/>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export class Appointment extends Component {
  checkIn() {
    var url = "https://api.athenahealth.com/preview1/195900/appointments/965455/startcheckin"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Authorization', 'Bearer 5w5pzg4naaqnwxmfkhazys7t');
    xhr.setRequestHeader('X-Originating-Ip', '69.162.16.16');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === "200") {
        console.table(users);
      } else {
        console.error(users);
      }
    }
    xhr.send();
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <img alt="cork" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="App-jumbotron">
          <Grid>
            <div class="row">
              <div class="col-md-12">
                <img src={avatar} className="App-avatar-large" alt="avatar" />
                <h4 className="App-center">Miranda Keyes, PhD</h4>
                <h4 className="App-center">(310) 117-2052</h4>
                <hr/>
              </div>
              <div class="col-md-3"/>
              <div class="col-md-3">
                <p>Thursday, 10 May 2018</p>
                <p>11:00 am - 12:00 pm</p>
              </div>
              <div class="col-md-3">
                <p class="App-right">
                3234 Rodeo Drive<br/>
                Suite B<br/>
                Santa Monica, CA</p>
              </div>
              <div class="col-md-3"/>
            </div>
            <div class="row">
              <div class="col-md-4"/>
              <div class="col-md-4">
                <ButtonGroup vertical className="App-question-button" data-toggle="buttons">
                  <Button
                    onClick={this.checkIn.bind(this)}
                    bsStyle="default"
                    bsSize="large">
                    <Link to="/" class="App-link-default">Check in</Link>
                  </Button>
                  <Button
                    onClick={this.checkIn.bind(this)}
                    bsStyle="primary"
                    bsSize="large">
                    <Link to="/telemedicine" class="App-link-primary">Engage teletherapy</Link>
                  </Button>
                </ButtonGroup>
              </div>
              <div class="col-md-4"/>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export class DrAppointment extends Component {

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <img alt="cork" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="App-jumbotron">
          <Grid>
            <div class="row">
              <div class="col-md-12">
                <img src={patientavatar} className="App-avatar-large" alt="avatar" />
                <h4 className="App-center">Cassandra Jones</h4>
                <h4 className="App-center">(313) 142-8873</h4>
                <hr/>
              </div>
              <div class="col-md-4"/>
              <div class="col-md-4 App-center">
                <p>Thursday, 10 May 2018</p>
                <p>11:00 am - 12:00 pm</p>
              </div>
              <div class="col-md-4"/>
            </div>
            <div class="row">
              <div class="col-md-4"/>
              <div class="col-md-4">
                <ButtonGroup vertical className="App-question-button" data-toggle="buttons">
                  <Button
                    bsStyle="primary"
                    bsSize="large">
                    <Link to="/telemedicine" class="App-link-primary">Engage teletherapy</Link>
                  </Button>
                </ButtonGroup>
              </div>
              <div class="col-md-4"/>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export class Telemedicine extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <img alt="cork" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="App-jumbotron">
          <Grid>
            <div class="row App-calendar-row">
              <div class="col-md-3"/>
              <div class="col-md-6">
                <OTSession apiKey={API_KEY} sessionId={SESSION_ID} token={TOKEN}>
                  <OTPublisher properties={{width: "500px", height: "500px"}} />
                  <OTStreams>
                    <OTSubscriber properties={{width: "200px", height: "200px"}}/>
                  </OTStreams>
                </OTSession>
              </div>
              <div class="col-md-3"/>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <img alt="cork" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="App-jumbotron">
          <Grid>
            <div class="row App-calendar-row">
              <div class="col-md-2">
                <img src={avatar} className="App-avatar" alt="avatar" />
                <h4 className="App-center">Miranda Keyes, PhD</h4>
                <hr/>
                <p>Clinical Psychologist</p>
                <p>(310) 117-2052</p>
                <hr/>
                <p>"I work with all members of birth or adoptive families at any stage of life."</p>
              </div>
              <div class="col-md-10">
                <Grid>
                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10"><h3 className="App-center">May 7th - May 11th</h3></div>
                  </div>
                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2"><h3 className="App-center">Monday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Tuesday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Wednesday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Thursday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Friday</h3></div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Link to="/appointment">
                        <Button
                          className="App-calendar-button"
                          bsStyle="success"
                          bsSize="large"
                          target="_blank"
                          data-toggle="modal" data-target="#book">
                          11:00 am
                        </Button>
                      </Link>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Link to="/book">
                        <Button
                          className="App-calendar-button"
                          bsStyle="primary"
                          bsSize="large"
                          target="_blank"
                          data-toggle="modal" data-target="#book">
                          4:00 pm
                        </Button>
                      </Link>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="info"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
            <div class="row App-user-info">
              <div class="col-md-2"/>
              <div class="col-md-4">
                <h3 className="App-center">Cassandra Jones</h3>
              </div>
              <div class="col-md-4">
                <div class="progress">
                  <div class="progress-bar progress-bar-success App-progress-bar massive-font"
                    role="progressbar"
                    aria-valuenow="4"
                    aria-valuemin="0"
                    aria-valuemax="6">
                    4 of 6
                  </div>
                </div>
              </div>
              <div class="col-md-2"/>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}


export class Doctor extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <img alt="cork" src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="App-jumbotron">
          <Grid>
            <div class="row App-calendar-row">
              <div class="col-md-2">
                <img src={avatar} className="App-avatar" alt="avatar" />
                <h4 className="App-center">Miranda Keyes, PhD</h4>
                <hr/>
                <p>Clinical Psychologist</p>
                <p>(310) 117-2052</p>
                <hr/>
                <p>"I work with all members of birth or adoptive families at any stage of life."</p>
              </div>
              <div class="col-md-10">
                <Grid>
                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10"><h3 className="App-center">May 7th - May 11th</h3></div>
                  </div>
                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2"><h3 className="App-center">Monday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Tuesday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Wednesday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Thursday</h3></div>
                    <div class="col-md-2"><h3 className="App-center">Friday</h3></div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        9:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        10:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Link to="/drappointment">
                        <Button
                          className="App-calendar-button"
                          bsStyle="success"
                          bsSize="large"
                          target="_blank"
                          data-toggle="modal" data-target="#book">
                          11:00 am
                        </Button>
                      </Link>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        11:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        1:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        2:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        3:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Link to="/book">
                        <Button
                          className="App-calendar-button"
                          bsStyle="primary"
                          bsSize="large"
                          target="_blank"
                          data-toggle="modal" data-target="#book">
                          4:00 pm
                        </Button>
                      </Link>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        4:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="success"
                        bsSize="large"
                        href="#"
                        target="_blank">
                        5:00 pm
                      </Button>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
            <div class="row App-user-info">
              <div class="col-md-2"/>
              <div class="col-md-4">
                <h3 className="App-center">Cassandra Jones</h3>
              </div>
              <div class="col-md-4">
                <div class="progress">
                  <div class="progress-bar progress-bar-success App-progress-bar massive-font"
                    role="progressbar"
                    aria-valuenow="4"
                    aria-valuemin="0"
                    aria-valuemax="6">
                    4 of 6
                  </div>
                </div>
              </div>
              <div class="col-md-2"/>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
