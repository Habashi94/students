import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";


export default class StudentForm extends Component {
  state = {
    studentName: null,
    studentCohort: null
  };
  handlingStudentName = event => {
    this.setState({ studentName: event.target.value });
  };
  handlingStudentCohort = event => {
    this.setState({ studentCohort: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formStudentName">
            <Form.Label>Student name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Student name"
              onChange={this.handlingStudentName}
            />
          </Form.Group>
          <Form.Group controlId="formCohort">
            <Form.Label>Starting Cohort</Form.Label>
            <Form.Control
              type="cohort"
              placeholder="Enter the cohort"
              onChange={this.handlingStudentCohort}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
