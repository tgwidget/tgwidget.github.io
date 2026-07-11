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

interface NowParts {
  y: number;
  mo: number; // 0-indexed month
  d: number;
  h: number;
  mi: number;
  s: number;
}

// When utcOffset is omitted, reads the device's own local clock (unchanged
// default behavior). When set, reads the wall-clock time for that fixed
// UTC offset instead, regardless of the device's own timezone.
function nowParts(utcOffset?: number): NowParts {
  if (utcOffset === undefined) {
    const now = new Date();
    return { y: now.getFullYear(), mo: now.getMonth(), d: now.getDate(), h: now.getHours(), mi: now.getMinutes(), s: now.getSeconds() };
  }
  const shifted = new Date(Date.now() + utcOffset * 60000);
  return {
    y: shifted.getUTCFullYear(), mo: shifted.getUTCMonth(), d: shifted.getUTCDate(),
    h: shifted.getUTCHours(), mi: shifted.getUTCMinutes(), s: shifted.getUTCSeconds(),
  };
}

// When utcOffset is omitted, builds the timestamp using the device's own
// local timezone (unchanged default behavior). When set, treats the picked
// date/time as wall-clock time in that fixed offset instead.
function toUnix(date: string, hours: string, minutes: string, utcOffset?: number): number {
  const [y, m, d] = date.split("-").map(Number);
  if (utcOffset === undefined) {
    return new Date(y!, m! - 1, d!, Number(hours), Number(minutes)).getTime();
  }
  return Date.UTC(y!, m! - 1, d!, Number(hours), Number(minutes)) - utcOffset * 60000;
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
  utcOffset?: number;
}

export function useDateState(
  mode: DateMode,
  format: DateFormat = "default",
  order: DateOrder = "ymd",
  opts: DateStateOpts = {},
) {
  const np = nowParts(opts.utcOffset);
  const today = `${np.y}-${pad(np.mo + 1)}-${pad(np.d)}`;

  const useNow = opts.autoNow !== false;

  let initH: string, initM: string, initS: string;
  if (!useNow && opts.default) {
    [initH, initM, initS] = parseTimeParts(opts.default);
  } else if (!useNow) {
    [initH, initM, initS] = ["00", "00", "00"];
  } else {
    [initH, initM, initS] = [pad(np.h), pad(np.mi), pad(np.s)];
  }

  const [date, setDate] = useState(today);
  const [hours, setHours] = useState(initH);
  const [minutes, setMinutes] = useState(initM);
  const [dateEnd, setDateEnd] = useState(today);
  const [seconds, setSeconds] = useState(initS);
  const [hoursEnd, setHoursEnd] = useState(useNow ? pad(np.h) : "00");
  const [minutesEnd, setMinutesEnd] = useState(useNow ? pad(np.mi) : "00");

  function buildResult(): string {
    const div = format === "unix-s" ? 1000 : 1;
    const tz = opts.utcOffset;

    switch (mode) {
      case "date":
        if (format !== "default") return String(Math.floor(toUnix(date, "00", "00", tz) / div));
        return formatDate(date, order);
      case "time":
        if (format !== "default") return String(Math.floor(toUnix(date, hours, minutes, tz) / div));
        return `${hours}-${minutes}`;
      case "time-seconds":
        if (format !== "default") return String(Math.floor(toUnix(date, hours, minutes, tz) / div));
        return `${hours}-${minutes}-${seconds}`;
      case "datetime":
        if (format !== "default") return String(Math.floor(toUnix(date, hours, minutes, tz) / div));
        return `${formatDate(date, order)}_${hours}-${minutes}`;
      case "date-range":
        if (format !== "default") {
          const a = Math.floor(toUnix(date, "00", "00", tz) / div);
          const b = Math.floor(toUnix(dateEnd, "00", "00", tz) / div);
          return `${a}_${b}`;
        }
        return `${formatDate(date, order)}_${formatDate(dateEnd, order)}`;
      case "time-range":
        if (format !== "default") {
          const a = Math.floor(toUnix(date, hours, minutes, tz) / div);
          const b = Math.floor(toUnix(date, hoursEnd, minutesEnd, tz) / div);
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
