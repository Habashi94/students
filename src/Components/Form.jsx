import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import * as api from "../api";

export default class StudentForm extends Component {
  state = {
    name: "",
    startingCohort: ""
  };

  handlingChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, startingCohort } = this.state;
    console.log(name, startingCohort);
    api.postStudent({ name, startingCohort }).then(student => {
      this.props.addStudent(student);
      this.setState({ name: "", startingCohort: "" });
    });
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
              onChange={this.handlingChange}
              name="name"
              value={this.state.name}
              size="sm"
            />
          </Form.Group>
          <Form.Group controlId="formCohort">
            <Form.Label>Starting Cohort</Form.Label>
            <Form.Control
              type="cohort"
              placeholder="Enter the cohort"
              onChange={this.handlingChange}
              name="startingCohort"
              value={this.state.startingCohort}
              size="sm"
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
