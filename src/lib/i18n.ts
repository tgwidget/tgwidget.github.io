type TranslationKey =
  | "select_date"
  | "select_time"
  | "select_datetime"
  | "select_date_range"
  | "select_time_seconds"
  | "select_time_range"
  | "select_color"
  | "weekly_schedule"
  | "confirm"
  | "from"
  | "to"
  | "off"
  | "mon"
  | "tue"
  | "wed"
  | "thu"
  | "fri"
  | "sat"
  | "sun"
  | "jan"
  | "feb"
  | "mar"
  | "apr"
  | "may"
  | "jun"
  | "jul"
  | "aug"
  | "sep"
  | "oct"
  | "nov"
  | "dec"
  | "january"
  | "february"
  | "march"
  | "april"
  | "may_full"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december"
  | "mo"
  | "tu"
  | "we"
  | "th"
  | "fr"
  | "sa"
  | "su";

type Translations = Record<TranslationKey, string>;

const en: Translations = {
  select_date: "Select Date",
  select_time: "Select Time",
  select_datetime: "Select Date & Time",
  select_time_seconds: "Select Precise Time",
  select_date_range: "Select Date Range",
  select_time_range: "Select Time Range",
  select_color: "Select Color",
  weekly_schedule: "Weekly Schedule",
  confirm: "Confirm",
  from: "From",
  to: "To",
  off: "Off",
  mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec",
  january: "January", february: "February", march: "March", april: "April",
  may_full: "May", june: "June", july: "July", august: "August",
  september: "September", october: "October", november: "November", december: "December",
  mo: "Mo", tu: "Tu", we: "We", th: "Th", fr: "Fr", sa: "Sa", su: "Su",
};

const ru: Translations = {
  select_date: "Выбрать дату",
  select_time: "Выбрать время",
  select_datetime: "Выбрать дату и время",
  select_time_seconds: "Выбрать точное время",
  select_date_range: "Выбрать период",
  select_time_range: "Выбрать интервал",
  select_color: "Выбрать цвет",
  weekly_schedule: "Расписание на неделю",
  confirm: "Подтвердить",
  from: "С",
  to: "По",
  off: "Выкл",
  mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт", sat: "Сб", sun: "Вс",
  jan: "Янв", feb: "Фев", mar: "Мар", apr: "Апр", may: "Май", jun: "Июн",
  jul: "Июл", aug: "Авг", sep: "Сен", oct: "Окт", nov: "Ноя", dec: "Дек",
  january: "Январь", february: "Февраль", march: "Март", april: "Апрель",
  may_full: "Май", june: "Июнь", july: "Июль", august: "Август",
  september: "Сентябрь", october: "Октябрь", november: "Ноябрь", december: "Декабрь",
  mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб", su: "Вс",
};

const uk: Translations = {
  select_date: "Обрати дату",
  select_time: "Обрати час",
  select_datetime: "Обрати дату і час",
  select_time_seconds: "Обрати точний час",
  select_date_range: "Обрати період",
  select_time_range: "Обрати інтервал",
  select_color: "Обрати колір",
  weekly_schedule: "Розклад на тиждень",
  confirm: "Підтвердити",
  from: "З",
  to: "По",
  off: "Вимк",
  mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт", sat: "Сб", sun: "Нд",
  jan: "Січ", feb: "Лют", mar: "Бер", apr: "Кві", may: "Тра", jun: "Чер",
  jul: "Лип", aug: "Сер", sep: "Вер", oct: "Жов", nov: "Лис", dec: "Гру",
  january: "Січень", february: "Лютий", march: "Березень", april: "Квітень",
  may_full: "Травень", june: "Червень", july: "Липень", august: "Серпень",
  september: "Вересень", october: "Жовтень", november: "Листопад", december: "Грудень",
  mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб", su: "Нд",
};

const de: Translations = {
  select_date: "Datum wählen",
  select_time: "Zeit wählen",
  select_datetime: "Datum & Zeit wählen",
  select_time_seconds: "Genaue Zeit wählen",
  select_date_range: "Zeitraum wählen",
  select_time_range: "Zeitspanne wählen",
  select_color: "Farbe wählen",
  weekly_schedule: "Wochenplan",
  confirm: "Bestätigen",
  from: "Von",
  to: "Bis",
  off: "Aus",
  mon: "Mo", tue: "Di", wed: "Mi", thu: "Do", fri: "Fr", sat: "Sa", sun: "So",
  jan: "Jan", feb: "Feb", mar: "Mär", apr: "Apr", may: "Mai", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", oct: "Okt", nov: "Nov", dec: "Dez",
  january: "Januar", february: "Februar", march: "März", april: "April",
  may_full: "Mai", june: "Juni", july: "Juli", august: "August",
  september: "September", october: "Oktober", november: "November", december: "Dezember",
  mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa", su: "So",
};

const fr: Translations = {
  select_date: "Choisir la date",
  select_time: "Choisir l'heure",
  select_datetime: "Choisir date et heure",
  select_time_seconds: "Choisir l'heure précise",
  select_date_range: "Choisir la période",
  select_time_range: "Choisir l'intervalle",
  select_color: "Choisir la couleur",
  weekly_schedule: "Planning hebdomadaire",
  confirm: "Confirmer",
  from: "De",
  to: "À",
  off: "Désactivé",
  mon: "Lun", tue: "Mar", wed: "Mer", thu: "Jeu", fri: "Ven", sat: "Sam", sun: "Dim",
  jan: "Jan", feb: "Fév", mar: "Mar", apr: "Avr", may: "Mai", jun: "Juin",
  jul: "Juil", aug: "Août", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Déc",
  january: "Janvier", february: "Février", march: "Mars", april: "Avril",
  may_full: "Mai", june: "Juin", july: "Juillet", august: "Août",
  september: "Septembre", october: "Octobre", november: "Novembre", december: "Décembre",
  mo: "Lu", tu: "Ma", we: "Me", th: "Je", fr: "Ve", sa: "Sa", su: "Di",
};

