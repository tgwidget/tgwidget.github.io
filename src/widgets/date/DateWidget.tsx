import type { DatePayload } from "../../lib/payload";
import { encodeResult } from "../../lib/payload";
import { submitAndClose, hapticNotification } from "../../lib/tma";
import { useResolvedStyle, cardClass, pageProps, buttonStyle } from "../../lib/style";
import { t } from "../../lib/i18n";
import { ScrollPicker } from "../../components/ScrollPicker";
import { DatePicker } from "../../components/DatePicker";
import { useDateState } from "./useDateState";

interface Props {
  payload: DatePayload;
}

function makeRange(count: number): string[] {
  return Array.from({ length: count }, (_, i) => String(i).padStart(2, "0"));
}

const ALL_HOURS = makeRange(24);
const ALL_MINUTES = makeRange(60);
const ALL_SECONDS = makeRange(60);

function parseMinMax(val: string | undefined): [number, number, number] {
  if (!val) return [-1, -1, -1];
  const p = val.split("-").map(Number);
  return [p[0] ?? 0, p[1] ?? 0, p[2] ?? 0];
}

function clampedTimeArrays(min?: string, max?: string) {
  const [minH, minM, minS] = parseMinMax(min);
  const [maxH, maxM, maxS] = parseMinMax(max);

  const h0 = minH >= 0 ? minH : 0;
  const h1 = maxH >= 0 ? maxH : 23;
  const m0 = minM >= 0 ? minM : 0;
  const m1 = maxM >= 0 ? maxM : 59;
  const s0 = minS >= 0 ? minS : 0;
  const s1 = maxS >= 0 ? maxS : 59;

  return {
    hours: ALL_HOURS.slice(h0, h1 + 1),
    minutes: ALL_MINUTES.slice(m0, m1 + 1),
    seconds: ALL_SECONDS.slice(s0, s1 + 1),
    allMinutes: ALL_MINUTES,
    allSeconds: ALL_SECONDS,
  };
}

function getModeTitle(mode: string): string {
  switch (mode) {
    case "date": return t("select_date");
    case "time": return t("select_time");
    case "time-seconds": return t("select_time_seconds");
    case "datetime": return t("select_datetime");
    case "date-range": return t("select_date_range");
    case "time-range": return t("select_time_range");
    default: return t("select_date");
  }
}

function TimePicker({ label, hours, minutes, seconds, setHours, setMinutes, setSeconds, theme, hourItems, minuteItems, secondItems }: {
  label?: string;
  hours: string;
  minutes: string;
  seconds?: string;
  setHours: (v: string) => void;
  setMinutes: (v: string) => void;
  setSeconds?: (v: string) => void;
  theme?: import("../../lib/style").Theme;
  hourItems?: string[];
  minuteItems?: string[];
  secondItems?: string[];
}) {
  const hItems = hourItems ?? ALL_HOURS;
  const mItems = minuteItems ?? ALL_MINUTES;
  const sItems = secondItems ?? ALL_SECONDS;
  return (
    <div class="flex flex-col gap-2">
      {label && <span class="text-xs font-semibold uppercase tracking-widest" style={{ color: theme?.textMuted ?? "#8E8E93" }}>{label}</span>}
      <div class="flex items-center justify-center gap-1 rounded-2xl py-2" style={{ backgroundColor: theme?.surface ?? "rgba(0,0,0,0.06)" }}>
        <ScrollPicker items={hItems} value={hours} onChange={setHours} width="72px" theme={theme} />
        <span class="text-2xl font-semibold pb-0.5 select-none" style={{ color: theme?.separator ?? "rgba(0,0,0,0.15)" }}>:</span>
        <ScrollPicker items={mItems} value={minutes} onChange={setMinutes} width="72px" theme={theme} />
        {seconds !== undefined && setSeconds && (
          <>
            <span class="text-2xl font-semibold pb-0.5 select-none" style={{ color: theme?.separator ?? "rgba(0,0,0,0.15)" }}>:</span>
            <ScrollPicker items={sItems} value={seconds} onChange={setSeconds} width="72px" theme={theme} />
          </>
        )}
      </div>
    </div>
  );
}

export function DateWidget({ payload }: Props) {
  const s = useResolvedStyle(payload.style);
  const {
    date, setDate, hours, setHours, minutes, setMinutes, seconds, setSeconds,
    dateEnd, setDateEnd, hoursEnd, setHoursEnd, minutesEnd, setMinutesEnd,
    buildResult,
  } = useDateState(payload.mode, payload.format, payload.order, {
    autoNow: payload.autoNow,
    default: payload.default,
    min: payload.min,
    max: payload.max,
    utcOffset: payload.utcOffset,
  });

  const clamped = clampedTimeArrays(payload.min, payload.max);

  const showDate = payload.mode !== "time" && payload.mode !== "time-seconds" && payload.mode !== "time-range";
  const showTime = payload.mode === "time" || payload.mode === "datetime";
  const showTimeSeconds = payload.mode === "time-seconds";
  const showDateEnd = payload.mode === "date-range";
  const showTimeRange = payload.mode === "time-range";

  function handleConfirm() {
    hapticNotification("success");
    submitAndClose(encodeResult(payload, buildResult()));
  }

  return (
    <div {...pageProps(s.tint, s.liquidGlass, s.dark)}>
      <div class={`w-full max-w-sm ${cardClass(s.liquidGlass, s.dark)}`}>
        <h2 class="text-xl font-semibold tracking-tight" style={{ color: s.theme.text }}>
          {getModeTitle(payload.mode)}
        </h2>

        {showDate && !showDateEnd && (
          <DatePicker value={date} onChange={setDate} accent={s.accent} theme={s.theme} />
        )}

        {showDateEnd && (
          <>
            <DatePicker value={date} onChange={setDate} accent={s.accent} label={t("from")} theme={s.theme} />
            <DatePicker value={dateEnd} onChange={setDateEnd} accent={s.accent} label={t("to")} theme={s.theme} />
          </>
        )}

        {showTime && (
          <TimePicker hours={hours} minutes={minutes} setHours={setHours} setMinutes={setMinutes} theme={s.theme} hourItems={clamped.hours} minuteItems={clamped.allMinutes} />
        )}

        {showTimeSeconds && (
          <TimePicker hours={hours} minutes={minutes} seconds={seconds} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} theme={s.theme} hourItems={clamped.hours} minuteItems={clamped.allMinutes} secondItems={clamped.allSeconds} />
        )}

        {showTimeRange && (
          <>
            <TimePicker label={t("from")} hours={hours} minutes={minutes} setHours={setHours} setMinutes={setMinutes} theme={s.theme} hourItems={clamped.hours} minuteItems={clamped.allMinutes} />
            <TimePicker label={t("to")} hours={hoursEnd} minutes={minutesEnd} setHours={setHoursEnd} setMinutes={setMinutesEnd} theme={s.theme} hourItems={clamped.hours} minuteItems={clamped.allMinutes} />
          </>
        )}

        <button
          onClick={handleConfirm}
          style={buttonStyle(s.accent)}
          class="mt-1 w-full rounded-2xl py-4 text-base font-semibold text-white shadow-lg active:scale-95 transition-all duration-150"
        >
          {t("confirm")}
        </button>
      </div>
    </div>
  );
}
