function replaceData(placeHolderString, value) {
  return placeHolderString.replace('%data%', value);
}

function enableMap() {
  $('#mapDiv').append(googleMap);
}
enableMap();

var bio = {
  name: "Brian Quach",
  role: "Full Stack Web Developer",
  contacts: {
    mobile: "626.628.4009",
    email: "13rianquach@gmail.com",
    github: "https://www.github.com/brianquach",
    twitter: "https://twitter.com/bkq88",
    blog: "http://www.bkquach.com",
    location: "West Covina, CA"
  },
  welcomeMessage: "Welcome to my resume! Churning code one bit at a time.",
  skills: ["Programming", "Piano", "Running"],
  biopic: "images/bq.jpeg",
  display: function() {
    var $header = $('#header');
    var $topContacts = $('#topContacts');
    var $footerContacts = $('#footerContacts');

    var name = replaceData(HTMLheaderName, this.name);
    var role = replaceData(HTMLheaderRole, this.role);
    var mobile = replaceData(HTMLmobile, this.contacts.mobile);
    var email = replaceData(HTMLemail, this.contacts.email);
    var github = replaceData(HTMLgithub, this.contacts.github);
    var twitter = replaceData(HTMLtwitter, this.contacts.twitter);
    var blog = replaceData(HTMLblog, this.contacts.blog);
    var location = replaceData(HTMLlocation, this.contacts.location);
    var biopic = replaceData(HTMLbioPic, this.biopic);
    var welcomeMessage = replaceData(HTMLwelcomeMsg, this.welcomeMessage);

    $header.prepend(name, role);
    $header.append(biopic, welcomeMessage, HTMLskillsStart);
    $topContacts.append(mobile, email, github, twitter, location, blog);
    $footerContacts.append(mobile, email, github, twitter, location, blog);

    var $skills = $('#skills');
    this.skills.forEach(function(skill) {
      var listItem = replaceData(HTMLskills, skill);
      $skills.append(listItem);
    });
  }
};

var education = {
  schools: [{
    name: "University of California, Santa Barbara",
    location: "Santa Barbara, CA",
    degree: "Bachelor of Science",
    majors: ["Computer Engineering"],
    dates: "June 2010",
    url: "http://www.ucsb.edu/"
  }, {
    name: "Covina High School",
    location: "Covina, CA",
    degree: "High School Diploma",
    majors: [],
    dates: "June 2006",
    url: "http://www.covinahigh.net/"
  }],
  onlineCourses: [{
    title: "Full Stack Web Developer Nanodegree",
    school: "Udacity",
    dates: "July 2016",
    url: "http://www.udacity.com"
  }],
  display: function() {
    var name, location, degree, majors, dates, url, $schoolStart, schoolEntryTitle;
    var $education = $('#education');

    this.schools.forEach(function(school) {
      $schoolStart = $(HTMLschoolStart);
      name = replaceData(HTMLschoolName, school.name);
      degree = replaceData(HTMLschoolDegree, school.degree);
      location = replaceData(HTMLschoolLocation, school.location);
      dates = replaceData(HTMLschoolDates, school.dates);
      schoolEntryTitle = name + degree;
      majors = '';
      school.majors.forEach(function(major) {
        majors += major + ' ';
      });
      majors = replaceData(HTMLschoolMajor, majors.trim());
      $schoolStart.append(schoolEntryTitle, dates, location, majors);
      $education.append($schoolStart);
    });

    if (this.onlineCourses.length) {
      $education.append(HTMLonlineClasses);
    }

    this.onlineCourses.forEach(function(course) {
      $schoolStart = $(HTMLschoolStart);
      degree = replaceData(HTMLonlineTitle, course.title);
      name = replaceData(HTMLonlineSchool, course.school);
      dates = replaceData(HTMLonlineDates, course.dates);
      url = replaceData(HTMLonlineURL, course.url);
      schoolEntryTitle = degree + name;
      $schoolStart.append(schoolEntryTitle, dates, url);
      $education.append($schoolStart);
    });
  }
};