const es: Translations = {
  select_date: "Seleccionar fecha",
  select_time: "Seleccionar hora",
  select_datetime: "Seleccionar fecha y hora",
  select_time_seconds: "Seleccionar hora precisa",
  select_date_range: "Seleccionar período",
  select_time_range: "Seleccionar intervalo",
  select_color: "Seleccionar color",
  weekly_schedule: "Horario semanal",
  confirm: "Confirmar",
  from: "Desde",
  to: "Hasta",
  off: "Apagado",
  mon: "Lun", tue: "Mar", wed: "Mié", thu: "Jue", fri: "Vie", sat: "Sáb", sun: "Dom",
  jan: "Ene", feb: "Feb", mar: "Mar", apr: "Abr", may: "May", jun: "Jun",
  jul: "Jul", aug: "Ago", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dic",
  january: "Enero", february: "Febrero", march: "Marzo", april: "Abril",
  may_full: "Mayo", june: "Junio", july: "Julio", august: "Agosto",
  september: "Septiembre", october: "Octubre", november: "Noviembre", december: "Diciembre",
  mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sá", su: "Do",
};

const pt: Translations = {
  select_date: "Selecionar data",
  select_time: "Selecionar hora",
  select_datetime: "Selecionar data e hora",
  select_time_seconds: "Selecionar hora precisa",
  select_date_range: "Selecionar período",
  select_time_range: "Selecionar intervalo",
  select_color: "Selecionar cor",
  weekly_schedule: "Horário semanal",
  confirm: "Confirmar",
  from: "De",
  to: "Até",
  off: "Desligado",
  mon: "Seg", tue: "Ter", wed: "Qua", thu: "Qui", fri: "Sex", sat: "Sáb", sun: "Dom",
  jan: "Jan", feb: "Fev", mar: "Mar", apr: "Abr", may: "Mai", jun: "Jun",
  jul: "Jul", aug: "Ago", sep: "Set", oct: "Out", nov: "Nov", dec: "Dez",
  january: "Janeiro", february: "Fevereiro", march: "Março", april: "Abril",
  may_full: "Maio", june: "Junho", july: "Julho", august: "Agosto",
  september: "Setembro", october: "Outubro", november: "Novembro", december: "Dezembro",
  mo: "Sg", tu: "Te", we: "Qu", th: "Qi", fr: "Sx", sa: "Sá", su: "Do",
};

const it: Translations = {
  select_date: "Seleziona data",
  select_time: "Seleziona ora",
  select_datetime: "Seleziona data e ora",
  select_time_seconds: "Seleziona ora precisa",
  select_date_range: "Seleziona periodo",
  select_time_range: "Seleziona intervallo",
  select_color: "Seleziona colore",
  weekly_schedule: "Orario settimanale",
  confirm: "Conferma",
  from: "Da",
  to: "A",
  off: "Spento",
  mon: "Lun", tue: "Mar", wed: "Mer", thu: "Gio", fri: "Ven", sat: "Sab", sun: "Dom",
  jan: "Gen", feb: "Feb", mar: "Mar", apr: "Apr", may: "Mag", jun: "Giu",
  jul: "Lug", aug: "Ago", sep: "Set", oct: "Ott", nov: "Nov", dec: "Dic",
  january: "Gennaio", february: "Febbraio", march: "Marzo", april: "Aprile",
  may_full: "Maggio", june: "Giugno", july: "Luglio", august: "Agosto",
  september: "Settembre", october: "Ottobre", november: "Novembre", december: "Dicembre",
  mo: "Lu", tu: "Ma", we: "Me", th: "Gi", fr: "Ve", sa: "Sa", su: "Do",
};

const ar: Translations = {
  select_date: "اختر التاريخ",
  select_time: "اختر الوقت",
  select_datetime: "اختر التاريخ والوقت",
  select_time_seconds: "اختر الوقت الدقيق",
  select_date_range: "اختر الفترة",
  select_time_range: "اختر المدة",
  select_color: "اختر اللون",
  weekly_schedule: "الجدول الأسبوعي",
  confirm: "تأكيد",
  from: "من",
  to: "إلى",
  off: "إيقاف",
  mon: "اثن", tue: "ثلا", wed: "أرب", thu: "خمي", fri: "جمع", sat: "سبت", sun: "أحد",
  jan: "يناير", feb: "فبراير", mar: "مارس", apr: "أبريل", may: "مايو", jun: "يونيو",
  jul: "يوليو", aug: "أغسطس", sep: "سبتمبر", oct: "أكتوبر", nov: "نوفمبر", dec: "ديسمبر",
  january: "يناير", february: "فبراير", march: "مارس", april: "أبريل",
  may_full: "مايو", june: "يونيو", july: "يوليو", august: "أغسطس",
  september: "سبتمبر", october: "أكتوبر", november: "نوفمبر", december: "ديسمبر",
  mo: "اث", tu: "ثل", we: "أر", th: "خم", fr: "جم", sa: "سب", su: "أح",
};

const ja: Translations = {
  select_date: "日付を選択",
  select_time: "時間を選択",
  select_datetime: "日時を選択",
  select_time_seconds: "正確な時間を選択",
  select_date_range: "期間を選択",
  select_time_range: "時間帯を選択",
  select_color: "色を選択",
  weekly_schedule: "週間スケジュール",
  confirm: "確認",
  from: "開始",
  to: "終了",
  off: "オフ",
  mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日",
  jan: "1月", feb: "2月", mar: "3月", apr: "4月", may: "5月", jun: "6月",
  jul: "7月", aug: "8月", sep: "9月", oct: "10月", nov: "11月", dec: "12月",
  january: "1月", february: "2月", march: "3月", april: "4月",
  may_full: "5月", june: "6月", july: "7月", august: "8月",
  september: "9月", october: "10月", november: "11月", december: "12月",
  mo: "月", tu: "火", we: "水", th: "木", fr: "金", sa: "土", su: "日",
};

