const db = require("../config/mysqlconfiq");
const Dates = require("../config/datequery");

// const getAllActivity = (req, res) => {
//   const query = `SELECT * FROM todolist.activity`;
//   //  WHERE hari LIKE '${Dates}%' ORDER BY waktu_deadline`;
//   db.query(query, (err, result) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       res.json(result);
//     }
//   });
// };

// const getSpesificActivity = (req, res) => {
//   const id = parseInt(req.params.id);

//   const findData = `SELECT * FROM todolist.activity WHERE id = ${id}`;
//   // WHERE hari LIKE '${Dates}%' AND id = ${id}
//   db.query(findData, (err, result) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//     } else if (result.length === 0) {
//       res.sendStatus(404);
//     } else {
//       res.json(result);
//     }
//   });
// };

// const createActivity = (req, res) => {
//   const insertQuery = `INSERT INTO activity (nama_aktivitas, waktu_deadline, berhasil, dikerjakan)
//         VALUES ("${req.body.nama_aktivitas}",
//               "${req.body.waktu_deadline}",
//               "${req.body.berhasil}",
//               "${req.body.dikerjakan}")`;
//   db.query(insertQuery, (err, result) => {
//     if (err) {
//       console.error(err.message);
//       res.sendStatus(400);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// };

// const deleteActivity = (req, res) => {
//   const id = parseInt(req.params.id);
//   const deleteQuery = `DELETE FROM activity WHERE id = ${id}`;
//   db.query(deleteQuery, (err, result) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// };

// const updateActivity = (req, res) => {
//   const id = parseInt(req.params.id);
//   const { nama_aktivitas, waktu_deadline, dikerjakan, berhasil } = req.body;
//   const findQuery = `UPDATE todolist.activity
//   SET nama_aktivitas = "${nama_aktivitas}",
//       waktu_deadline = "${waktu_deadline}",
//       berhasil = "${berhasil}",
//       dikerjakan = "${dikerjakan}"
//   WHERE id = ${id}`;
//   db.query(findQuery, (err, result) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       res.json(result);
//     }
//   });
// };

// module.exports = {
//   getAllActivity,
//   getSpesificActivity,
//   createActivity,
//   deleteActivity,
//   updateActivity,
// };
