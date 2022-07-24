import Course from './Course.js';

const createCourse = new Course(
  1,
  2201,
  'Computer Literacy',
  '3 Months',
  'Pending',
  'Free',
  '24/07/2022',
  '24/07/2022',
  1,
  2,
  3
);

console.log('Course Object:', createCourse);
console.log('Course Name:', createCourse.name);
console.log('Course Code:', createCourse.code);

// Update Course name using method
console.log('Course name Before:', createCourse.name);
createCourse.changeName('Introduction to Computer Litearcy');
console.log('Course Name After:', createCourse.name);