const ko: Translations = {
  select_date: "날짜 선택",
  select_time: "시간 선택",
  select_datetime: "날짜 및 시간 선택",
  select_time_seconds: "정확한 시간 선택",
  select_date_range: "기간 선택",
  select_time_range: "시간대 선택",
  select_color: "색상 선택",
  weekly_schedule: "주간 일정",
  confirm: "확인",
  from: "시작",
  to: "종료",
  off: "끔",
  mon: "월", tue: "화", wed: "수", thu: "목", fri: "금", sat: "토", sun: "일",
  jan: "1월", feb: "2월", mar: "3월", apr: "4월", may: "5월", jun: "6월",
  jul: "7월", aug: "8월", sep: "9월", oct: "10월", nov: "11월", dec: "12월",
  january: "1월", february: "2월", march: "3월", april: "4월",
  may_full: "5월", june: "6월", july: "7월", august: "8월",
  september: "9월", october: "10월", november: "11월", december: "12월",
  mo: "월", tu: "화", we: "수", th: "목", fr: "금", sa: "토", su: "일",
};

const zh: Translations = {
  select_date: "选择日期",
  select_time: "选择时间",
  select_datetime: "选择日期和时间",
  select_time_seconds: "选择精确时间",
  select_date_range: "选择日期范围",
  select_time_range: "选择时间范围",
  select_color: "选择颜色",
  weekly_schedule: "每周日程",
  confirm: "确认",
  from: "从",
  to: "到",
  off: "关",
  mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六", sun: "日",
  jan: "1月", feb: "2月", mar: "3月", apr: "4月", may: "5月", jun: "6月",
  jul: "7月", aug: "8月", sep: "9月", oct: "10月", nov: "11月", dec: "12月",
  january: "一月", february: "二月", march: "三月", april: "四月",
  may_full: "五月", june: "六月", july: "七月", august: "八月",
  september: "九月", october: "十月", november: "十一月", december: "十二月",
  mo: "一", tu: "二", we: "三", th: "四", fr: "五", sa: "六", su: "日",
};

const pl: Translations = {
  select_date: "Wybierz datę",
  select_time: "Wybierz czas",
  select_datetime: "Wybierz datę i czas",
  select_time_seconds: "Wybierz dokładny czas",
  select_date_range: "Wybierz okres",
  select_time_range: "Wybierz przedział",
  select_color: "Wybierz kolor",
  weekly_schedule: "Plan tygodniowy",
  confirm: "Potwierdź",
  from: "Od",
  to: "Do",
  off: "Wył",
  mon: "Pon", tue: "Wt", wed: "Śr", thu: "Czw", fri: "Pt", sat: "Sob", sun: "Ndz",
  jan: "Sty", feb: "Lut", mar: "Mar", apr: "Kwi", may: "Maj", jun: "Cze",
  jul: "Lip", aug: "Sie", sep: "Wrz", oct: "Paź", nov: "Lis", dec: "Gru",
  january: "Styczeń", february: "Luty", march: "Marzec", april: "Kwiecień",
  may_full: "Maj", june: "Czerwiec", july: "Lipiec", august: "Sierpień",
  september: "Wrzesień", october: "Październik", november: "Listopad", december: "Grudzień",
  mo: "Pn", tu: "Wt", we: "Śr", th: "Cz", fr: "Pt", sa: "Sb", su: "Nd",
};

const nl: Translations = {
  select_date: "Datum kiezen",
  select_time: "Tijd kiezen",
  select_datetime: "Datum en tijd kiezen",
  select_time_seconds: "Precieze tijd kiezen",
  select_date_range: "Periode kiezen",
  select_time_range: "Tijdspanne kiezen",
  select_color: "Kleur kiezen",
  weekly_schedule: "Weekschema",
  confirm: "Bevestigen",
  from: "Van",
  to: "Tot",
  off: "Uit",
  mon: "Ma", tue: "Di", wed: "Wo", thu: "Do", fri: "Vr", sat: "Za", sun: "Zo",
  jan: "Jan", feb: "Feb", mar: "Mrt", apr: "Apr", may: "Mei", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", oct: "Okt", nov: "Nov", dec: "Dec",
  january: "Januari", february: "Februari", march: "Maart", april: "April",
  may_full: "Mei", june: "Juni", july: "Juli", august: "Augustus",
  september: "September", october: "Oktober", november: "November", december: "December",
  mo: "Ma", tu: "Di", we: "Wo", th: "Do", fr: "Vr", sa: "Za", su: "Zo",
};

const tr: Translations = {
  select_date: "Tarih seç",
  select_time: "Saat seç",
  select_datetime: "Tarih ve saat seç",
  select_time_seconds: "Kesin saat seç",
  select_date_range: "Dönem seç",
  select_time_range: "Zaman aralığı seç",
  select_color: "Renk seç",
  weekly_schedule: "Haftalık program",
  confirm: "Onayla",
  from: "Başlangıç",
  to: "Bitiş",
  off: "Kapalı",
  mon: "Pzt", tue: "Sal", wed: "Çar", thu: "Per", fri: "Cum", sat: "Cmt", sun: "Paz",
  jan: "Oca", feb: "Şub", mar: "Mar", apr: "Nis", may: "May", jun: "Haz",
  jul: "Tem", aug: "Ağu", sep: "Eyl", oct: "Eki", nov: "Kas", dec: "Ara",
  january: "Ocak", february: "Şubat", march: "Mart", april: "Nisan",
  may_full: "Mayıs", june: "Haziran", july: "Temmuz", august: "Ağustos",
  september: "Eylül", october: "Ekim", november: "Kasım", december: "Aralık",
  mo: "Pt", tu: "Sa", we: "Ça", th: "Pe", fr: "Cu", sa: "Ct", su: "Pz",
};

const hi: Translations = {
  select_date: "तारीख चुनें",
  select_time: "समय चुनें",
  select_datetime: "तारीख और समय चुनें",
  select_time_seconds: "सटीक समय चुनें",
  select_date_range: "अवधि चुनें",
  select_time_range: "समय सीमा चुनें",
  select_color: "रंग चुनें",
  weekly_schedule: "साप्ताहिक कार्यक्रम",
  confirm: "पुष्टि करें",
  from: "से",
  to: "तक",
  off: "बंद",
  mon: "सोम", tue: "मंग", wed: "बुध", thu: "गुरु", fri: "शुक्र", sat: "शनि", sun: "रवि",
  jan: "जन", feb: "फर", mar: "मार्च", apr: "अप्रैल", may: "मई", jun: "जून",
  jul: "जुल", aug: "अग", sep: "सित", oct: "अक्ट", nov: "नव", dec: "दिस",
  january: "जनवरी", february: "फरवरी", march: "मार्च", april: "अप्रैल",
  may_full: "मई", june: "जून", july: "जुलाई", august: "अगस्त",
  september: "सितंबर", october: "अक्टूबर", november: "नवंबर", december: "दिसंबर",
  mo: "सो", tu: "मं", we: "बु", th: "गु", fr: "शु", sa: "श", su: "र",
};

