import { useState } from "preact/hooks";
import type { DateKind, DateMode, DateFormat, DateOrder, ColorFormat, ColorScheme, ScheduleFormat, WidgetStyle } from "../lib/payload";

export type WidgetType = "date" | "color" | "schedule";

export interface BuilderState {
  widgetType: WidgetType;
  setWidgetType: (v: WidgetType) => void;

  botUsername: string;
  setBotUsername: (v: string) => void;

  dateKind: DateKind;
  setDateKind: (v: DateKind) => void;

  dateRange: boolean;
  setDateRange: (v: boolean) => void;

  showSeconds: boolean;
  setShowSeconds: (v: boolean) => void;

  dateMode: DateMode;

  dateFormat: DateFormat;
  setDateFormat: (v: DateFormat) => void;

  dateOrder: DateOrder;
  setDateOrder: (v: DateOrder) => void;

  autoNow: boolean;
  setAutoNow: (v: boolean) => void;

  defaultValue: string;
  setDefaultValue: (v: string) => void;

  minValue: string;
  setMinValue: (v: string) => void;

  maxValue: string;
  setMaxValue: (v: string) => void;

  utcOffset: string;
  setUtcOffset: (v: string) => void;

  colorFormat: ColorFormat;
  setColorFormat: (v: ColorFormat) => void;

  scheduleFormat: ScheduleFormat;
  setScheduleFormat: (v: ScheduleFormat) => void;

  liquidGlass: boolean;
  setLiquidGlass: (v: boolean) => void;

  colorScheme: ColorScheme;
  setColorScheme: (v: ColorScheme) => void;

  adaptTgTheme: boolean;
  setAdaptTgTheme: (v: boolean) => void;

  adoptTgPalette: boolean;
  setAdoptTgPalette: (v: boolean) => void;

  accent: string;
  setAccent: (v: string) => void;

  tint: string;
  setTint: (v: string) => void;

  generatedUrl: string;
}

function resolveMode(kind: DateKind, range: boolean, seconds: boolean): DateMode {
  if (range) {
    if (kind === "date") return "date-range";
    if (kind === "time") return "time-range";
  }
  if (kind === "time" && seconds) return "time-seconds";
  return kind;
}

const MIN_UTC_OFFSET_MINUTES = -720;
const MAX_UTC_OFFSET_MINUTES = 840;

function parseUtcOffset(raw: string): number | undefined {
  if (raw.trim() === "") return undefined;
  const n = Number(raw);
  if (!Number.isInteger(n) || n < MIN_UTC_OFFSET_MINUTES || n > MAX_UTC_OFFSET_MINUTES) return undefined;
  return n;
}

export function useBuilderState(): BuilderState {
  const [widgetType, setWidgetType] = useState<WidgetType>("date");
  const [botUsername, setBotUsername] = useState("");
  const [dateKind, setDateKind] = useState<DateKind>("date");
  const [dateRange, setDateRange] = useState(false);
  const [showSeconds, setShowSeconds] = useState(false);
  const [dateFormat, setDateFormat] = useState<DateFormat>("default");
  const [dateOrder, setDateOrder] = useState<DateOrder>("ymd");
  const [autoNow, setAutoNow] = useState(true);
  const [defaultValue, setDefaultValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [utcOffset, setUtcOffset] = useState("");
  const [colorFormat, setColorFormat] = useState<ColorFormat>("hex");
  const [scheduleFormat, setScheduleFormat] = useState<ScheduleFormat>("range");
  const [liquidGlass, setLiquidGlass] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const [adaptTgTheme, setAdaptTgTheme] = useState(false);
  const [adoptTgPalette, setAdoptTgPalette] = useState(false);
  const [accent, setAccent] = useState("#007AFF");
  const [tint, setTint] = useState("#F2F2F7");

  const dateMode = resolveMode(dateKind, dateRange, showSeconds);
  const style: WidgetStyle = { liquidGlass, accent, tint, colorScheme, adaptTgTheme, adoptTgPalette };

  const datePayload: Record<string, unknown> = {
    widget: "date" as const, mode: dateMode, format: dateFormat, order: dateOrder, bot_username: botUsername, style,
  };
  if (!autoNow) datePayload.autoNow = false;
  if (defaultValue) datePayload.default = defaultValue;
  if (minValue) datePayload.min = minValue;
  if (maxValue) datePayload.max = maxValue;
  const parsedUtcOffset = parseUtcOffset(utcOffset);
  if (parsedUtcOffset !== undefined) datePayload.utcOffset = parsedUtcOffset;

  const payload =
    widgetType === "date"
      ? datePayload
      : widgetType === "color"
      ? { widget: "color" as const, format: colorFormat, bot_username: botUsername, style }
      : { widget: "schedule" as const, format: scheduleFormat, bot_username: botUsername, style };

  const p = btoa(JSON.stringify(payload));
  const generatedUrl = `${window.location.origin}${window.location.pathname}?p=${p}`;

  return {
    widgetType, setWidgetType,
    botUsername, setBotUsername,
    dateKind, setDateKind,
    dateRange, setDateRange,
    showSeconds, setShowSeconds,
    dateMode,
    dateFormat, setDateFormat,
    dateOrder, setDateOrder,
    autoNow, setAutoNow,
    defaultValue, setDefaultValue,
    minValue, setMinValue,
    maxValue, setMaxValue,
    utcOffset, setUtcOffset,
    colorFormat, setColorFormat,
    scheduleFormat, setScheduleFormat,
    liquidGlass, setLiquidGlass,
    colorScheme, setColorScheme,
    adaptTgTheme, setAdaptTgTheme,
    adoptTgPalette, setAdoptTgPalette,
    accent, setAccent,
    tint, setTint,
    generatedUrl,
  };
}
