/**
 * Creating Classes:
 *
 * Class declaration: class Name {}
 * Class expression: const Name = class {}
 */

class Course {
  constructor(
    // Define Parameters
    id,
    code,
    name,
    duration,
    status,
    courseType,
    createdAt,
    updatedAt,
    userId,
    instructorId,
    studentId
  ) {
    // Define Properties
    this.id = id;
    this.code = code;
    this.name = name;
    this.duration = duration;
    this.status = status;
    this.courseType = courseType;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
    this.instructorId = instructorId;
    this.studentId = studentId;
  }

  // Add Methods Like Functions
  changeName(updateName) {
    this.name = updateName;
  }
}

export default Course;
