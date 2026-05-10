# TeleWidget

[English version](README.md)

Красивые виджеты Telegram Mini App для ботов — выбор даты/времени, цвета или недельного расписания.

**Генератор виджетов**: [tgwidget.github.io](https://tgwidget.github.io/)

## Как это работает

1. Создаете URL виджета через генератор или SDK
2. Бот отправляет клавиатуру для открытия Mini App (с тем самым URL виджета)
3. Пользователь выбирает значение (дату, цвет, расписание) и жмет "Подтвердить"
4. Результат отправляется обратно боту через deeplink (`t.me/your_bot?start=VALUE`)

## Виджеты

| Виджет | Режимы | Форматы |
|--------|--------|---------|
| **Дата** | `date`, `time`, `datetime`, `date-range`, `time-range` | `default`, `unix-s`, `unix-ms` |
| **Цвет** | — | `hex`, `rgb`, `hsl` |
| **Расписание** | — | `bunch` (56-символьный недельный формат) |

## SDK

| Язык | Пакет | Репозиторий |
|------|-------|-------------|
| Python | `pip install tgwidget` | [tgwidget-python](https://github.com/tgwidget/tgwidget-python) |
| Node.js | `npm install tgwidget` | [tgwidget-node](https://github.com/tgwidget/tgwidget-node) |

### Быстрый старт (Node.js)

```typescript
import { tgwidget } from 'tgwidget'

// Генерация URL виджета
const widget = tgwidget('bot_username').date({ mode: 'datetime' })
const url = widget.url()

// Парсинг результата (автоматически обрабатывает /start префикс)
const result = widget.parse('/start 2025-03-15_14-30')
result.dateObj // нативный объект Date
```

### Быстрый старт (Python)

```python
from tgwidget import TgWidget

# Генерация URL виджета
widget = TgWidget('bot_username').date(mode='datetime')
url = widget.url()

# Парсинг результата (автоматически обрабатывает /start префикс)
result = widget.parse('/start 2025-03-15_14-30')
result.datetime_obj  # datetime.datetime(2025, 3, 15, 14, 30)
```

## Стилизация

Виджеты поддерживают кастомную стилизацию через SDK:

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

Опции: `colorScheme` (`light`/`dark`/`auto`), `accent`, `tint`, `liquidGlass`, `adaptTgTheme`, `adoptTgPalette`.

## Разработка

```bash
bun install
bun run dev
```

Построен на [Preact](https://preactjs.com/), [Vite](https://vite.dev/) и [Tailwind CSS](https://tailwindcss.com/).

## Лицензия

MIT