const id: Translations = {
  select_date: "Pilih tanggal",
  select_time: "Pilih waktu",
  select_datetime: "Pilih tanggal & waktu",
  select_time_seconds: "Pilih waktu tepat",
  select_date_range: "Pilih rentang tanggal",
  select_time_range: "Pilih rentang waktu",
  select_color: "Pilih warna",
  weekly_schedule: "Jadwal mingguan",
  confirm: "Konfirmasi",
  from: "Dari",
  to: "Sampai",
  off: "Mati",
  mon: "Sen", tue: "Sel", wed: "Rab", thu: "Kam", fri: "Jum", sat: "Sab", sun: "Min",
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "Mei", jun: "Jun",
  jul: "Jul", aug: "Agt", sep: "Sep", oct: "Okt", nov: "Nov", dec: "Des",
  january: "Januari", february: "Februari", march: "Maret", april: "April",
  may_full: "Mei", june: "Juni", july: "Juli", august: "Agustus",
  september: "September", october: "Oktober", november: "November", december: "Desember",
  mo: "Sn", tu: "Sl", we: "Rb", th: "Km", fr: "Jm", sa: "Sb", su: "Mg",
};

const th: Translations = {
  select_date: "เลือกวันที่",
  select_time: "เลือกเวลา",
  select_datetime: "เลือกวันที่และเวลา",
  select_time_seconds: "เลือกเวลาที่แม่นยำ",
  select_date_range: "เลือกช่วงวันที่",
  select_time_range: "เลือกช่วงเวลา",
  select_color: "เลือกสี",
  weekly_schedule: "ตารางประจำสัปดาห์",
  confirm: "ยืนยัน",
  from: "จาก",
  to: "ถึง",
  off: "ปิด",
  mon: "จ.", tue: "อ.", wed: "พ.", thu: "พฤ.", fri: "ศ.", sat: "ส.", sun: "อา.",
  jan: "ม.ค.", feb: "ก.พ.", mar: "มี.ค.", apr: "เม.ย.", may: "พ.ค.", jun: "มิ.ย.",
  jul: "ก.ค.", aug: "ส.ค.", sep: "ก.ย.", oct: "ต.ค.", nov: "พ.ย.", dec: "ธ.ค.",
  january: "มกราคม", february: "กุมภาพันธ์", march: "มีนาคม", april: "เมษายน",
  may_full: "พฤษภาคม", june: "มิถุนายน", july: "กรกฎาคม", august: "สิงหาคม",
  september: "กันยายน", october: "ตุลาคม", november: "พฤศจิกายน", december: "ธันวาคม",
  mo: "จ", tu: "อ", we: "พ", th: "พฤ", fr: "ศ", sa: "ส", su: "อา",
};

const vi: Translations = {
  select_date: "Chọn ngày",
  select_time: "Chọn giờ",
  select_datetime: "Chọn ngày và giờ",
  select_time_seconds: "Chọn giờ chính xác",
  select_date_range: "Chọn khoảng ngày",
  select_time_range: "Chọn khoảng giờ",
  select_color: "Chọn màu",
  weekly_schedule: "Lịch tuần",
  confirm: "Xác nhận",
  from: "Từ",
  to: "Đến",
  off: "Tắt",
  mon: "T2", tue: "T3", wed: "T4", thu: "T5", fri: "T6", sat: "T7", sun: "CN",
  jan: "Th1", feb: "Th2", mar: "Th3", apr: "Th4", may: "Th5", jun: "Th6",
  jul: "Th7", aug: "Th8", sep: "Th9", oct: "Th10", nov: "Th11", dec: "Th12",
  january: "Tháng 1", february: "Tháng 2", march: "Tháng 3", april: "Tháng 4",
  may_full: "Tháng 5", june: "Tháng 6", july: "Tháng 7", august: "Tháng 8",
  september: "Tháng 9", october: "Tháng 10", november: "Tháng 11", december: "Tháng 12",
  mo: "T2", tu: "T3", we: "T4", th: "T5", fr: "T6", sa: "T7", su: "CN",
};

const fa: Translations = {
  select_date: "انتخاب تاریخ",
  select_time: "انتخاب زمان",
  select_datetime: "انتخاب تاریخ و زمان",
  select_time_seconds: "انتخاب زمان دقیق",
  select_date_range: "انتخاب بازه تاریخ",
  select_time_range: "انتخاب بازه زمانی",
  select_color: "انتخاب رنگ",
  weekly_schedule: "برنامه هفتگی",
  confirm: "تایید",
  from: "از",
  to: "تا",
  off: "خاموش",
  mon: "دوش", tue: "سش", wed: "چهار", thu: "پنج", fri: "جمعه", sat: "شنبه", sun: "یکش",
  jan: "ژانویه", feb: "فوریه", mar: "مارس", apr: "آوریل", may: "مه", jun: "ژوئن",
  jul: "ژوئیه", aug: "اوت", sep: "سپتامبر", oct: "اکتبر", nov: "نوامبر", dec: "دسامبر",
  january: "ژانویه", february: "فوریه", march: "مارس", april: "آوریل",
  may_full: "مه", june: "ژوئن", july: "ژوئیه", august: "اوت",
  september: "سپتامبر", october: "اکتبر", november: "نوامبر", december: "دسامبر",
  mo: "د", tu: "س", we: "چ", th: "پ", fr: "ج", sa: "ش", su: "ی",
};

