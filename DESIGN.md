# Project Design 
by Russell Clousing and Mark Davis

The mlab document structure is:

id, name, date, manner of death, armed, age, gender, race, city, state, signs of mental illness, threat, flee, body camera

The ReactJS frontend will be a list of all the shootings from the mLab database. The database is a copy of the Washington Post's .csv file containing all shootings. The React frontend will display all incidents with all information in an organized fashion. The admin version of the site will connect to the same mLab database but will have the option to edit an incident and there will be a form to add new incidents to the database.

The ReactJS component structure is:

-list box
  -victim list
     -victim