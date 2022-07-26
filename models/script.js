import Course from './Course.js';
import Student from './Student.js';

// Create New Course Object Value
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

// console.log('Course Object:', createCourse);
// console.log('Course Name:', createCourse.name);
// console.log('Course Code:', createCourse.code);

// // Update Course name using method
// console.log('Course name Before:', createCourse.name);
// createCourse.changeName('Introduction to Computer Litearcy');
// console.log('Course Name After:', createCourse.name);

// Create New Student Object Value

const createStudent = new Student(
  1,
  'Mr.',
  'Ojok',
  'Simon Peter',
  'Male',
  'afandeojok@gmail.com',
  'password123',
  '+256777 777 789',
  '03/06/1991',
  'Omoro',
  'Gulu',
  'catholism',
  'Married',
  'Ugandan',
  'CM93456789UKI90',
  'P02567',
  'None',
  'Gulu City',
  'Omoro',
  'Akidi Sub County',
  'Kec Okela',
  'Aber Irene',
  'Spouse',
  'Gulu City',
  'aber@gmail.com',
  '+256777777778',
  'June 10 2022 16:00:00 EST',
  '22 July 2022 18:38:53 EST'
);

const content = `
<main>
  <article>
    <h1>${createCourse.name}</h1>
    <hr />
    <ul>
      <li>ID: ${createCourse.id}</li>
      <li>Code: ${createCourse.code}</li>
      <li>Duration: ${createCourse.duration}</li>
      <li>Status: ${createCourse.status}</li>
      <li>Tye: ${createCourse.courseType}</li>
      <li>Created At: ${createCourse.createdAt}</li>
      <li>Updated At: ${createCourse.updatedAt}</li>
      <li>User ID: ${createCourse.userId}</li>
      <li>Instructor ID: ${createCourse.instructorId}</li>
      <li>Student ID: ${createCourse.studentId}</li>
    </ul>
  </article>

  <article>
    <h1>Student Information</h1>
    <hr />
    <ul>
      <li>Student ID: ${createStudent.id}</li>
      <li>Full Name: ${createStudent.salutation} ${createStudent.surname} ${createStudent.otherNames}</li>
      <li>Gender: ${createStudent.gender}</li>
      <li>Email: ${createStudent.emailAddress}</li>
      <li>Telephone: ${createStudent.telephone}</li>
      <li>Date of BirthL ${createStudent.dateOfBirth}</li>
      <li>Marital Status: ${createStudent.maritalStatus}</li>
      <li>District: ${createStudent.disttrict}</li>
      <li>Sub County: ${createStudent.subcounty}</li>
      <li>Village: ${createStudent.village}</li>
      <li>Next of Kin: ${createStudent.nextOfKinFullName}</li>
    </ul>
  </article>
</main>
`;

document.body.innerHTML = content;

// console.log('Student Object:', createStudent);
// console.log(
//   'Student Name:',
//   createStudent.surname + ' ' + createStudent.otherNames
// );

// console.log('Created At:', createStudent.createdAt);
// console.log('Updated At:', createStudent.updatedAt);

// console.log(
//   'Number of Days since Created:',
//   'Created ' + createStudent.numberOfDays() + ' days ago'
// );

// console.log(
//   'Number of Days since last Updated:',
//   'Updated ' + createStudent.daysUpdated() + ' days ago'
// );