const uz: Translations = {
  select_date: "Sanani tanlang",
  select_time: "Vaqtni tanlang",
  select_datetime: "Sana va vaqtni tanlang",
  select_time_seconds: "Aniq vaqtni tanlang",
  select_date_range: "Davrni tanlang",
  select_time_range: "Vaqt oralig'ini tanlang",
  select_color: "Rangni tanlang",
  weekly_schedule: "Haftalik jadval",
  confirm: "Tasdiqlash",
  from: "Dan",
  to: "Gacha",
  off: "O'chiq",
  mon: "Dush", tue: "Sesh", wed: "Chor", thu: "Pay", fri: "Jum", sat: "Shan", sun: "Yak",
  jan: "Yan", feb: "Fev", mar: "Mar", apr: "Apr", may: "May", jun: "Iyun",
  jul: "Iyul", aug: "Avg", sep: "Sen", oct: "Okt", nov: "Noy", dec: "Dek",
  january: "Yanvar", february: "Fevral", march: "Mart", april: "Aprel",
  may_full: "May", june: "Iyun", july: "Iyul", august: "Avgust",
  september: "Sentabr", october: "Oktabr", november: "Noyabr", december: "Dekabr",
  mo: "Du", tu: "Se", we: "Ch", th: "Pa", fr: "Ju", sa: "Sh", su: "Ya",
};

const kk: Translations = {
  select_date: "Күнді таңдау",
  select_time: "Уақытты таңдау",
  select_datetime: "Күн мен уақытты таңдау",
  select_time_seconds: "Нақты уақытты таңдау",
  select_date_range: "Кезеңді таңдау",
  select_time_range: "Уақыт аралығын таңдау",
  select_color: "Түсті таңдау",
  weekly_schedule: "Апталық кесте",
  confirm: "Растау",
  from: "Бастап",
  to: "Дейін",
  off: "Өшірулі",
  mon: "Дүй", tue: "Сей", wed: "Сәр", thu: "Бей", fri: "Жұм", sat: "Сен", sun: "Жек",
  jan: "Қаң", feb: "Ақп", mar: "Нау", apr: "Сәу", may: "Мам", jun: "Мау",
  jul: "Шіл", aug: "Там", sep: "Қыр", oct: "Қаз", nov: "Қар", dec: "Жел",
  january: "Қаңтар", february: "Ақпан", march: "Наурыз", april: "Сәуір",
  may_full: "Мамыр", june: "Маусым", july: "Шілде", august: "Тамыз",
  september: "Қыркүйек", october: "Қазан", november: "Қараша", december: "Желтоқсан",
  mo: "Дс", tu: "Сс", we: "Ср", th: "Бс", fr: "Жм", sa: "Сб", su: "Жк",
};

const be: Translations = {
  select_date: "Абраць дату",
  select_time: "Абраць час",
  select_datetime: "Абраць дату і час",
  select_time_seconds: "Абраць дакладны час",
  select_date_range: "Абраць перыяд",
  select_time_range: "Абраць інтэрвал",
  select_color: "Абраць колер",
  weekly_schedule: "Тыднёвы расклад",
  confirm: "Пацвердзіць",
  from: "З",
  to: "Да",
  off: "Выкл",
  mon: "Пн", tue: "Аў", wed: "Ср", thu: "Чц", fri: "Пт", sat: "Сб", sun: "Нд",
  jan: "Сту", feb: "Лют", mar: "Сак", apr: "Кра", may: "Тра", jun: "Чэр",
  jul: "Ліп", aug: "Жні", sep: "Вер", oct: "Кас", nov: "Ліс", dec: "Сне",
  january: "Студзень", february: "Люты", march: "Сакавік", april: "Красавік",
  may_full: "Травень", june: "Чэрвень", july: "Ліпень", august: "Жнівень",
  september: "Верасень", october: "Кастрычнік", november: "Лістапад", december: "Снежань",
  mo: "Пн", tu: "Аў", we: "Ср", th: "Чц", fr: "Пт", sa: "Сб", su: "Нд",
};

const ms: Translations = {
  select_date: "Pilih tarikh",
  select_time: "Pilih masa",
  select_datetime: "Pilih tarikh & masa",
  select_time_seconds: "Pilih masa tepat",
  select_date_range: "Pilih julat tarikh",
  select_time_range: "Pilih julat masa",
  select_color: "Pilih warna",
  weekly_schedule: "Jadual mingguan",
  confirm: "Sahkan",
  from: "Dari",
  to: "Hingga",
  off: "Mati",
  mon: "Isn", tue: "Sel", wed: "Rab", thu: "Kha", fri: "Jum", sat: "Sab", sun: "Ahd",
  jan: "Jan", feb: "Feb", mar: "Mac", apr: "Apr", may: "Mei", jun: "Jun",
  jul: "Jul", aug: "Ogo", sep: "Sep", oct: "Okt", nov: "Nov", dec: "Dis",
  january: "Januari", february: "Februari", march: "Mac", april: "April",
  may_full: "Mei", june: "Jun", july: "Julai", august: "Ogos",
  september: "September", october: "Oktober", november: "November", december: "Disember",
  mo: "Is", tu: "Sl", we: "Rb", th: "Kh", fr: "Jm", sa: "Sb", su: "Ah",
};

const ca: Translations = {
  select_date: "Selecciona la data",
  select_time: "Selecciona l'hora",
  select_datetime: "Selecciona data i hora",
  select_time_seconds: "Selecciona l'hora precisa",
  select_date_range: "Selecciona el període",
  select_time_range: "Selecciona l'interval",
  select_color: "Selecciona el color",
  weekly_schedule: "Horari setmanal",
  confirm: "Confirmar",
  from: "Des de",
  to: "Fins a",
  off: "Apagat",
  mon: "Dl", tue: "Dt", wed: "Dc", thu: "Dj", fri: "Dv", sat: "Ds", sun: "Dg",
  jan: "Gen", feb: "Feb", mar: "Març", apr: "Abr", may: "Maig", jun: "Juny",
  jul: "Jul", aug: "Ag", sep: "Set", oct: "Oct", nov: "Nov", dec: "Des",
  january: "Gener", february: "Febrer", march: "Març", april: "Abril",
  may_full: "Maig", june: "Juny", july: "Juliol", august: "Agost",
  september: "Setembre", october: "Octubre", november: "Novembre", december: "Desembre",
  mo: "Dl", tu: "Dt", we: "Dc", th: "Dj", fr: "Dv", sa: "Ds", su: "Dg",
};

