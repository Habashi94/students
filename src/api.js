import axios from "axios";

const baseURL = "https://nc-student-tracker.herokuapp.com/api/students";

export const fetchStudents = () => {
  return axios.get(`${baseURL}`).then(({ data }) => {
    return data.students;
  });
};

export const addStudent = studentInfo => {
  return axios.post(`${baseURL}`, { studentInfo }).then(({ data }) => {
    console.log(data);
    return data.students;
  });
};
