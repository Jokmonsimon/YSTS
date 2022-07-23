const course = {
  id: 1,
  code: '2201',
  name: 'Computer Literacy',
  duration: '3 Months',
  status: 'Pending',
  createdAt: '23/07/2022',
  updatedAt: '23/07/2022',
  userId: {
    id: 1,
    firstName: 'Ojok',
    middleName: '',
    lastName: 'Simon Peter',
  },
  instructorId: {
    id: 1,
    firstName: 'Akello',
    middleName: '',
    lastName: 'Nancy',
  },
  studentId: {
    id: 1,
    firstName: 'Rwotomiya',
    middleName: 'Nathan',
    lastName: 'Junior',
  },
  changeCourseStatus: function (courseStatus) {
    this.status = courseStatus;
  },
};

console.log('The Course Object', course);
console.log('The Course Status Before:', course.status);
course.changeCourseStatus('Not Approved');
console.log('The Cousre status After:', course.status);