const hu: Translations = {
  select_date: "Dátum kiválasztása",
  select_time: "Idő kiválasztása",
  select_datetime: "Dátum és idő kiválasztása",
  select_time_seconds: "Pontos idő kiválasztása",
  select_date_range: "Időszak kiválasztása",
  select_time_range: "Időtartam kiválasztása",
  select_color: "Szín kiválasztása",
  weekly_schedule: "Heti beosztás",
  confirm: "Megerősítés",
  from: "Ettől",
  to: "Eddig",
  off: "Ki",
  mon: "Hé", tue: "Ke", wed: "Sze", thu: "Csü", fri: "Pé", sat: "Szo", sun: "Va",
  jan: "Jan", feb: "Feb", mar: "Már", apr: "Ápr", may: "Máj", jun: "Jún",
  jul: "Júl", aug: "Aug", sep: "Sze", oct: "Okt", nov: "Nov", dec: "Dec",
  january: "Január", february: "Február", march: "Március", april: "Április",
  may_full: "Május", june: "Június", july: "Július", august: "Augusztus",
  september: "Szeptember", october: "Október", november: "November", december: "December",
  mo: "H", tu: "K", we: "Sz", th: "Cs", fr: "P", sa: "Sz", su: "V",
};

const cs: Translations = {
  select_date: "Vybrat datum",
  select_time: "Vybrat čas",
  select_datetime: "Vybrat datum a čas",
  select_time_seconds: "Vybrat přesný čas",
  select_date_range: "Vybrat období",
  select_time_range: "Vybrat časový úsek",
  select_color: "Vybrat barvu",
  weekly_schedule: "Týdenní rozvrh",
  confirm: "Potvrdit",
  from: "Od",
  to: "Do",
  off: "Vyp",
  mon: "Po", tue: "Út", wed: "St", thu: "Čt", fri: "Pá", sat: "So", sun: "Ne",
  jan: "Led", feb: "Úno", mar: "Bře", apr: "Dub", may: "Kvě", jun: "Čer",
  jul: "Črc", aug: "Srp", sep: "Zář", oct: "Říj", nov: "Lis", dec: "Pro",
  january: "Leden", february: "Únor", march: "Březen", april: "Duben",
  may_full: "Květen", june: "Červen", july: "Červenec", august: "Srpen",
  september: "Září", october: "Říjen", november: "Listopad", december: "Prosinec",
  mo: "Po", tu: "Út", we: "St", th: "Čt", fr: "Pá", sa: "So", su: "Ne",
};

const ro: Translations = {
  select_date: "Selectează data",
  select_time: "Selectează ora",
  select_datetime: "Selectează data și ora",
  select_time_seconds: "Selectează ora exactă",
  select_date_range: "Selectează perioada",
  select_time_range: "Selectează intervalul",
  select_color: "Selectează culoarea",
  weekly_schedule: "Program săptămânal",
  confirm: "Confirmă",
  from: "De la",
  to: "Până la",
  off: "Oprit",
  mon: "Lun", tue: "Mar", wed: "Mie", thu: "Joi", fri: "Vin", sat: "Sâm", sun: "Dum",
  jan: "Ian", feb: "Feb", mar: "Mar", apr: "Apr", may: "Mai", jun: "Iun",
  jul: "Iul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec",
  january: "Ianuarie", february: "Februarie", march: "Martie", april: "Aprilie",
  may_full: "Mai", june: "Iunie", july: "Iulie", august: "August",
  september: "Septembrie", october: "Octombrie", november: "Noiembrie", december: "Decembrie",
  mo: "Lu", tu: "Ma", we: "Mi", th: "Jo", fr: "Vi", sa: "Sâ", su: "Du",
};

const sv: Translations = {
  select_date: "Välj datum",
  select_time: "Välj tid",
  select_datetime: "Välj datum och tid",
  select_time_seconds: "Välj exakt tid",
  select_date_range: "Välj period",
  select_time_range: "Välj tidsintervall",
  select_color: "Välj färg",
  weekly_schedule: "Veckoschema",
  confirm: "Bekräfta",
  from: "Från",
  to: "Till",
  off: "Av",
  mon: "Mån", tue: "Tis", wed: "Ons", thu: "Tor", fri: "Fre", sat: "Lör", sun: "Sön",
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "Maj", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", oct: "Okt", nov: "Nov", dec: "Dec",
  january: "Januari", february: "Februari", march: "Mars", april: "April",
  may_full: "Maj", june: "Juni", july: "Juli", august: "Augusti",
  september: "September", october: "Oktober", november: "November", december: "December",
  mo: "Må", tu: "Ti", we: "On", th: "To", fr: "Fr", sa: "Lö", su: "Sö",
};

const fi: Translations = {
  select_date: "Valitse päivä",
  select_time: "Valitse aika",
  select_datetime: "Valitse päivä ja aika",
  select_time_seconds: "Valitse tarkka aika",
  select_date_range: "Valitse ajanjakso",
  select_time_range: "Valitse aikaväli",
  select_color: "Valitse väri",
  weekly_schedule: "Viikkoaikataulu",
  confirm: "Vahvista",
  from: "Alkaen",
  to: "Asti",
  off: "Pois",
  mon: "Ma", tue: "Ti", wed: "Ke", thu: "To", fri: "Pe", sat: "La", sun: "Su",
  jan: "Tam", feb: "Hel", mar: "Maa", apr: "Huh", may: "Tou", jun: "Kes",
  jul: "Hei", aug: "Elo", sep: "Syy", oct: "Lok", nov: "Mar", dec: "Jou",
  january: "Tammikuu", february: "Helmikuu", march: "Maaliskuu", april: "Huhtikuu",
  may_full: "Toukokuu", june: "Kesäkuu", july: "Heinäkuu", august: "Elokuu",
  september: "Syyskuu", october: "Lokakuu", november: "Marraskuu", december: "Joulukuu",
  mo: "Ma", tu: "Ti", we: "Ke", th: "To", fr: "Pe", sa: "La", su: "Su",
};

