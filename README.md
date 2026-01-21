# SF Pegasus

Swift navigation for Salesforce. Jump to Setup, Flows, Debug Logs and more with keyboard shortcuts.

## Why SF Pegasus?

Salesforce's UI requires too many clicks to reach common pages. SF Pegasus gives you instant access.

| Without SF Pegasus | With SF Pegasus |
|---|---|
| Click gear → Setup → Wait for load → Search for Flows → Click | `Alt+Shift+F` |
| 5+ clicks, 10+ seconds | 1 shortcut, instant |

### Compared to other extensions

- **No bloat** — Minimal dark UI, no ads, no tracking, no account required
- **Keyboard-first** — Real keyboard shortcuts, not just a searchable menu
- **Org-aware** — Automatically detects your current Salesforce org (production, sandbox, scratch)
- **Fast search** — Type to filter shortcuts instantly
- **Open source** — MIT license, do whatever you want with it

## Keyboard Shortcuts

| Shortcut | Destination |
|----------|-------------|
| `Alt+Shift+S` | Setup |
| `Alt+Shift+F` | Flows |
| `Alt+Shift+O` | Object Manager |
| `Alt+Shift+D` | Debug Logs |

Customize shortcuts at `chrome://extensions/shortcuts`

## All Shortcuts (via popup)

**Quick Access**
- Setup
- Flows
- Object Manager
- Debug Logs

**Development**
- Apex Classes
- Apex Triggers
- Developer Console
- LWC Components
- Lightning Pages

**Administration**
- Users
- Profiles
- Permission Sets
- Roles

**Data**
- Reports
- Dashboards
- Custom Metadata
- Custom Settings

**Integration**
- Named Credentials
- Connected Apps
- Remote Sites
- Installed Packages

## Installation

1. Download or clone this repo
2. Open Chrome → `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the `sf-shortcuts-extension` folder

## Usage

1. Navigate to any Salesforce org
2. Click the extension icon or use keyboard shortcuts
3. Search or click to navigate

The extension detects your org URL and adapts all shortcuts to work with your current org.

## Supported Salesforce URLs

- `*.lightning.force.com`
- `*.my.salesforce.com`
- `*.sandbox.lightning.force.com`
- `*.sandbox.my.salesforce.com`
- `*.sandbox.my.salesforce-setup.com`
- `*.develop.my.salesforce.com`
- `*.scratch.my.salesforce.com`

## License

MIT — Do whatever you want with it. See [LICENSE](LICENSE).
