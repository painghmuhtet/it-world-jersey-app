# web/ — bundled mobile UI

`page.js` is the mobile UI of https://itworldjersey.store/app, extracted from
`painghmuhtet/itworldjersey-store` (`app/index.html`, `app/styles.css`, `app/app.js`,
copied from commit `41f9d073f39713ee99a1afe36dfb0530713d5982`).

It is bundled into the app and rendered locally by `App.js` (WebView `source.html`),
so the home screen opens without a network request. Links inside it go to the live
site pages (`/shop`, `/gallery`, `/videos`, `/custom`, ...).

## Mapping

| Source file in itworldjersey-store | Export in `page.js` |
| --- | --- |
| `app/styles.css` | `css` |
| `<body>` of `app/index.html` (without the `<script>` tag) | `body` |
| `app/app.js` | `js` |

The PWA-only tags (`manifest`, `icon`) are left out. Everything else is unchanged.

## Sync after the web UI changes

Copy the new contents of the three source files into the matching exports in
`page.js`, commit, and ship a new app build.
