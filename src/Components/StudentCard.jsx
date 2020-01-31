// import React from "react";
import { Card, Button, Popover, OverlayTrigger } from "react-bootstrap";
import styles from "../CSS/card.module.css";
import React, { Component } from "react";

export default class StudentCard extends Component {
  state = {
    toggle: true
  };

  handleClick = () => {
    this.setState(currentState => {
      return { toggle: !currentState.toggle };
    });
  };

  popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
      <Button
        variant="danger"
        onClick={() => {
          this.props.handlingDelete(this.props.student._id);
        }}
      >
        Yes
      </Button>
      <Button variant="primary" onClick={this.handleClick}>
        No
      </Button>
    </Popover>
  );

  DeleteButtonOn = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={this.popover}>
      <Button variant="danger">Delete</Button>
    </OverlayTrigger>
  );
  DeleteButtonOff = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={this.popover}>
      <Button variant="danger">Delete</Button>
    </OverlayTrigger>
  );
  render() {
    const { student } = this.props;
    const { toggle } = this.state;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{student.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Student information
            </Card.Subtitle>
            <Card.Text>Cohort: {student.startingCohort}</Card.Text>
            <Card.Text>Current Block: {student.currentBlock}</Card.Text>
            <div className={styles.button}>
              <Button variant="primary" href={`/students/${student._id}`}>
                View
              </Button>
              {toggle ? <this.DeleteButtonOn /> : <this.DeleteButtonOff />}
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
