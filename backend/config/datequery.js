const date = new Date();
const years = date.getFullYear();
const month = Number(date.getMonth() + 1).toString();
const day = date.getDate().toString();

let monthSetting;
let daySetting;
if (month.length === 1) {
  monthSetting = "0" + month;
} else {
  monthSetting = month;
}

if (day.length === 1) {
  daySetting = "0" + day;
} else {
  daySetting = day;
}

const Dates = `${years}-${monthSetting}-${daySetting}`;
module.exports = Dates;
