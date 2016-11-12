void function(win) {

  var Dateparse = date => {

    if (typeof date !== 'object') {
      date = new Date(date);
    }

    var dateMap = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };

    for (var key in dateMap) {
      let value = dateMap[key];
      value = value < 10 ? `0${value}` : value;
      dateMap[key] = value.toString();
    }

    var { year, month, day, hour, minutes, seconds } = dateMap;

    const DAY = `${year}${month}${day}`;
    const TIME = `${hour}${minutes}`;

    return [DAY, TIME];
  };
  win.Dateparse = Dateparse;
}(window);