const da: Translations = {
  select_date: "Vælg dato",
  select_time: "Vælg tidspunkt",
  select_datetime: "Vælg dato og tid",
  select_time_seconds: "Vælg præcis tid",
  select_date_range: "Vælg periode",
  select_time_range: "Vælg tidsinterval",
  select_color: "Vælg farve",
  weekly_schedule: "Ugentlig plan",
  confirm: "Bekræft",
  from: "Fra",
  to: "Til",
  off: "Fra",
  mon: "Man", tue: "Tir", wed: "Ons", thu: "Tor", fri: "Fre", sat: "Lør", sun: "Søn",
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "Maj", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", oct: "Okt", nov: "Nov", dec: "Dec",
  january: "Januar", february: "Februar", march: "Marts", april: "April",
  may_full: "Maj", june: "Juni", july: "Juli", august: "August",
  september: "September", october: "Oktober", november: "November", december: "December",
  mo: "Ma", tu: "Ti", we: "On", th: "To", fr: "Fr", sa: "Lø", su: "Sø",
};

const el: Translations = {
  select_date: "Επιλογή ημερομηνίας",
  select_time: "Επιλογή ώρας",
  select_datetime: "Επιλογή ημερομηνίας & ώρας",
  select_time_seconds: "Επιλογή ακριβούς ώρας",
  select_date_range: "Επιλογή περιόδου",
  select_time_range: "Επιλογή χρονικού εύρους",
  select_color: "Επιλογή χρώματος",
  weekly_schedule: "Εβδομαδιαίο πρόγραμμα",
  confirm: "Επιβεβαίωση",
  from: "Από",
  to: "Έως",
  off: "Ανενεργό",
  mon: "Δευ", tue: "Τρί", wed: "Τετ", thu: "Πέμ", fri: "Παρ", sat: "Σάβ", sun: "Κυρ",
  jan: "Ιαν", feb: "Φεβ", mar: "Μάρ", apr: "Απρ", may: "Μάι", jun: "Ιούν",
  jul: "Ιούλ", aug: "Αύγ", sep: "Σεπ", oct: "Οκτ", nov: "Νοέ", dec: "Δεκ",
  january: "Ιανουάριος", february: "Φεβρουάριος", march: "Μάρτιος", april: "Απρίλιος",
  may_full: "Μάιος", june: "Ιούνιος", july: "Ιούλιος", august: "Αύγουστος",
  september: "Σεπτέμβριος", october: "Οκτώβριος", november: "Νοέμβριος", december: "Δεκέμβριος",
  mo: "Δε", tu: "Τρ", we: "Τε", th: "Πε", fr: "Πα", sa: "Σα", su: "Κυ",
};

const bg: Translations = {
  select_date: "Изберете дата",
  select_time: "Изберете час",
  select_datetime: "Изберете дата и час",
  select_time_seconds: "Изберете точен час",
  select_date_range: "Изберете период",
  select_time_range: "Изберете интервал",
  select_color: "Изберете цвят",
  weekly_schedule: "Седмичен график",
  confirm: "Потвърди",
  from: "От",
  to: "До",
  off: "Изкл",
  mon: "Пон", tue: "Вто", wed: "Сря", thu: "Чет", fri: "Пет", sat: "Съб", sun: "Нед",
  jan: "Яну", feb: "Фев", mar: "Мар", apr: "Апр", may: "Май", jun: "Юни",
  jul: "Юли", aug: "Авг", sep: "Сеп", oct: "Окт", nov: "Ное", dec: "Дек",
  january: "Януари", february: "Февруари", march: "Март", april: "Април",
  may_full: "Май", june: "Юни", july: "Юли", august: "Август",
  september: "Септември", october: "Октомври", november: "Ноември", december: "Декември",
  mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб", su: "Нд",
};

const hr: Translations = {
  select_date: "Odaberi datum",
  select_time: "Odaberi vrijeme",
  select_datetime: "Odaberi datum i vrijeme",
  select_time_seconds: "Odaberi točno vrijeme",
  select_date_range: "Odaberi razdoblje",
  select_time_range: "Odaberi vremenski raspon",
  select_color: "Odaberi boju",
  weekly_schedule: "Tjedni raspored",
  confirm: "Potvrdi",
  from: "Od",
  to: "Do",
  off: "Isključeno",
  mon: "Pon", tue: "Uto", wed: "Sri", thu: "Čet", fri: "Pet", sat: "Sub", sun: "Ned",
  jan: "Sij", feb: "Vlj", mar: "Ožu", apr: "Tra", may: "Svi", jun: "Lip",
  jul: "Srp", aug: "Kol", sep: "Ruj", oct: "Lis", nov: "Stu", dec: "Pro",
  january: "Siječanj", february: "Veljača", march: "Ožujak", april: "Travanj",
  may_full: "Svibanj", june: "Lipanj", july: "Srpanj", august: "Kolovoz",
  september: "Rujan", october: "Listopad", november: "Studeni", december: "Prosinac",
  mo: "Po", tu: "Ut", we: "Sr", th: "Če", fr: "Pe", sa: "Su", su: "Ne",
};

const sk: Translations = {
  select_date: "Vybrať dátum",
  select_time: "Vybrať čas",
  select_datetime: "Vybrať dátum a čas",
  select_time_seconds: "Vybrať presný čas",
  select_date_range: "Vybrať obdobie",
  select_time_range: "Vybrať časový úsek",
  select_color: "Vybrať farbu",
  weekly_schedule: "Týždenný rozvrh",
  confirm: "Potvrdiť",
  from: "Od",
  to: "Do",
  off: "Vyp",
  mon: "Po", tue: "Ut", wed: "St", thu: "Št", fri: "Pi", sat: "So", sun: "Ne",
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "Máj", jun: "Jún",
  jul: "Júl", aug: "Aug", sep: "Sep", oct: "Okt", nov: "Nov", dec: "Dec",
  january: "Január", february: "Február", march: "Marec", april: "Apríl",
  may_full: "Máj", june: "Jún", july: "Júl", august: "August",
  september: "September", october: "Október", november: "November", december: "December",
  mo: "Po", tu: "Ut", we: "St", th: "Št", fr: "Pi", sa: "So", su: "Ne",
};

