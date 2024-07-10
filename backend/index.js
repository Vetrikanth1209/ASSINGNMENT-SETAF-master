const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors=require('cors');

const base = mysql.createConnection({
    database: "project",
    port: "3306",
    user: "root",
    password: "123456789"
});


app.use(cors())
base.connect((err) => {
    if (err) {
        console.log("Error");
    } else {
        console.log("Connected");
    }
});

app.listen(1234, () => {
    console.log("RUNNING");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/collaborative', async (req, res) => {
    const { academic_year, semester, name_of_the_faculty_coordinator, name_of_the_activity,name_of_mou_signed_industryinstitution,title_of_the_activity, duration_from, duration_to, name_of_resource_person, contact_details_of_resource_person, designation_of_resource_person, organization_details_of_resource_person, no_of_beneficiaries, enclose_proof_pdf } = req.body;
    const sql = 'INSERT INTO collaborative(academic_year, semester, name_of_the_faculty_coordinator, name_of_the_activity,name_of_mou_signed_industryinstitution,title_of_the_activity, duration_from, duration_to, name_of_resource_person, contact_details_of_resource_person, designation_of_resource_person, organization_details_of_resource_person, no_of_beneficiaries, enclose_proof_pdf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)';
    base.query(sql, [academic_year, semester, name_of_the_faculty_coordinator, name_of_the_activity,name_of_mou_signed_industryinstitution,title_of_the_activity, duration_from, duration_to, name_of_resource_person, contact_details_of_resource_person, designation_of_resource_person, organization_details_of_resource_person, no_of_beneficiaries, enclose_proof_pdf],
        (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
                return;
            }
            res.status(200).json(result);
        }
    );
});
app.get("/getcollaborative", async (req, res) => {
    base.query("SELECT * FROM collaborative", (err, results) => {
    if (err) res.status(500).json({ error: `${err} is occured` });
    else if (results.length == 0)
        res.status(404).json({ error: "No data found" });
    else res.status(200).json({ message: results });
    });
});

app.post('/student_motivation', async (req, res) => {
    const {
      academic_year,
      semester,
      name_of_the_faculty,
      name_of_the_student,
      paper_presentation,
      date_of_contest,
      no_of_beneficiaries,
      certificate_pdf,
    } = req.body;
  
    const sql =
      'INSERT INTO student_motivation(academic_year,semester,name_of_the_faculty,name_of_the_student,paper_presentation,date_of_contest,no_of_beneficiaries,certificate_pdf) VALUES(?,?,?,?,?,?,?,?) ';
  
    base.query(
      sql,
      [
        academic_year,
        semester,
        name_of_the_faculty,
        name_of_the_student,
        paper_presentation,
        date_of_contest,
        no_of_beneficiaries,
        certificate_pdf,
      ],
      (err, ack) => {
        if (err) res.status(500).json({ error: `${err} is occurred` });
        else if (ack.affectedRows === 0)
          res.status(201).json({ error: `Record not inserted` });
        else res.status(200).json({ message: "App has published" });
      }
    );
  });

  app.get("/getstudent_motivation", async (req, res) => {
    base.query("SELECT * FROM student_motivation", (err, results) => {
      if (err) res.status(500).json({ error:`${err} is occured`});
      else if (results.length == 0)
        res.status(404).json({ error: "No data found" });
      else res.status(200).json({ message: results });
    });
  });

app.post("/journalnewrecord", async (req, res) => {
  const {
    academic_year,
    semester,
    department,
    name_of_author,
    title_of_paper,
    name_of_journal,
    year_of_publication,
    month_of_publication,
    issn_number,
    volume_no,
    issue_no,
    page_no,
    journal_listed_in,
    link_to_website_of_journal,
    journal_first_page_PDF,
  } = req.body;
  const sql =
    "insert into journal_publication values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  base.query(
    sql,
    [
      academic_year,
      semester,
      department,
      name_of_author,
      title_of_paper,
      name_of_journal,
      year_of_publication,
      month_of_publication,
      issn_number,
      volume_no,
      issue_no,
      page_no,
      journal_listed_in,
      link_to_website_of_journal,
      journal_first_page_PDF,
    ],
    (err, result) => {
      if (err) {
        res.status(404).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    }
  );
});
app.get("/getjournal_publication", async (req, res) => {
  base.query("SELECT * FROM journal_publication", (err, results) => {
    if (err) res.status(500).json({ error: `${err} is occured`});
    else if (results.length == 0)
      res.status(404).json({ error: "No data found" });
    else res.status(200).json({ message: results });
  });
});

app.post("/participation_in_taste", async (req, res) => {
  const {
   faculty_name,
    date,
    taste_number,
    seminar_topic,
    resource_person_name,
    outcome,
  } = req.body;

  const sql =
    "INSERT INTO participation_in_taste( faculty_name, date,taste_number,seminar_topic, resource_person_name,outcome) VALUES(?,?,?,?,?,?) ";

  base.query(
    sql,
    [
      faculty_name,
      date,
      taste_number,
      seminar_topic,
      resource_person_name,
      outcome,
    ],
    (err, ack) => {
      if (err) res.status(500).json({ error: `${err} is occurred ` });
      else if (ack.affectedRows === 0)
        res.status(201).json({ error: `Record not inserted ` });
      else res.status(200).json({ message: `App has published` });
    }
  );
});
  

app.get("/getparticipation_in_taste", async (req, res) => {
  base.query("SELECT * FROM participation_in_taste", (err, results) => {
    if (err) res.status(500).json({ error: `${err} is occured` });
    else if (results.length == 0)
      res.status(404).json({ error: "No data found" });
    else res.status(200).json({ message: results });
  });
});

app.post("/student_fieldwork", async (req, res) => {
  const {
    name_of_the_faculty,
    designation,
    name_of_the_program,
    title_of_the_program,
    date_from,
    date_to,
    participation,
    location_of_organization,
    amount_provided_by_the_hei,
    certificate_pdf,
  } = req.body;

  const sql =
    "INSERT INTO student_fieldwork(name_of_the_faculty, designation, name_of_the_program, title_of_the_program, date_from, date_to, participation, location_of_organization, amount_provided_by_the_hei, certificate_pdf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  
  base.query(sql, [
    name_of_the_faculty,
    designation,
    name_of_the_program,
    title_of_the_program,
    date_from,
    date_to,
    participation,
    location_of_organization,
    amount_provided_by_the_hei,
    certificate_pdf,
  ], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "An error occurred while inserting data" });
    } else if (result.affectedRows === 0) {
      res.status(201).json({ error: "Record not inserted" });
    } else {
      res.status(200).json({ message: "Data inserted successfully" });
    }
  });
});



app.get("/getstudent_fieldwork", async (req, res) => {
  base.query("SELECT * FROM student_fieldwork", (err, results) => {
    if (err) res.status(500).json({ error: `${err} occurred` });
    else if (results.length == 0)
      res.status(404).json({ error: "No tables found" });
    else res.status(200).json({ message: results });
  });
});