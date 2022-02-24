var app = new Vue({
  el: "#app",
  data: {
    pageTitle: "New Student Information",
    sectionTitle: "Student Personal Record",
    profilePhoto: "<img src='pic3.jpg' alt='profile-photo'>",
    firstName: null,
    lastName: null,
    techID: null,
    major: null,
    graduationYear: null,
    gpa: null,
    gpaColor: null,
    newStudent: {
      firstName: null,
      lastName: null,
      major: {
        id: null,
        name: null,
        totalCredits: null,
      },
      graduationYear: null,
      gpa: null,
      registrations: [],
      valid: false,
      invalid: true,
    },
    registration: {
      courseNumber: null,
      attendanceType: null,
      numOfCredits: null,
      bookFormat: [],
      valid: false,
      invalid: true,
    },
    student: [
      {
        firstName: "Abdullahi",
        lastName: "Mohamed",
        preferredName: null,
        major: {
          id: 1,
          name: "Computer Programming",
          totalCredits: 50,
        },
        graduationYear: "2022",
        gpa: 2.5,
      },
      {
        firstName: "John",
        lastName: "Smith",
        preferredName: null,
        major: {
          id: 2,
          name: "Cyber Security",
          totalCredits: 38,
        },
        graduationYear: "2023",
        gpa: 3.7,
      },
      {
        firstName: "Alex",
        lastName: "Luther",
        preferredName: null,
        major: {
          id: 3,
          name: "Computer Science",
          totalCredits: 55,
        },
        graduationYear: "2022",
        gpa: 4.0,
      },
    ],
    updated: null,
    visibleOrNot: null,
  },
  methods: {
    fullName: function (lastName, firstName) {
      return lastName + ", " + firstName;
    },
    hideInput: function () {
      if (!this.visibleOrNot) this.visibleOrNot = true;
      else this.visibleOrNot = false;
    },
    setUpdated: function () {
      const today = new Date();
      this.updated = today;
      return this.updated;
    },
    setNewStudent: function () {
      this.student.push(Object.assign({}, this.newStudent));

      this.newStudent.firstName = "";
      this.newStudent.lastName = "";
      this.newStudent.major = "";
      this.newStudent.graduationYear = "";
      this.newStudent.gpa = "";
    },
    register: function () {
      this.newStudent.registrations.push(Object.assign({}, this.registration));
      this.registration.courseNumber = "";
      this.registration.numOfCredits = null;
      this.registration.attendanceType = "";
      this.registration.bookFormat = "";
    },
  },
  computed: {
    setGPAColor: function () {
      this.gpa = this.student.gpa;
      if (this.gpa >= 3) {
        this.gpaColor = "green";
      }
      if (this.gpa >= 2) {
        this.gpaColor = "yellow";
      }
      if (this.gpa >= 1) {
        this.gpaColor = "orange";
      } else {
        this.gpaColor = "red";
      }
      return this.gpaColor;
    },
  },
  watch: {
    student: {
      deep: true,
      handler() {
        this.setUpdated();
      },
    },
    newStudent: {
      handler: function () {
        if (this.newStudent.firstName == "") {
          this.newStudent.valid = true;
          this.newStudent.invalid = false;
        } else {
          this.newStudent.valid = false;
          this.newStudent.invalid = true;
        }
      },
      deep: true,
    },
    registration: {
      handler: function () {
        if (this.registration.numOfCredits == null) {
          this.registration.invalid = false;
          this.registration.valid = true;
        } else {
          this.registration.valid = false;
          this.registration.invalid = true;
        }
      },
      deep: true,
    },
  },
  template: "#Divtemplate",
});

const techID = document.getElementById("setTechID");
techID.onclick = () => {
  if (!app.$data.techID) app.$data.techID = "1254560";
  else app.$data.techID = null;
};
