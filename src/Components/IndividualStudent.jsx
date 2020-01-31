import React, { Component } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import * as api from "../api";
import style from "../CSS/spinner.module.css";
import styles from "../CSS/student.module.css";

import Studentinfo from "./Studentinfo";

export default class IndividualStudent extends Component {
  state = {
    student: {},
    isLoading: true
  };

  addStudent = () => {
    api.getStudent(this.props.id).then(student => {
      this.setState({ student, isLoading: false });
    });
  };

  componentDidMount() {
    this.addStudent();
  }

  render() {
    const { isLoading, student } = this.state;
    if (isLoading) {
      return (
        <div className={style.spinner}>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
      );
    } else {
      return (
        <div className={styles.block}>
          <Card>
            <Card.Header>{student.name}</Card.Header>
            <Card.Body>
              <Card.Title>Block History</Card.Title>
              <div >
                <ul className={styles.text}>
                  {student.blockHistory.map((info, index) => {
                    return <Studentinfo key={index} info={info} />;
                  })}
                </ul>
              </div>
              <Button variant="primary" href="/students" className={styles.button}>
                Go Back
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}
