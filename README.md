# TeleWidget

Beautiful Telegram Mini App widgets for bots — date/time pickers, color pickers, and weekly schedules.

**Live**: [tgwidget.github.io](https://tgwidget.github.io/)

## How it works

1. Your bot generates a widget URL using the SDK
2. User opens the URL as a Telegram Mini App
3. User picks a value (date, color, schedule)
4. Result is sent back to the bot via deep link (`t.me/your_bot?start=VALUE`)

## Widgets

| Widget | Modes | Formats |
|--------|-------|---------|
| **Date** | `date`, `time`, `datetime`, `date-range`, `time-range` | `default`, `unix-s`, `unix-ms` |
| **Color** | — | `hex`, `rgb`, `hsl` |
| **Schedule** | — | `bunch` (56-char weekly format) |

## SDKs

| Language | Package | Repo |
|----------|---------|------|
| Python | `pip install tgwidget` | [tgwidget-python](https://github.com/tgwidget/tgwidget-python) |
| Node.js | `npm install tgwidget` | [tgwidget-node](https://github.com/tgwidget/tgwidget-node) |

### Quick start (Python)

```python
from tgwidget import TgWidget

# Generate widget URL
widget = TgWidget("your_bot").date(mode="datetime")
url = widget.url()
# → https://tgwidget.github.io/?p=...

# Parse result (handles /start prefix automatically)
result = widget.parse("/start 2025-03-15_14-30")
result.datetime_obj  # datetime.datetime(2025, 3, 15, 14, 30)
```

### Quick start (Node.js)

```typescript
import { tgwidget } from "tgwidget";

// Generate widget URL
const widget = tgwidget("your_bot").date({ mode: "datetime" });
const url = widget.url();

// Parse result (handles /start prefix automatically)
const result = widget.parse("/start 2025-03-15_14-30");
result.dateObj  // native Date object
```

## Styling

Widgets support custom styling via the SDK:

```python
url = (
    TgWidget("your_bot")
    .date(mode="date")
    .style(
        color_scheme="dark",
        accent="#FF6600",
        liquid_glass=True,
        adopt_tg_palette=True,
    )
    .url()
)
```

Options: `color_scheme` (`light`/`dark`/`auto`), `accent`, `tint`, `liquid_glass`, `adapt_tg_theme`, `adopt_tg_palette`.

## Development

```bash
bun install
bun run dev
```

Built with [Preact](https://preactjs.com/), [Vite](https://vite.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## License

MIT
