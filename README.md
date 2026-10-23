# FitHome — Functional PWA Prototype v2.0

A completely free, installable, offline-first fitness app prototype created with plain HTML, CSS, and JavaScript. No subscriptions, trackers, cloud account, paid APIs, or JavaScript frameworks.

## What works in this prototype

- Five navigation tabs: Home, Workouts, Exercises, Progress, Profile.
- Four guided workout templates and twelve original written exercise guides.
- **12 original, locally bundled 4-second MP4 animated exercise demonstrations**, one per exercise, available in Exercise Details and the active Workout Player. Videos loop silently and require no external streaming or account.
- Exercise thumbnails are included and video assets are precached for offline use after the first complete online load.
- Session player with real countdowns, reps completed manually, rest periods, pause, resume, skip, stop, recovery of paused sessions, and summaries.
- **Demo Mode** for testing the interface and timers without physically exercising. Demo sessions are excluded from real workout totals.
- Exercise safety preference questions; real workout start is gated until the user answers the relevant symptom question. Exertional symptoms with no medical clearance block real sessions.
- Local records for sessions and manual weight, waist, and Apple Watch VO₂ max estimates.
- Weekly activity chart, measurement history, record deletion.
- Light/dark themes; profile fields and local saving.
- JSON backup and restore; users can exclude health/symptom preferences from an exported backup.
- PWA manifest, icons, and service worker for offline use after a first successful online load.

## Important limitations

This is the **first functional prototype, not the final 25-screen app**. The full 50-exercise catalog, professionally filmed/verified human demonstrations, 12-week plan builder, advanced adaptive recommendations, reminders, and native HealthKit integration are not implemented. **Video demonstrations are simplified original vector animations, not real footage, medical instruction, or certified technique coaching.** Follow the written movement guidance and seek qualified advice for correct form. They do not verify your actual movement. Workout length is an estimate; actual completion times depend on the user.

FitHome is **not** a medical device, diagnostic tool, or substitute for clinician-guided cardiac rehabilitation. The safety selector relies on self-reporting. With AVNRT ablation history and symptoms on exertion, obtain cardiology evaluation and clearance before progressive training; do not use this app to decide that exercise is medically safe. Stop for concerning symptoms and seek urgent care for chest pain, fainting, severe breathlessness, or palpitations accompanied by dizziness or weakness.

The browser cannot directly read Apple Health or Apple Watch heart rate/VO₂ max. Enter watch estimates manually. Beta blockers may affect estimated VO₂ max.

Personal data resides in browser storage on the installed device, not in GitHub source files. Exported JSON backups are **not encrypted**; handle sensitive records carefully. Browser storage can be deleted, so export periodic backups.

## Run on a computer

1. Download and unzip `FitHome_PWA_With_Video_Demos_v2.zip`.
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
- `videos/` — 12 original H.264 MP4 demo loops plus JPG posters; upload **the entire folder** to GitHub; keep `videos/<id>.mp4` and `videos/<id>.jpg` together

## Testing performed

Original v1 automated Chromium interaction tests covered workout flows and measurement entry. For v2, Chromium tests confirmed exercise video decode/playback (640×360 H.264, 4 seconds), video-based exercise detail view, video pausing with workout controls, session progression and rest preview with no JavaScript errors. Node syntax checks and ffprobe metadata checks passed. Browser security policy blocked a full localhost/HTTPS service-worker test; **offline video caching, browser persistence after real URL reload, and iPhone installation still require a GitHub Pages device test**.

## Updating an existing FitHome GitHub Pages installation from v1
1. Keep your existing GitHub repository and its published Pages URL.
2. Upload the updated `index.html`, `app.js`, `styles.css`, `sw.js`, and `README.md` plus the complete `videos/` directory. Retain `icons/` and `manifest.webmanifest`. **Do not upload only the PNG icons — videos use the new `videos/` folder.**
3. Make sure `videos/march.mp4`, `videos/march.jpg` and the other 11 pairs appear at the repository root under `videos/`.
4. After Pages deployment, fully close and reopen the Home Screen app; if needed open the GitHub Pages URL in Safari and reload once while online to update the service-worker cache.
5. Test **Exercises → Bird Dog → play** and **Workouts → Beginner Foundation → Test demo**.
6. Existing local profile, workout history, and backup schema are intentionally preserved: v2 uses the same IndexedDB record key as v1. Still export a backup before upgrading.

## Video specifications
- Original procedural motion illustrations generated for this project; no external copyrighted videos.
- 4 seconds per clip, 640×360, 12 fps, H.264 AVC, silent, looping, iPhone-compatible MP4.
- Written instructions and safety notices take priority; animations depict simplified movement only.
- Audio narration, real-person footage, additional 38 exercises, and professional form review remain pending.
