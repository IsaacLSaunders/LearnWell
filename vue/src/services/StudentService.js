import axios from 'axios';

export default {

  getStudentData(userId) {
    return axios.get(`/student/${userId}`);
  },

  getCoursesByStudentId(userId) {
    return axios.get(`/student/${userId}/courses/`)
  },

  getCurriculumByCourseId(courseId) {
    return axios.get(`/student/course/${courseId}/curriculum`)
  },
  
  getCurriculumByCurriculumElementId(elementId){
    return axios.get(`/student/course/curriculum/${elementId}`)
  },

  getSourcesByCurriculumElementId(elementId){
    return axios.get(`/student/course/curriculum/${elementId}/sources`)
  },

  getAssignmentsByCurriculumId(id){
    //TODO: THINK ABOUT RESTFUL HERE AND RENAME ASSIGNMENTSS
    return axios.get(`/student/${id}/assignments`)
  },
  //TODO: CONNECT THIS TO THE DB ON THE BACKEND IN THE STUDENT CONTROLLER
  getQuestionsByAssignmentId(id){
    return axios.get(`/student/assignments/${id}/questions`)
  },
  submitHomeworkByAssignmentId(userId, courseId, curriculumId, answers){
    return axios.post(`/student/${userId}/courses/${courseId}/curriculum/${curriculumId}`, answers)
  },
  // addCourse(course) {
  //   return axios.post(`/course`, course);
  // },



  
  updateAssignment(userId, courseId, assignment) {
    return axios.put(`/student/${userId}/courses/${courseId}/${assignment.id}?action=edit`, assignment);
  },

  deleteCourse(courseId) {
    return axios.delete(`/cards/${courseId}`);
  },
  addBoard(board){
    return axios.post('/boards',board);
  },
  deleteBoard(boardID)
  {
    return axios.delete(`/boards/${boardID}`);
  }

}