# راهنمای استفاده از بسته مرجع

این پوشه را بدون PDF کتاب در مخزن `big-english-2-adventure` آپلود کنید.

## روش ساده آپلود

1. وارد مخزن GitHub شوید.
2. گزینه `Add file` و سپس `Upload files` را انتخاب کنید.
3. محتوای داخل این پوشه را با حفظ ساختار پوشه‌ها آپلود کنید.
4. پیام Commit را بنویسید:

   `Add structured Big English 2 curriculum reference`

5. تغییرات را روی شاخه `main` ثبت کنید.
6. در Codex، Environment متصل به همین مخزن را انتخاب کنید.
7. هیچ PDFای به Codex ضمیمه نکنید.
8. متن فایل `CODEX-FIRST-TASK.md` را به‌عنوان اولین Task اجرا کنید.

## ساختار مورد انتظار در GitHub

```text
big-english-2-adventure/
├── README.md
├── README-FA.md
├── TASKS.md
├── CODEX-FIRST-TASK.md
├── curriculum/
│   ├── course-structure.json
│   └── course-structure.schema.json
└── docs/
    ├── curriculum-map.md
    ├── content-guidelines.md
    ├── activity-design-guide.md
    └── implementation-plan.md
```

فایل اصلی مورد استفاده Codex، `curriculum/course-structure.json` است. فایل‌های Markdown قواعد تولید محتوا و برنامه پیاده‌سازی را مشخص می‌کنند.
