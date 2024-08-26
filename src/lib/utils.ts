import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let wordEnd = "";

  if (day.toString().endsWith("1")) {
    wordEnd = "st";
  } else if (day.toString().endsWith("2")) {
    wordEnd = "nd";
  } else {
    wordEnd = "th";
  }

  return `${day}${wordEnd} ${months[month]}, ${year}`;
};

export const dateExtractor = (date: Date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateObject = new Date(date);
  const today = new Date();

  let dates = days[dateObject.getUTCDay()];

  if (today.getUTCDay() === dateObject.getUTCDay()) dates = "Today";

  return `${dates}`;
};

export const getTime = (time: string) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const dateString = (date: string) => {
  const dateData = new Date(date);
  const day = dateData.getDate();
  const month = dateData.getMonth() + 1;
  const year = dateData.getFullYear();

  return `${year}-${month}-${day}`;
};

// Get the day and not the times of the day
export const filterDayOut = (list: any[]) => {
  let tracker: any[] = [];
  let result: any[] = [];
  list.forEach((item) => {
    if (!tracker.includes(dateString(item.dt_txt))) {
      const weatherObj = {
        day: dateString(item.dt_txt),
        info: item,
      };
      tracker.push(dateString(item.dt_txt));
      result.push(weatherObj);
    }
  });
  return result;
};
