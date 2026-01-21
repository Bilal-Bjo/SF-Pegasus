# SF Pegasus

Swift navigation for Salesforce. Jump to Setup, Flows, Debug Logs and more with keyboard shortcuts.

## Why SF Pegasus?

Salesforce's UI requires too many clicks to reach common pages. SF Pegasus gives you instant access.

| Without SF Pegasus | With SF Pegasus |
|---|---|
| Click gear → Setup → Wait for load → Search for Flows → Click | `Alt+Shift+S` → type "flows" → Enter |
| 5+ clicks, 10+ seconds | 1 shortcut, instant |

### Compared to other extensions

- **No bloat** — Minimal dark UI, no ads, no tracking, no account required
- **Keyboard-first** — Real keyboard shortcuts, not just a searchable menu
- **Command palette** — Press `Alt+Shift+S` or `Cmd+K` for instant search across 60+ Setup pages
- **Org-aware** — Automatically detects your current Salesforce org (production, sandbox, scratch)
- **Fast search** — Type to filter shortcuts instantly
- **Open source** — MIT license, do whatever you want with it

## Command Palette

Press `Alt+Shift+S` or `Cmd/Ctrl+K` anywhere on Salesforce to open the command palette.

- **Setup tab**: Search across 60+ Setup pages instantly
- **Users tab**: Search actual users via Salesforce API (by name, email, or username)
- Use `Tab` to switch between Setup and Users mode
- Use `↑↓` to navigate results
- Press `Enter` to open
- Press `Esc` to close

### User Search

The Users tab queries your org's User records in real-time:
- Shows active/inactive status with color badges
- Displays email below name
- Click or Enter to open the user record

## Keyboard Shortcuts

| Shortcut | Destination |
|----------|-------------|
| `Alt+Shift+S` | Open Command Palette (Setup) |
| `Cmd/Ctrl+K` | Open Command Palette (Setup) |
| `Alt+Shift+U` | Open Command Palette (Users) |
| `Cmd/Ctrl+Shift+U` | Open Command Palette (Users) |
| `Alt+Shift+F` | Flows |
| `Alt+Shift+O` | Object Manager |

Customize shortcuts at `chrome://extensions/shortcuts`

## Setup Pages Available

**Quick Access** — Setup Home, Flows, Object Manager, Debug Logs

**Development** — Apex Classes, Apex Triggers, Apex Test Execution, Developer Console, LWC Components, Aura Components, Lightning Pages, Static Resources, Visualforce Pages, Email Templates

**Administration** — Users, Profiles, Permission Sets, Permission Set Groups, Roles, Queues, Public Groups, Login History, Session Management

**Data** — Reports, Dashboards, Custom Metadata Types, Custom Settings, Custom Labels, Data Import Wizard, Data Export

**Automation** — Process Builder, Workflow Rules, Approval Processes, Scheduled Jobs, Apex Jobs, Flow Trigger Explorer

**Integration** — Named Credentials, External Credentials, Connected Apps, Remote Site Settings, Installed Packages, Platform Events, Change Data Capture, External Services, Auth Providers

**Security** — Sharing Settings, Sharing Rules, Field Accessibility, Certificates and Keys, CORS, CSP Trusted Sites

**Deploy** — Deployment Status, Outbound Change Sets, Inbound Change Sets, Sandboxes

## Installation

1. Download or clone this repo
2. Open Chrome → `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the folder

## Usage

1. Navigate to any Salesforce org
2. Press `Alt+Shift+S` or `Cmd+K` to open command palette
3. Type to search, Enter to navigate

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
