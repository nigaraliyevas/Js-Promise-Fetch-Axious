const tbody = document.querySelector(".tbody");
const dateToday = document.querySelector(".date-today");
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (day <= 9) {
  day = "0" + day;
}
if (month <= 9) {
  month = "0" + month;
}
const fullDate = `${day}-${month}-${year}`;
dateToday.innerHTML = fullDate;

const namazTime = document.querySelector(".namaz-time");
const data = fetch("http://api.aladhan.com/v1/calendar/2024/5?latitude=51.508515&longitude=-0.1254872&method=2")
  .then(response => response.json())
  .then(datas => {
    console.log(datas.data);
    const allData = datas.data;
    for (let i = 0; i < allData.length; i++) {
      tbody.innerHTML += `
      <tr>
        <td scope="row" class="text-center ">${allData[i].date.gregorian.date}</td>
        <td class="d-block text-center">
          <select name="" id="" class="text-center w-50">
            <option value="" class="text-justify">Asr : ${allData[i].timings.Asr}</option>
            <option value="" class="text-justify">Dhuhr : ${allData[i].timings.Dhuhr}</option>
            <option value="" class="text-justify">Fajr : ${allData[i].timings.Fajr}</option>
            <option value="" class="text-justify">Firstthird : ${allData[i].timings.Firstthird}</option>
            <option value="" class="text-justify">Imsak : ${allData[i].timings.Imsak}</option>
            <option value="" class="text-justify">Isha : ${allData[i].timings.Isha}</option>
            <option value="" class="text-justify">Lastthird : ${allData[i].timings.Lastthird}</option>
            <option value="" class="text-justify">Maghrib : ${allData[i].timings.Maghrib}</option>
            <option value="" class="text-justify">Midnight : ${allData[i].timings.Midnight}</option>
            <option value="" class="text-justify">Sunrise : ${allData[i].timings.Sunrise}</option>
            <option value="" class="text-justify">Sunset : ${allData[i].timings.Sunset}</option>
          </select>
        </td>
      </tr>
      `;
      if (allData[i].date.gregorian.date == fullDate) {
        namazTime.innerHTML = `
        <p class="text-justify">Asr : ${allData[i].timings.Asr}</p>
            <p class="text-justify">Dhuhr : ${allData[i].timings.Dhuhr}</p>
            <p class="text-justify">Fajr : ${allData[i].timings.Fajr}</p>
            <p class="text-justify">Firstthird : ${allData[i].timings.Firstthird}</p>
            <p class="text-justify">Imsak : ${allData[i].timings.Imsak}</p>
            <p class="text-justify">Isha : ${allData[i].timings.Isha}</p>
            <p class="text-justify">Lastthird : ${allData[i].timings.Lastthird}</p>
            <p class="text-justify">Maghrib : ${allData[i].timings.Maghrib}</p>
            <p class="text-justify">Midnight : ${allData[i].timings.Midnight}</p>
            <p class="text-justify">Sunrise : ${allData[i].timings.Sunrise}</p>
            <p class="text-justify">Sunset : ${allData[i].timings.Sunset}</p>
        `;
      }
    }
  });
