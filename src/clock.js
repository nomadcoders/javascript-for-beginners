const clockTitle = document.querySelector("#clock");

function getStr(data) {
  //변환된 데이터에서 나머지를 떨구고 String으로 변환 후 두자리로 맞춤.
  let result = String(Math.floor(data)).padStart(2, "0");
  return result;
}

function getClock() {
  const nowDate = new Date(); //현재 날짜

  const year = nowDate.getFullYear();
  const month = nowDate.getMonth()+1;
  const date = nowDate.getDate();
  const day = nowDate.getDay();
  const dayName = ["일", "월", "화", "수", "목", "금", "토"]
  const hours = nowDate.getHours();
  const minutes = nowDate.getMinutes();
  const seconds = nowDate.getSeconds();

  clockTitle.innerText = `${year}년 ${getStr(month)}월 ${getStr(date)}일 ${dayName[day]}요일 ${getStr(hours)}:${getStr(minutes)}:${getStr(seconds)}`;
}
getClock();
setInterval(getClock, 1000); //1초마다 값 업데이트

// 일: /1000밀리초 * 60초 * 60분 * 24시간
// 시간: /1000밀리초 * 60초 * 60분
// 분: /1000밀리초 * 60초
// 초: /1000밀리초
