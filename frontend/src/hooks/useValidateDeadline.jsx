import { useState } from "react";

const useValidateDeadline = () => {
  const [message, setMessage] = useState();

  function handleKeberhasilan(deadline) {
    console.log(deadline.value);
    const splitDeadline = deadline.value.split(":");
    const NumberJam = Number(splitDeadline[0]);
    const NumberMenit = Number(splitDeadline[1]);
    console.log({ NumberJam, NumberMenit });

    const deadlineConfig = new Date();
    deadlineConfig.setHours(NumberJam, NumberMenit, 0, 0);

    const date = new Date();
    const waktuSekarangJam = date.getHours();
    const waktuSekarangMenit = date.getMinutes();
    date.setHours(waktuSekarangJam, waktuSekarangMenit, 0, 0);

    const selisih = deadlineConfig - date;
    const totalMenit = Math.floor(selisih / (1000 * 60));

    const durasi = Math.abs(totalMenit);
    let pesan;
    if (totalMenit > 0) {
      pesan = "LEBIH CEPAT";
    } else if (totalMenit === 0) {
      pesan = "TEPAT WAKTU";
    } else {
      pesan = "TERLAMBAT";
    }
    if (durasi > 60) {
      const convertJam = (durasi / 60).toString();
      const splitJam = convertJam.split(".");
      console.log(splitJam);
      const cutComma = Number(splitJam[1]).toFixed(2);
      console.log(cutComma);
      pesan = `LEBIH CEPAT ${splitJam[0]} JAM DAN ${splitJam[1]} MENIT`;
    }
    //else {
    //   const convertJam = (durasi / 60).toString();
    //   const splitJam = convertJam.split(".");
    //   console.log(splitJam);
    //   const cutComma = Number(splitJam[1]).toFixed(2);
    //   console.log(cutComma);
    //   pesan = `TERLAMBAT ${splitJam[0]} JAM DAN ${splitJam[1]} MENIT`;
    // }
    validateMessage(pesan, durasi);
  }

  const validateMessage = (pesan, durasi) => {
    let message;
    if (pesan.includes("TEPAT WAKTU")) {
      message = "TEPAT WAKTU";
    } else if (pesan.includes("JAM DAN")) {
      message = pesan;
    } else {
      message = `${pesan} ${durasi} MENIT`;
    }
    setMessage(message);
  };

  return { message, handleKeberhasilan };
};

export default useValidateDeadline;