var work = {
  jobs: [{
    employer: "HCC Surety Group",
    title: "Programmer Analyst",
    location: "Los Angeles, CA",
    dates: "April 2012-June 2016",
    description: "Programmed business to consumer facing web application that allowed insurance agents to provide customers wih quotes for various bonds. Developed internal web application for company bail department that issues bail bonds on company paper."
  }, {
    employer: "American Travel Solutions",
    title: "Software Developer",
    location: "Calabasas, CA",
    dates: "September 2010-April 2012",
    description: "Built features to improve customer experience for CheapAir.com."
  }, {
    employer: "UCSB Student Information Systems & Technology",
    title: "Student Application Developer",
    location: "Santa Barbara, CA",
    dates: "August 2008-June 2010",
    description: "Performed various maintenance tasks and helped create web pages for UCSB financial aid website."
  }],
  display: function() {
    var $workExperience = $('#workExperience');
    var employer, title, location, dates, description, $workStart, fullTitle;

    this.jobs.forEach(function(job) {
      $workStart = $(HTMLworkStart);
      employer = replaceData(HTMLworkEmployer, job.employer);
      title = replaceData(HTMLworkTitle, job.title);
      dates = replaceData(HTMLworkDates, job.dates);
      location = replaceData(HTMLworkLocation, job.location);
      description = replaceData(HTMLworkDescription, job.description);
      fullTitle = employer + title;
      $workStart.append(fullTitle, dates, location, description);
      $workExperience.append($workStart);
    });
  }
};

var projects = {
  projects: [{
    title: "Book Catalog App",
    dates: "April 2017",
    description: "Inspired by my love for reading, this book catalog web application was built using the Flask framework in Python. Combining Flask, SQL Alchemy, and WTForms provided an extremely helpful groundwork for developing a CRUD based web application. Coupled with Authentication via OAuth and data storage via PostgreSQL, I was able to create a content management system, albeit a simple one, with login and data persistence.  The book catalog app also provides a RESTful API to query for books in JSON and XML formats. In addition to developing the back-end, I enjoyed putting together the front-end using the Boostrap framework.",
    images: ["images/book-catalog.png"]
  }, {
    title: "Five Card Poker API",
    dates: "July 2017",
    description: "Two player Five-Card Poker game API with endpoints that allows anyone to develop a front-end for the game. Game features include adding players, new games, email notifications, player ranking, and game history. Using Google App Engine (GAE) with API Explorer was extremely helpful to debug and test the game before deploying to the GAE platform. A new concept I learned about was NoSQL databases; Google Cloud Datastore NoSQL database is used in the application to store and retrieve game data.",
    images: ["images/game-api.png"]
  }, {
    title: "Linux Server Configuration",
    dates: "August 2017",
    description: "Installed and configure required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server. Apache Web Server with mod_wsgi and PostgreSQL database server used to serve Book Catalog Application from a previous project. Configurations include firewall to block all traffic except for HTTP, SSH, and NTP; NTP used to keep server clock synchronized over a network; SSH used to access server; HTTP used to serve hosted application.  The web server was secured further by disabling root login and implementing fail2ban to ban malicious IP addresses. Server monitoring application Glance was also installed for easy server resource tracking.  Navigating this project has helped me learn a great deal about Linux and appreciate its \"everything is a file\" characteristic!",
    images: ["images/linux-server.png"]
  }, {
    title: "Swiss-Tournament API",
    dates: "February 2017",
    description: "Swiss-Tournment Tracking API used to track game outcomes that supports these features: player registration, multiple tournaments, byes, swiss-pairing, ties, tie breaker by opponent match wins, player standings, and rematch prevention. Virtual Box and Vagrant were used for speeding up the setup time by hosting a virtual environment installed with the required tools to test and run the tournament API. Using PostgreSQL and Python as the back-end, the tournament API comes complete with functionality test cases; functionality test cases helped keep code integrity and provided regression testing.",
    images: ["images/tournament-api.png"]
  }],
  display: function() {
    var $projects = $('#projects');
    var $projectStart, title, dates, description;

    this.projects.forEach(function(project) {
      $projectStart = $(HTMLprojectStart);
      title = replaceData(HTMLprojectTitle, project.title);
      dates = replaceData(HTMLprojectDates, project.dates);
      description = replaceData(HTMLprojectDescription, project.description);
      $projectStart.append(title, dates, description);

      project.images.forEach(function(image) {
        image = replaceData(HTMLprojectImage, image);
        $projectStart.append(image);
      });

      $projects.append($projectStart);
    });
  }
};

bio.display();
education.display();
work.display();
projects.display();
