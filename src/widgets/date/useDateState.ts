import { useState } from "preact/hooks";
import type { DateMode, DateFormat, DateOrder } from "../../lib/payload";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatDate(date: string, order: DateOrder): string {
  const [y, m, d] = date.split("-");
  switch (order) {
    case "ymd": return `${y}-${m}-${d}`;
    case "dmy": return `${d}-${m}-${y}`;
    case "mdy": return `${m}-${d}-${y}`;
  }
}

function toUnix(date: string, hours: string, minutes: string): number {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y!, m! - 1, d!, Number(hours), Number(minutes)).getTime();
}

function parseTimeParts(str: string): [string, string, string] {
  const p = str.split("-");
  return [p[0] ?? "00", p[1] ?? "00", p[2] ?? "00"];
}

export interface DateStateOpts {
  autoNow?: boolean;
  default?: string;
  min?: string;
  max?: string;
}

export function useDateState(
  mode: DateMode,
  format: DateFormat = "default",
  order: DateOrder = "ymd",
  opts: DateStateOpts = {},
) {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  const useNow = opts.autoNow !== false;

  let initH: string, initM: string, initS: string;
  if (!useNow && opts.default) {
    [initH, initM, initS] = parseTimeParts(opts.default);
  } else if (!useNow) {
    [initH, initM, initS] = ["00", "00", "00"];
  } else {
    [initH, initM, initS] = [pad(now.getHours()), pad(now.getMinutes()), pad(now.getSeconds())];
  }

  const [date, setDate] = useState(today);
  const [hours, setHours] = useState(initH);
  const [minutes, setMinutes] = useState(initM);
  const [dateEnd, setDateEnd] = useState(today);
  const [seconds, setSeconds] = useState(initS);
  const [hoursEnd, setHoursEnd] = useState(useNow ? pad(now.getHours()) : "00");
  const [minutesEnd, setMinutesEnd] = useState(useNow ? pad(now.getMinutes()) : "00");

  function buildResult(): string {
    const div = format === "unix-s" ? 1000 : 1;

    switch (mode) {
      case "date":
        if (format !== "default") return String(Math.floor(toUnix(date, "00", "00") / div));
        return formatDate(date, order);
      case "time":
        if (format !== "default") return String(Math.floor(toUnix(date, hours, minutes) / div));
        return `${hours}-${minutes}`;
      case "time-seconds":
        if (format !== "default") return String(Math.floor(toUnix(date, hours, minutes) / div));
        return `${hours}-${minutes}-${seconds}`;
      case "datetime":
        if (format !== "default") return String(Math.floor(toUnix(date, hours, minutes) / div));
        return `${formatDate(date, order)}_${hours}-${minutes}`;
      case "date-range":
        if (format !== "default") {
          const a = Math.floor(toUnix(date, "00", "00") / div);
          const b = Math.floor(toUnix(dateEnd, "00", "00") / div);
          return `${a}_${b}`;
        }
        return `${formatDate(date, order)}_${formatDate(dateEnd, order)}`;
      case "time-range":
        if (format !== "default") {
          const a = Math.floor(toUnix(date, hours, minutes) / div);
          const b = Math.floor(toUnix(date, hoursEnd, minutesEnd) / div);
          return `${a}_${b}`;
        }
        return `${hours}-${minutes}_${hoursEnd}-${minutesEnd}`;
    }
  }

  return {
    date, setDate,
    hours, setHours,
    minutes, setMinutes,
    seconds, setSeconds,
    dateEnd, setDateEnd,
    hoursEnd, setHoursEnd,
    minutesEnd, setMinutesEnd,
    buildResult,
  };
}
