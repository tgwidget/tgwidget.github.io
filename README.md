# TgWidget

[Русская версия](README.ru.md)

Beautiful Telegram Mini App widgets for bots — date/time pickers, color pickers, and weekly schedules.

**Online Generator**: [tgwidget.github.io](https://tgwidget.github.io/)

## How it works

1. Widget URL is generated via SDK or online generator
2. User opens a Telegram Mini App with this URL button
3. User picks a value (date, color, schedule) and clicks "Confirm" button
4. Result is sent back to the bot via deep link (`t.me/your_bot?start=VALUE`)

## Widgets

| Widget | Modes | Formats |
|--------|-------|---------|
| **Date** | `date`, `time`, `datetime`, `date-range`, `time-range` | `default`, `unix-s`, `unix-ms` |
| **Color** | — | `hex`, `rgb`, `hsl` |
| **Schedule** | — | `range` (56-char weekly range), `single` (28-char daily time) |

## SDKs

| Language | Package | Repo |
|----------|---------|------|
| Python | `pip install tgwidget` | [tgwidget-python](https://github.com/tgwidget/tgwidget-python) |
| Node.js | `npm install tgwidget` | [tgwidget-node](https://github.com/tgwidget/tgwidget-node) |

### Quick start (Node.js)

```typescript
import { tgwidget } from 'tgwidget'

// Generate widget URL
const widget = tgwidget('bot_username').date({ mode: 'datetime' })
const url = widget.url()

// Format hint for users
widget.pattern // 'YYYY-MM-DD HH:MM'

// Parse result (handles /start prefix automatically)
const result = widget.parse('/start 2025-03-15_14-30')
result.dateObj // native Date object
```

### Quick start (Python)

```python
from tgwidget import TgWidget

# Generate widget URL
widget = TgWidget('bot_username').date(mode='datetime')
url = widget.url()

# Format hint for users
widget.pattern  # 'YYYY-MM-DD HH:MM'

# Parse result (handles /start prefix automatically)
result = widget.parse('/start 2025-03-15_14-30')
result.datetime_obj  # datetime.datetime(2025, 3, 15, 14, 30)
```

## Styling

Widgets support custom styling via the SDK:

```typescript
const url = tgwidget('bot_username')
  .date({ mode: 'date' })
  .style({
    colorScheme: 'dark',
    accent: '#FF6600',
    liquidGlass: true,
    adoptTgPalette: true,
  })
  .url()
```

Options: `colorScheme` (`light`/`dark`/`auto`), `accent`, `tint`, `liquidGlass`, `adaptTgTheme`, `adoptTgPalette`.

## Development

```bash
bun install
bun run dev
```

Built with [Preact](https://preactjs.com/), [Vite](https://vite.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## License

MIT
