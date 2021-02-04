export function timeAgo(time) {
  const between = (Date.now() - Number(time)) / 1000;
  if (between === 0) {
    return "Just now";
  } else if (between < hour()) {
    return pluralize(between / minute(), "minute");
  } else if (between < day()) {
    return pluralize(between / hour(), "hr");
  } else if (between < month()) {
    return pluralize(between / day(), "day");
  } else if (between < year()) {
    return pluralize(between / month(), "month");
  } else if (between > year()) {
    return pluralize(between / year(), "year");
  }
}

function second() {
  return 1;
}

function minute() {
  return second() * 60;
}

function hour() {
  return minute() * 60;
}

function day() {
  return hour() * 24;
}
function month() {
  return day() * 30;
}
function year() {
  return month() * 12;
}
function pluralize(time, label) {
  const roundedTime = Math.round(time);
  if (roundedTime === 1) {
    return `${roundedTime} ${label} ago`;
  }
  return `${roundedTime} ${label}s ago`;
}

export function formatISODate(date) {
  let originalDate = new Date(date);

  originalDate.setHours(originalDate.getHours() - 6);
  originalDate.setMinutes(originalDate.getMinutes() - 30);
  return originalDate;
}
