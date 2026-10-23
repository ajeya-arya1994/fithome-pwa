# FitHome — Functional PWA Prototype v1.0

A completely free, installable, offline-first fitness app prototype created with plain HTML, CSS, and JavaScript. No subscriptions, trackers, cloud account, paid APIs, or JavaScript frameworks.

## What works in this prototype

- Five navigation tabs: Home, Workouts, Exercises, Progress, Profile.
- Four guided workout templates and twelve original written exercise guides.
- Session player with real countdowns, reps completed manually, rest periods, pause, resume, skip, stop, recovery of paused sessions, and summaries.
- **Demo Mode** for testing the interface and timers without physically exercising. Demo sessions are excluded from real workout totals.
- Exercise safety preference questions; real workout start is gated until the user answers the relevant symptom question. Exertional symptoms with no medical clearance block real sessions.
- Local records for sessions and manual weight, waist, and Apple Watch VO₂ max estimates.
- Weekly activity chart, measurement history, record deletion.
- Light/dark themes; profile fields and local saving.
- JSON backup and restore; users can exclude health/symptom preferences from an exported backup.
- PWA manifest, icons, and service worker for offline use after a first successful online load.

## Important limitations

This is the **first functional prototype, not the final 25-screen app**. The full 50-exercise catalog, original demonstration videos/animations, 12-week plan builder, advanced adaptive recommendations, reminders, and native HealthKit integration are not implemented. Exercise art is currently an illustrative emoji; users should follow written movement instructions, not infer form from the emoji. Workout length is an estimate; actual completion times depend on the user.

FitHome is **not** a medical device, diagnostic tool, or substitute for clinician-guided cardiac rehabilitation. The safety selector relies on self-reporting. With AVNRT ablation history and symptoms on exertion, obtain cardiology evaluation and clearance before progressive training; do not use this app to decide that exercise is medically safe. Stop for concerning symptoms and seek urgent care for chest pain, fainting, severe breathlessness, or palpitations accompanied by dizziness or weakness.

The browser cannot directly read Apple Health or Apple Watch heart rate/VO₂ max. Enter watch estimates manually. Beta blockers may affect estimated VO₂ max.

Personal data resides in browser storage on the installed device, not in GitHub source files. Exported JSON backups are **not encrypted**; handle sensitive records carefully. Browser storage can be deleted, so export periodic backups.

## Run on a computer

1. Download and unzip `FitHome_PWA_Prototype_v1.zip`.
2. Open a terminal in the `fithome-pwa` folder.
3. Run `python -m http.server 8000` (Python 3) or `python3 -m http.server 8000`.
4. Visit `http://localhost:8000` in a browser.
5. In FitHome, open **Workouts → Beginner Foundation → Test demo** to try the player. Demo sessions do not alter real totals.

Double-clicking `index.html` may display much of the interface in desktop browsers, but `file://` is not a reliable PWA origin. Use localhost or HTTPS to test data storage, service workers, and installation properly.

## Publish for free on GitHub Pages

1. Create a new **public** repository on GitHub, such as `fithome`.
2. Upload the **contents** of `fithome-pwa/` to the repository root: `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js`, and the `icons/` folder.
3. Open repository **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, `main`, `/ (root)` and Save.
5. After the Pages deployment completes, open `https://YOUR-USERNAME.github.io/fithome/` in Safari on the iPhone.
6. Tap **Share → Add to Home Screen → Add** (or use **Open as Web App** when displayed).
7. Open FitHome from its Home Screen icon. Load it once online before relying on offline operation.

GitHub Pages hosts **public source code**. Never put your personal health data, backup files, or credentials into the repository.

## Back up and restore

1. Open **Profile → Export JSON** and choose whether to include safety information.
2. Save the downloaded file in a secure location that you control.
3. To restore, open **Profile → Restore JSON**, choose your exported backup, and confirm replacement.
4. Backup imports replace existing app data; export current data first if you need it.

## Files

- `index.html` — app shell and tab bar
- `styles.css` — responsive UI, light/dark modes
- `app.js` — workout catalog, timer engine, local database, progress, safety, backup
- `manifest.webmanifest` — Home Screen PWA metadata
- `sw.js` — offline cache
- `icons/` — original generated app icons

## Testing performed

Automated Chromium UI interactions checked navigation, demo workout start, countdown running, pause, workout completion, rest skipping, symptom-stop summary, measurements, and enabling real-workout start after answering safety preferences. JavaScript syntax checked with Node. Browser sandbox policy prevented a full localhost/HTTPS deployment-and-reload test; IndexedDB persistence and iPhone PWA installation **still need testing on the hosted site**.