const sr: Translations = {
  select_date: "Изаберите датум",
  select_time: "Изаберите време",
  select_datetime: "Изаберите датум и време",
  select_time_seconds: "Изаберите тачно време",
  select_date_range: "Изаберите период",
  select_time_range: "Изаберите интервал",
  select_color: "Изаберите боју",
  weekly_schedule: "Недељни распоред",
  confirm: "Потврди",
  from: "Од",
  to: "До",
  off: "Искл",
  mon: "Пон", tue: "Уто", wed: "Сре", thu: "Чет", fri: "Пет", sat: "Суб", sun: "Нед",
  jan: "Јан", feb: "Феб", mar: "Мар", apr: "Апр", may: "Мај", jun: "Јун",
  jul: "Јул", aug: "Авг", sep: "Сеп", oct: "Окт", nov: "Нов", dec: "Дец",
  january: "Јануар", february: "Фебруар", march: "Март", april: "Април",
  may_full: "Мај", june: "Јун", july: "Јул", august: "Август",
  september: "Септембар", october: "Октобар", november: "Новембар", december: "Децембар",
  mo: "Пн", tu: "Ут", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб", su: "Нд",
};

const he: Translations = {
  select_date: "בחר תאריך",
  select_time: "בחר שעה",
  select_datetime: "בחר תאריך ושעה",
  select_time_seconds: "בחר שעה מדויקת",
  select_date_range: "בחר תקופה",
  select_time_range: "בחר טווח זמן",
  select_color: "בחר צבע",
  weekly_schedule: "לוח שבועי",
  confirm: "אישור",
  from: "מ",
  to: "עד",
  off: "כבוי",
  mon: "ב׳", tue: "ג׳", wed: "ד׳", thu: "ה׳", fri: "ו׳", sat: "ש׳", sun: "א׳",
  jan: "ינו", feb: "פבר", mar: "מרץ", apr: "אפר", may: "מאי", jun: "יוני",
  jul: "יולי", aug: "אוג", sep: "ספט", oct: "אוק", nov: "נוב", dec: "דצמ",
  january: "ינואר", february: "פברואר", march: "מרץ", april: "אפריל",
  may_full: "מאי", june: "יוני", july: "יולי", august: "אוגוסט",
  september: "ספטמבר", october: "אוקטובר", november: "נובמבר", december: "דצמבר",
  mo: "ב", tu: "ג", we: "ד", th: "ה", fr: "ו", sa: "ש", su: "א",
};

const bn: Translations = {
  select_date: "তারিখ নির্বাচন করুন",
  select_time: "সময় নির্বাচন করুন",
  select_datetime: "তারিখ ও সময় নির্বাচন করুন",
  select_time_seconds: "সুনির্দিষ্ট সময় নির্বাচন করুন",
  select_date_range: "সময়কাল নির্বাচন করুন",
  select_time_range: "সময়সীমা নির্বাচন করুন",
  select_color: "রঙ নির্বাচন করুন",
  weekly_schedule: "সাপ্তাহিক সূচি",
  confirm: "নিশ্চিত করুন",
  from: "থেকে",
  to: "পর্যন্ত",
  off: "বন্ধ",
  mon: "সোম", tue: "মঙ্গ", wed: "বুধ", thu: "বৃহ", fri: "শুক্র", sat: "শনি", sun: "রবি",
  jan: "জানু", feb: "ফেব", mar: "মার্চ", apr: "এপ্রি", may: "মে", jun: "জুন",
  jul: "জুল", aug: "আগ", sep: "সেপ", oct: "অক্ট", nov: "নভে", dec: "ডিসে",
  january: "জানুয়ারি", february: "ফেব্রুয়ারি", march: "মার্চ", april: "এপ্রিল",
  may_full: "মে", june: "জুন", july: "জুলাই", august: "আগস্ট",
  september: "সেপ্টেম্বর", october: "অক্টোবর", november: "নভেম্বর", december: "ডিসেম্বর",
  mo: "সো", tu: "ম", we: "বু", th: "বৃ", fr: "শু", sa: "শ", su: "র",
};

const LOCALE_MAP: Record<string, Translations> = {
  en, ru, uk, de, fr, es, pt, it, ar, ja, ko, zh,
  pl, nl, tr, hi, id, th, vi, fa, uz, kk, be, ms,
  ca, hu, cs, ro, sv, fi, da, el, bg, hr, sk, sr, he, bn,
  // Aliases
  "pt-br": pt, "zh-hans": zh, "zh-hant": zh, "nb": da, "nn": da,
};

let currentLocale: string = "en";
let currentTranslations: Translations = en;

function detectLanguage(): string {
  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (tgUser?.language_code) return tgUser.language_code;
  const nav = navigator.language || (navigator as { userLanguage?: string }).userLanguage || "en";
  return nav.split("-")[0] ?? "en";
}

export function initLocale(): void {
  const lang = detectLanguage().toLowerCase();
  currentLocale = lang;
  currentTranslations = LOCALE_MAP[lang] ?? LOCALE_MAP[lang.split("-")[0] ?? "en"] ?? en;
}

export function t(key: TranslationKey): string {
  return currentTranslations[key];
}

export function getMonthsShort(): string[] {
  return [t("jan"), t("feb"), t("mar"), t("apr"), t("may"), t("jun"),
          t("jul"), t("aug"), t("sep"), t("oct"), t("nov"), t("dec")];
}

export function getMonthsFull(): string[] {
  return [t("january"), t("february"), t("march"), t("april"), t("may_full"), t("june"),
          t("july"), t("august"), t("september"), t("october"), t("november"), t("december")];
}

export function getWeekdaysShort(): string[] {
  return [t("mo"), t("tu"), t("we"), t("th"), t("fr"), t("sa"), t("su")];
}

export function getDaysShort(): string[] {
  return [t("mon"), t("tue"), t("wed"), t("thu"), t("fri"), t("sat"), t("sun")];
}

export function getLocale(): string {
  return currentLocale;
}
