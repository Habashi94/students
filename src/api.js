import axios from "axios";

const baseURL = "https://nc-student-tracker.herokuapp.com/api/students";

export const fetchStudents = block => {
  return axios.get(`${baseURL}`, { params: { block } }).then(({ data }) => {
    return data.students;
  });
};

export const postStudent = studentInfo => {
  return axios
    .post(`${baseURL}`, studentInfo)
    .then(({ data }) => {
      console.log(data);
      return data.student;
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteStudent = studentId => {
  return axios
    .delete(`${baseURL}/${studentId}`)
    .then(response => {})
    .catch(err => {
      console.log(err);
    });
};

export const getStudent = studentId => {
  return axios.get(`${baseURL}/${studentId}`).then(({ data }) => {
    return data.student;
  });
};
