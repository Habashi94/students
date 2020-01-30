import React, { Component } from "react";
import * as api from "../api";
import StudentCard from "./StudentCard";
import styles from "../CSS/card.module.css";
import StudentForm from "./Form";

export default class StudentList extends Component {
  state = {
    students: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchStudents().then(results => {
      this.setState({ students: results, isLoading: false });
    });
  }

  addStudent = newStudent => {
    this.setState(currentState => {
      return { students: [newStudent, ...currentState.students] };
    });
  };

  render() {
    return (
      <div>
        <StudentForm addStudent={this.addStudent} />
        <ul className={styles.card}>
          {this.state.students.map(student => {
            return <StudentCard student={student} key={student._id} />;
          })}
        </ul>
      </div>
    );
  }
}
