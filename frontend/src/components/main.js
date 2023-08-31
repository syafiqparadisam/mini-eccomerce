// const tbody = document.querySelector("tbody");
// const container = document.querySelector(".container");
// const addBtn = document.querySelector("thead > tr:last-child > th > button");

// addBtn.addEventListener("click", () => {
//   const input = addData();
// });

// document.body.onload = handleData();

// const addData = () => {
//   const wrapper = createForm("Submit");
//   const sendBtn = wrapper.querySelector(".submitBtn > input");
//   const form = wrapper.querySelector("form");
//   const allInput = {
//     nama_aktivitas: form.querySelector(".namaActivity > #namaActivity"),
//     waktu_deadline: form.querySelector(".waktu_deadline > #waktu_deadline"),
//   };
//   console.log(sendBtn.value);
//   container.appendChild(wrapper);
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const { pesan, durasi } = handleKeberhasilan(allInput.waktu_deadline);
//     let message = validateMessage(pesan, durasi);
//       handleCreateData(allInput);
//       wrapper.style.display = "none";
//   });

//   return allInput
// };

// //TODO CREATE FORM
// function createForm(textBtn) {
//   const wrapper = document.createElement("div");
//   wrapper.setAttribute("class", "wrapper");
//   wrapper.innerHTML = `<div class="caption">
//                           <h1>Add Activity</h1>
//                           <span class="material-icons">close</span>
//                           </div>
//                           <form>
//                           <div class="namaActivity">
//                           <label for="namaActivity">Aktivitas :</label>
//                           <input id="namaActivity" type="text" placeholder="Sekolah"/>
//                           </div>
//                           <div class="waktu_deadline">
//                           <label for="waktu_deadline">Waktu :</label>
//                           <input id="waktu_deadline" type="time"/>
//                           </div>
//                           <div class="submitBtn">
//                           <input value="${textBtn}" type="submit"/>
//                           </div>
//                         </form>`;

//   const waktu_deadline = wrapper.querySelector(".waktu_deadline input");

//   const closeBtn = wrapper.querySelector(".caption span");
//   closeBtn.addEventListener("click", () => {
//     wrapper.style.display = "none";
//   });
//   return wrapper;
// }

// //? CREATE TABLE
// function createTable(data) {
//   const tr = document.createElement("tr");

//   tr.innerHTML = `<td>
//                       <p>${data.nama_aktivitas}</p>
//                     </td>
//                     <td>
//                       <p>${data.waktu_deadline}</p>
//                     </td>
//                     <td>
//                       <p>${data.berhasil}</p>
//                     </td>
//                     <td>
//                       <input type="radio"/>
//                     </td>
//                     <td>
//                       <div class="setting">
//                           <button>
//                               <span class="material-icons">
//                                   edit
//                               </span>
//                           </button>
//                           <button>
//                               <span class="material-icons">
//                                   delete
//                               </span>
//                           </button>
//                       </div>
//                     </td>`;

//   tbody.appendChild(tr);
//   const delBtn = tr.querySelector(".setting button:last-child");
//   delBtn.addEventListener("click", () => {
//     console.log("DELETED");
//     handleDeleteData(data);
//   });
//   const berhasil = tr.querySelector("td:nth-child(4) input");
//   const editBtn = tr.querySelector(".setting button:first-child");
//   editBtn.addEventListener("click", () => {
//     const wrapper = createForm("UPDATE");
//     const sendBtn = wrapper.querySelector(".submitBtn > input");
//     const form = wrapper.querySelector("form");
//     form.addEventListener('click', (e) => {
//       e.preventDefault()
//       const input = addData()
//       console.log(input)
//       // handleUpdateData(input)
//       console.log('hhh')
//     })
//     container.appendChild(wrapper);
//   });
// }

// //! HANDLE DATA
// async function handleData() {
//   try {
//     const data = await fetch("http://127.0.0.1:3000");
//     const dataJSON = await data.json();
//     dataJSON.map((data) => {
//       createTable(data);
//     });
//   } catch (error) {
//     if (error) console.error(error.message);
//   }
// }

// //! HANDLE CREATE DATA
// async function handleCreateData(input) {
//   await fetch("http://localhost:3000", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       nama_aktivitas: input.nama_aktivitas.value,
//       waktu_deadline: input.waktu_deadline.value + ":00",
//       berhasil: "BELUM DIKERJAKAN",
//     }),
//   });
// }

// //! HANDLE DELETE DATA
// async function handleDeleteData(data) {
//   await fetch(`http://localhost:3000/${data.id}`, {
//     method: "DELETE",
//   });
// }

// //! HANDLE UPDATE DATA
// async function handleUpdateData(input, id) {
//   const update = await fetch(`http://localhost:3000/${id}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       id: Number(input.id.value),
//       namaActivity: input.namaActivity.value,
//       Jam: Number(input.jam.value),
//     }),
//   });
// }

// //! HANDLE KEBERHASILAN
// function handleKeberhasilan(deadline) {
//   // Membuat objek Date untuk deadline dan waktu sekarang

//   console.log(deadline.value);
//   const splitDeadline = deadline.value.split(":");
//   const NumberJam = Number(splitDeadline[0]);
//   const NumberMenit = Number(splitDeadline[1]);
//   console.log({ NumberJam, NumberMenit });

//   const deadlineConfig = new Date();
//   deadlineConfig.setHours(NumberJam, NumberMenit, 0, 0);

//   const date = new Date();
//   const waktuSekarangJam = date.getHours();
//   const waktuSekarangMenit = date.getMinutes();
//   date.setHours(waktuSekarangJam, waktuSekarangMenit, 0, 0);

//   // Menghitung selisih waktu dalam milidetik
//   const selisih = deadlineConfig - date;
//   // Menghitung selisih waktu dalam menit
//   const totalMenit = Math.floor(selisih / (1000 * 60));

//   // Mengecek apakah totalMenit lebih dari 0 (lebih cepat) atau tidak (terlambat)
//   const durasi = Math.abs(totalMenit);
//   let pesan;
//   if (totalMenit > 0) {
//     pesan = "LEBIH CEPAT";
//   } else if (totalMenit === 0) {
//     pesan = "TEPAT WAKTU";
//   } else {
//     pesan = "TERLAMBAT";
//   }
//   if (durasi > 60) {
//     const convertJam = (durasi / 60).toString();
//     const splitJam = convertJam.split(".");
//     console.log(splitJam);
//     const cutComma = Number(splitJam[1]).toFixed(2);
//     console.log(cutComma);
//     pesan = `LEBIH CEPAT ${splitJam[0]} JAM DAN ${splitJam[1]} MENIT`;
//   }
//   return { pesan, durasi };
// }

// //! VALIDASI PESAN
// const validateMessage = (pesan, durasi) => {
//   let message;
//   if (pesan.includes("TEPAT WAKTU")) {
//     message = "TEPAT WAKTU";
//   } else if (pesan.includes("JAM DAN")) {
//     message = pesan;
//   } else {
//     message = `${pesan} ${durasi} MENIT`;
//   }
//   return message;
// };
