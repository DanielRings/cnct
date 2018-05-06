import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, ButtonGroup, ToggleButtonGroup, Button, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import logo from './cork.png';
import avatar from './keyes.png';
import './App.css';
import { API_KEY, SESSION_ID, TOKEN } from "./config.js"

export class Book extends Component {
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
                <p>10:00 am - 11:00 am</p>
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
                <p>10:00 am - 11:00 am</p>
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
                <p>10:00 am - 11:00 am</p>
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
                    bsStyle="default"
                    bsSize="large">
                    <Link to="/" class="App-link-default">Check in</Link>
                  </Button>
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
              <div class="col-md-12">
                <OTSession apiKey={API_KEY} sessionId={SESSION_ID} token={TOKEN}>
                  <OTPublisher />
                  <OTStreams>
                    <OTSubscriber />
                  </OTStreams>
                </OTSession>
              </div>
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
                      <Link to="/book">
                        <Button
                          className="App-calendar-button"
                          bsStyle="primary"
                          bsSize="large"
                          target="_blank"
                          data-toggle="modal" data-target="#book">
                          9:00 am
                        </Button>
                      </Link>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        9:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        9:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        10:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        10:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        11:00 am
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        11:00 am
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        1:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        1:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        2:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        2:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        3:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        3:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        4:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        4:00 pm
                      </Button>
                    </div>
                  </div>
                  <div class="row App-calendar-row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
                        5:00 pm
                      </Button>
                    </div>
                    <div class="col-md-2">
                      <Button
                        className="App-calendar-button"
                        bsStyle="primary"
                        bsSize="large"
                        disabled="disabled"
                        href="#"
                        target="_blank"
                        data-toggle="modal" data-target="#book">
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
