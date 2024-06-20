import { useEffect, useState } from "react";

export const useDatetime = (
  timeZone = 'UTC'
) => {
  const locale = 'en';
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);  // Update every second
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone,
  };

  const formattedDate = new Intl.DateTimeFormat(locale, formatOptions).format(today);
  const dateParts = formattedDate.split(', ');

  const day = dateParts[0];
  const date = `${day}, ${dateParts[1]}\n\n`;

  const hour = new Intl.DateTimeFormat(locale, { hour: 'numeric', hour12: false, timeZone }).format(today);
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

  const gmtOffset = today.toLocaleTimeString('en-us', { timeZoneName: 'short', timeZone }).split(' ')[2];

  const timeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone };
  let time = new Intl.DateTimeFormat(locale, timeFormatOptions).format(today);
  time = `${time} ${gmtOffset}`;

  return {
    date,
    time,
    wish,
  };
};
