import React, { Component } from "react";
import * as api from "../api";
import StudentCard from "./StudentCard";
import styles from "../CSS/card.module.css";
import StudentForm from "./Form";
import { Spinner } from "react-bootstrap";
import style from "../CSS/spinner.module.css";
import styling from "../CSS/form.module.css";
import Sort from "./Sort";

export default class StudentList extends Component {
  state = {
    students: [],
    isLoading: true,
    dummyStudents: []
  };

  getStudents = block => {
    api.fetchStudents(block).then(results => {
      this.setState({ students: results, isLoading: false });
    });
  };

  componentDidMount() {
    this.getStudents();
  }

  addStudent = newStudent => {
    this.setState(currentState => {
      return { students: [newStudent, ...currentState.students] };
    });
  };

  handlingDelete = student => {
    const { students } = this.state;

    api.deleteStudent(student);
    const newStudents = students.filter(
      newestStudent => newestStudent._id !== student
    );
    this.setState({ students: newStudents });
  };

  ascendingOrder = () => {
    const { students } = this.state;
    const orderStudents = students.sort((a, b) => {
      return a.startingCohort - b.startingCohort;
    });
    this.setState({ students: orderStudents });
  };

  descendingOrder = () => {
    const { students } = this.state;
    const orderStudents = students.sort((a, b) => {
      return b.startingCohort - a.startingCohort;
    });
    this.setState({ students: orderStudents });
  };

  // filterByBlock = block => {
  //   const { students } = this.state;

  //   const filterStudents = students.filter(
  //     student => student.currentBlock === block
  //   );
  //   this.setState({ students: filterStudents });
  // };

  render() {
    if (this.state.isLoading) {
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
    }
    return (
      <div>
        {" "}
        <div className={styling.container}>
          <StudentForm addStudent={this.addStudent} />{" "}
          <Sort
            ascendingOrder={this.ascendingOrder}
            descendingOrder={this.descendingOrder}
            filterByBlock={this.getStudents}
            // getStudents={this.getStudents}
          />
        </div>
        <ul className={styles.card}>
          {this.state.students.map(student => {
            return (
              <StudentCard
                student={student}
                key={student._id}
                handlingDelete={this.handlingDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
