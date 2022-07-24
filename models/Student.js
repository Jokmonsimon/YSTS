/***
 * Student Model Class:
 *
 * Class declaration: class Name {}
 * Class expression: const Name = class {}
 */

const Student = class {
  constructor(
    // Define Parameters
    id,
    salutation,
    surname,
    otherNames,
    gender,
    emailAddress,
    password,
    telephone,
    dateOfBirth,
    districtOfbirth,
    districtOfOrigin,
    religion,
    maritalStatus,
    nationality,
    nationalId,
    passportNo,
    emisNo,
    districtOfResidence,
    disttrict,
    subcounty,
    village,
    nextOfKinFullName,
    nextOfKinRelationship,
    nextOfKinCurrentAddress,
    nextOfKinEmailAddress,
    nextOfKinTelephone
  ) {
    // Define Properties
    this.id = id;
    this.salutation = salutation;
    this.surname = surname;
    this.otherNames = otherNames;
    this.gender = gender;
    this.emailAddress = emailAddress;
    this.password = password;
    this.telephone = telephone;
    this.dateOfBirth = dateOfBirth;
    this.districtOfbirth = districtOfbirth;
    this.districtOfOrigin = districtOfOrigin;
    this.religion = religion;
    this.maritalStatus = maritalStatus;
    this.nationality = nationality;
    this.nationalId = nationalId;
    this.passportNo = passportNo;
    this.emisNo = emisNo;
    this.districtOfResidence = districtOfResidence;
    this.disttrict = disttrict;
    this.subcounty = subcounty;
    this.village = village;
    this.nokFullName = nextOfKinFullName;
    this.nextOfKinRelationship = nextOfKinRelationship;
    this.nextOfKinCurrentAddress = nextOfKinCurrentAddress;
    this.nextOfKinEmailAddress = nextOfKinEmailAddress;
    this.nextOfKinTelephone = nextOfKinTelephone;
  }
};

export default Student;
