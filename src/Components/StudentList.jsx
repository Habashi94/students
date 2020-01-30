import React, { Component } from "react";
import * as api from "../api";
import StudentCard from "./StudentCard";
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
  render() {
    return (
      <div>
        <ul>
          {this.state.students.map(student => {
            console.log(student)
            return <StudentCard student={student} key={student._id} />;
          })}
        </ul>
      </div>
    );
  }
}
