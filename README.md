# SHERPA Field - App Documentation

## Setup & Running
This app is built using Vanilla web technologies (HTML, CSS, JavaScript) so it requires **zero installation** or build steps!

**To use the app:**
Simply double-click `Checklist_chantier.html` to open it in any modern web browser (Chrome, Edge, Safari, etc.).

## How it works
1. **QR Code Entry:** When you open the app, it dynamically generates a QR code pointing to its own URL. You can screen-record, print, or scan this QR to simulate entry.
2. **Persistence:** As you check items off, the application saves your progress *instantly* to your browser's Local Storage. If you refresh or close the tab, the state is remembered!
3. **Session Dashboard:** You can view past sessions from the top-right button on the Main Menu.

## How to Modify Checklists
All data is stored in a clean configuration object inside `app.js`.

1. Open `app.js` in any text editor.
2. At the very top of the file, look for `const CHECKLISTS_DATA = { ... }`.
3. To add or edit items, modify the `items` array under the specific role.

Example modification for the Factory PM:
```javascript
  factory: {
    title: "Factory PM Checklist",
    icon: "🏭",
    items: [
      { id: "f1", text: "Verify site readiness" },
      { id: "f2", text: "Verify utilities availability" },
      // -> ADD A NEW ITEM HERE:
      { id: "f_new", text: "Another new custom item" }
    ]
  },
```
*(Ensure every item has a unique `id` for tracking persistence!)*

## Exporting as PDF (Bonus Context)
If you wish to export a checklist, standard browser-based printing is supported. Press `Ctrl + P` (or Cmd + P) while on the checklist view, and select "Save as PDF".
