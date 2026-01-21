// SF Pegasus - Command Palette for Salesforce

const SETUP_ITEMS = [
  // Quick Access
  { name: 'Setup Home', path: '/lightning/setup/SetupOneHome/home', keywords: 'setup home main' },
  { name: 'Flows', path: '/lightning/setup/Flows/home', keywords: 'flows automation flow builder' },
  { name: 'Object Manager', path: '/lightning/setup/ObjectManager/home', keywords: 'objects fields sobjects custom' },
  { name: 'Debug Logs', path: '/lightning/setup/ApexDebugLogs/home', keywords: 'debug logs apex trace logging' },

  // Development
  { name: 'Apex Classes', path: '/lightning/setup/ApexClasses/home', keywords: 'apex classes code' },
  { name: 'Apex Triggers', path: '/lightning/setup/ApexTriggers/home', keywords: 'apex triggers' },
  { name: 'Apex Test Execution', path: '/lightning/setup/ApexTestQueue/home', keywords: 'apex test execution run tests' },
  { name: 'Developer Console', path: '/_ui/common/apex/debug/ApexCSIPage', keywords: 'developer console dev tools' },
  { name: 'LWC Components', path: '/lightning/setup/LightningComponentBundles/home', keywords: 'lwc lightning web components' },
  { name: 'Aura Components', path: '/lightning/setup/LightningComponentBundles/home', keywords: 'aura components lightning' },
  { name: 'Lightning Pages', path: '/lightning/setup/FlexiPageList/home', keywords: 'lightning pages app builder flexipages' },
  { name: 'Static Resources', path: '/lightning/setup/StaticResources/home', keywords: 'static resources files' },
  { name: 'Visualforce Pages', path: '/lightning/setup/ApexPages/home', keywords: 'visualforce pages vf' },
  { name: 'Visualforce Components', path: '/lightning/setup/ApexComponents/home', keywords: 'visualforce components vf' },
  { name: 'Email Templates', path: '/lightning/setup/CommunicationTemplatesEmail/home', keywords: 'email templates' },

  // Administration
  { name: 'Users', path: '/lightning/setup/ManageUsers/home', keywords: 'users manage' },
  { name: 'Profiles', path: '/lightning/setup/Profiles/home', keywords: 'profiles permissions' },
  { name: 'Permission Sets', path: '/lightning/setup/PermSets/home', keywords: 'permission sets permsets' },
  { name: 'Permission Set Groups', path: '/lightning/setup/PermSetGroups/home', keywords: 'permission set groups' },
  { name: 'Roles', path: '/lightning/setup/Roles/home', keywords: 'roles hierarchy' },
  { name: 'Queues', path: '/lightning/setup/Queues/home', keywords: 'queues' },
  { name: 'Public Groups', path: '/lightning/setup/PublicGroups/home', keywords: 'public groups' },
  { name: 'Login History', path: '/lightning/setup/LoginHistory/home', keywords: 'login history' },
  { name: 'Session Management', path: '/lightning/setup/SessionManagement/home', keywords: 'session management' },

  // Data
  { name: 'Reports', path: '/lightning/o/Report/home', keywords: 'reports analytics' },
  { name: 'Dashboards', path: '/lightning/o/Dashboard/home', keywords: 'dashboards analytics charts' },
  { name: 'Custom Metadata Types', path: '/lightning/setup/CustomMetadata/home', keywords: 'custom metadata types cmt' },
  { name: 'Custom Settings', path: '/lightning/setup/CustomSettings/home', keywords: 'custom settings' },
  { name: 'Custom Labels', path: '/lightning/setup/ExternalStrings/home', keywords: 'custom labels translations' },
  { name: 'Data Import Wizard', path: '/lightning/setup/DataManagementDataImporter/home', keywords: 'data import wizard' },
  { name: 'Data Export', path: '/lightning/setup/DataManagementExport/home', keywords: 'data export' },

  // Automation
  { name: 'Process Builder', path: '/lightning/setup/ProcessAutomation/home', keywords: 'process builder automation' },
  { name: 'Workflow Rules', path: '/lightning/setup/WorkflowRules/home', keywords: 'workflow rules automation' },
  { name: 'Approval Processes', path: '/lightning/setup/ApprovalProcesses/home', keywords: 'approval processes' },
  { name: 'Scheduled Jobs', path: '/lightning/setup/ScheduledJobs/home', keywords: 'scheduled jobs apex cron' },
  { name: 'Apex Jobs', path: '/lightning/setup/AsyncApexJobs/home', keywords: 'apex jobs async batch' },
  { name: 'Flow Trigger Explorer', path: '/lightning/setup/ProcessAutomationFlowTriggerExplorer/home', keywords: 'flow trigger explorer' },

  // Integration
  { name: 'Named Credentials', path: '/lightning/setup/NamedCredential/home', keywords: 'named credentials api auth' },
  { name: 'External Credentials', path: '/lightning/setup/ExternalCredential/home', keywords: 'external credentials' },
  { name: 'Connected Apps', path: '/lightning/setup/ConnectedApplication/home', keywords: 'connected apps oauth' },
  { name: 'Remote Site Settings', path: '/lightning/setup/SecurityRemoteProxy/home', keywords: 'remote site settings callouts' },
  { name: 'Installed Packages', path: '/lightning/setup/ImportedPackage/home', keywords: 'installed packages managed' },
  { name: 'Platform Events', path: '/lightning/setup/EventObjects/home', keywords: 'platform events' },
  { name: 'Change Data Capture', path: '/lightning/setup/CdcObjectEnablement/home', keywords: 'change data capture cdc' },
  { name: 'External Services', path: '/lightning/setup/ExternalServices/home', keywords: 'external services api' },
  { name: 'Auth Providers', path: '/lightning/setup/AuthProvidersPage/home', keywords: 'auth providers sso' },

  // Security
  { name: 'Sharing Settings', path: '/lightning/setup/SecuritySharing/home', keywords: 'sharing settings owd' },
  { name: 'Sharing Rules', path: '/lightning/setup/SecuritySharing/home', keywords: 'sharing rules' },
  { name: 'Field Accessibility', path: '/lightning/setup/FieldAccessibility/home', keywords: 'field accessibility fls' },
  { name: 'Certificate and Key Management', path: '/lightning/setup/CertificatesAndKeysManagement/home', keywords: 'certificates keys ssl' },
  { name: 'CORS', path: '/lightning/setup/CorsWhitelistEntries/home', keywords: 'cors whitelist' },
  { name: 'CSP Trusted Sites', path: '/lightning/setup/SecurityCspTrustedSite/home', keywords: 'csp trusted sites content security' },

  // Company Settings
  { name: 'Company Information', path: '/lightning/setup/CompanyProfileInfo/home', keywords: 'company information org info' },
  { name: 'Business Hours', path: '/lightning/setup/BusinessHours/home', keywords: 'business hours' },
  { name: 'Fiscal Year', path: '/lightning/setup/FiscalYear/home', keywords: 'fiscal year' },
  { name: 'Holidays', path: '/lightning/setup/Holidays/home', keywords: 'holidays' },

  // Apps
  { name: 'App Manager', path: '/lightning/setup/NavigationMenus/home', keywords: 'app manager apps' },
  { name: 'Lightning App Builder', path: '/lightning/setup/FlexiPageList/home', keywords: 'lightning app builder pages' },
  { name: 'Tabs', path: '/lightning/setup/CustomTabs/home', keywords: 'tabs custom' },
  { name: 'Global Actions', path: '/lightning/setup/GlobalActions/home', keywords: 'global actions quick' },

  // Deploy
  { name: 'Deployment Status', path: '/lightning/setup/DeployStatus/home', keywords: 'deployment status deploy' },
  { name: 'Outbound Change Sets', path: '/lightning/setup/OutboundChangeSet/home', keywords: 'outbound change sets deploy' },
  { name: 'Inbound Change Sets', path: '/lightning/setup/InboundChangeSet/home', keywords: 'inbound change sets deploy' },
  { name: 'Sandboxes', path: '/lightning/setup/DataManagementCreateTestInstance/home', keywords: 'sandboxes environments' },
];

const API_VERSION = 'v59.0';
let overlay = null;
let isVisible = false;
let currentMode = 'setup'; // 'setup' or 'user'
let searchTimeout = null;

function createOverlay() {
  if (overlay) return overlay;

  overlay = document.createElement('div');
  overlay.id = 'sf-pegasus-overlay';
  overlay.innerHTML = `
    <div class="sfp-backdrop"></div>
    <div class="sfp-modal">
      <div class="sfp-mode-tabs">
        <button class="sfp-tab active" data-mode="setup">Setup</button>
        <button class="sfp-tab" data-mode="user">Users</button>
      </div>
      <input type="text" class="sfp-input" placeholder="Search Setup..." autofocus>
      <div class="sfp-results"></div>
      <div class="sfp-footer">
        <span><kbd>Tab</kbd> switch mode</span>
        <span><kbd>↑↓</kbd> navigate</span>
        <span><kbd>↵</kbd> open</span>
        <span><kbd>esc</kbd> close</span>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #sf-pegasus-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999999;
      display: none;
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    #sf-pegasus-overlay.visible {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding-top: 15vh;
    }
    .sfp-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
    }
    .sfp-modal {
      position: relative;
      width: 100%;
      max-width: 520px;
      background: #0d0d0d;
      border-radius: 12px;
      border: 1px solid #222;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
      overflow: hidden;
    }
    .sfp-mode-tabs {
      display: flex;
      border-bottom: 1px solid #1a1a1a;
    }
    .sfp-tab {
      flex: 1;
      padding: 10px 16px;
      background: transparent;
      border: none;
      color: #555;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.15s, background 0.15s;
      font-family: inherit;
    }
    .sfp-tab:hover {
      color: #888;
      background: #111;
    }
    .sfp-tab.active {
      color: #00d9ff;
      background: #111;
    }
    .sfp-input {
      width: 100%;
      padding: 16px 20px;
      background: transparent;
      border: none;
      border-bottom: 1px solid #1a1a1a;
      color: #fafafa;
      font-size: 16px;
      font-family: inherit;
      outline: none;
    }
    .sfp-input::placeholder {
      color: #555;
    }
    .sfp-results {
      max-height: 360px;
      overflow-y: auto;
    }
    .sfp-results::-webkit-scrollbar {
      width: 6px;
    }
    .sfp-results::-webkit-scrollbar-track {
      background: transparent;
    }
    .sfp-results::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 3px;
    }
    .sfp-item {
      padding: 12px 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: background 0.1s;
    }
    .sfp-item:hover,
    .sfp-item.selected {
      background: #141414;
    }
    .sfp-item-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1a1a1a;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 600;
      color: #666;
      flex-shrink: 0;
    }
    .sfp-item-icon.user-icon {
      background: #1a2a1a;
      color: #4ade80;
    }
    .sfp-item-icon.inactive {
      background: #2a1a1a;
      color: #f87171;
    }
    .sfp-item-info {
      flex: 1;
      min-width: 0;
    }
    .sfp-item-name {
      font-size: 14px;
      color: #e5e5e5;
    }
    .sfp-item-meta {
      font-size: 11px;
      color: #444;
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sfp-empty {
      padding: 32px 20px;
      text-align: center;
      color: #444;
      font-size: 14px;
    }
    .sfp-loading {
      padding: 32px 20px;
      text-align: center;
      color: #555;
      font-size: 13px;
    }
    .sfp-footer {
      padding: 10px 20px;
      border-top: 1px solid #1a1a1a;
      display: flex;
      gap: 16px;
      font-size: 11px;
      color: #444;
    }
    .sfp-footer kbd {
      background: #1a1a1a;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: inherit;
      color: #666;
    }
    .sfp-highlight {
      color: #fff;
      font-weight: 500;
    }
    .sfp-badge {
      font-size: 9px;
      padding: 2px 6px;
      border-radius: 3px;
      background: #1a1a1a;
      color: #666;
      margin-left: 8px;
    }
    .sfp-badge.active {
      background: #1a2a1a;
      color: #4ade80;
    }
    .sfp-badge.inactive {
      background: #2a1a1a;
      color: #f87171;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(overlay);

  const input = overlay.querySelector('.sfp-input');
  const results = overlay.querySelector('.sfp-results');
  const backdrop = overlay.querySelector('.sfp-backdrop');
  const tabs = overlay.querySelectorAll('.sfp-tab');

  let selectedIndex = 0;
  let filteredItems = [];

  function setMode(mode) {
    currentMode = mode;
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === mode);
    });
    input.placeholder = mode === 'setup' ? 'Search Setup...' : 'Search users by name or email...';
    input.value = '';
    selectedIndex = 0;

    if (mode === 'setup') {
      renderSetupResults('');
    } else {
      results.innerHTML = '<div class="sfp-empty">Type to search users...</div>';
      filteredItems = [];
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
  });

  function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="sfp-highlight">$1</span>');
  }

  function renderSetupResults(query = '') {
    const q = query.toLowerCase().trim();

    if (!q) {
      filteredItems = SETUP_ITEMS.slice(0, 10);
    } else {
      filteredItems = SETUP_ITEMS.filter(item => {
        const searchText = (item.name + ' ' + item.keywords).toLowerCase();
        return searchText.includes(q);
      }).slice(0, 10);
    }

    if (filteredItems.length === 0) {
      results.innerHTML = '<div class="sfp-empty">No results found</div>';
      return;
    }

    selectedIndex = 0;
    results.innerHTML = filteredItems.map((item, i) => `
      <div class="sfp-item ${i === 0 ? 'selected' : ''}" data-index="${i}" data-type="setup">
        <span class="sfp-item-icon">${getInitials(item.name)}</span>
        <div class="sfp-item-info">
          <div class="sfp-item-name">${highlightMatch(item.name, q)}</div>
        </div>
      </div>
    `).join('');

    attachItemListeners();
  }

  async function searchUsers(query) {
    const q = query.trim();

    if (q.length < 2) {
      results.innerHTML = '<div class="sfp-empty">Type at least 2 characters...</div>';
      filteredItems = [];
      return;
    }

    results.innerHTML = '<div class="sfp-loading">Searching users...</div>';

    try {
      const baseUrl = window.location.origin;
      const soql = `SELECT Id, Name, Email, Username, IsActive, SmallPhotoUrl FROM User WHERE Name LIKE '%${q}%' OR Email LIKE '%${q}%' OR Username LIKE '%${q}%' ORDER BY Name LIMIT 15`;

      const response = await fetch(`${baseUrl}/services/data/${API_VERSION}/query?q=${encodeURIComponent(soql)}`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      filteredItems = data.records || [];

      if (filteredItems.length === 0) {
        results.innerHTML = '<div class="sfp-empty">No users found</div>';
        return;
      }

      selectedIndex = 0;
      results.innerHTML = filteredItems.map((user, i) => `
        <div class="sfp-item ${i === 0 ? 'selected' : ''}" data-index="${i}" data-type="user" data-id="${user.Id}">
          <span class="sfp-item-icon ${user.IsActive ? 'user-icon' : 'inactive'}">${getInitials(user.Name)}</span>
          <div class="sfp-item-info">
            <div class="sfp-item-name">
              ${highlightMatch(user.Name, q)}
              <span class="sfp-badge ${user.IsActive ? 'active' : 'inactive'}">${user.IsActive ? 'Active' : 'Inactive'}</span>
            </div>
            <div class="sfp-item-meta">${user.Email || user.Username}</div>
          </div>
        </div>
      `).join('');

      attachItemListeners();

    } catch (error) {
      console.error('SF Pegasus: Error searching users', error);
      results.innerHTML = `<div class="sfp-empty">Error searching users. Make sure you're logged in.</div>`;
      filteredItems = [];
    }
  }

  function attachItemListeners() {
    results.querySelectorAll('.sfp-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        const type = item.dataset.type;
        if (type === 'user') {
          navigateToUser(filteredItems[index]);
        } else {
          navigateToSetup(filteredItems[index]);
        }
      });
    });
  }

  function updateSelection() {
    results.querySelectorAll('.sfp-item').forEach((item, i) => {
      item.classList.toggle('selected', i === selectedIndex);
      if (i === selectedIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  function navigateToSetup(item) {
    hide();
    const baseUrl = window.location.origin;
    window.location.href = baseUrl + item.path;
  }

  function navigateToUser(user) {
    hide();
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}/lightning/r/User/${user.Id}/view`;
  }

  input.addEventListener('input', (e) => {
    const query = e.target.value;

    if (currentMode === 'setup') {
      renderSetupResults(query);
    } else {
      // Debounce user search
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => searchUsers(query), 300);
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setMode(currentMode === 'setup' ? 'user' : 'setup');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, filteredItems.length - 1);
      updateSelection();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      updateSelection();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        if (currentMode === 'user') {
          navigateToUser(filteredItems[selectedIndex]);
        } else {
          navigateToSetup(filteredItems[selectedIndex]);
        }
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      hide();
    }
  });

  backdrop.addEventListener('click', hide);

  return overlay;
}

function show(mode = 'setup') {
  const el = createOverlay();
  el.classList.add('visible');
  isVisible = true;

  currentMode = mode;
  const tabs = el.querySelectorAll('.sfp-tab');
  const input = el.querySelector('.sfp-input');
  const results = el.querySelector('.sfp-results');

  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.mode === mode);
  });

  input.placeholder = mode === 'setup' ? 'Search Setup...' : 'Search users by name or email...';
  input.value = '';
  input.focus();

  if (mode === 'setup') {
    // Render initial setup items
    let filteredItems = SETUP_ITEMS.slice(0, 10);
    function getInitials(name) {
      return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    }
    results.innerHTML = filteredItems.map((item, i) => `
      <div class="sfp-item ${i === 0 ? 'selected' : ''}" data-index="${i}" data-type="setup">
        <span class="sfp-item-icon">${getInitials(item.name)}</span>
        <div class="sfp-item-info">
          <div class="sfp-item-name">${item.name}</div>
        </div>
      </div>
    `).join('');
  } else {
    results.innerHTML = '<div class="sfp-empty">Type to search users...</div>';
  }
}

function hide() {
  if (overlay) {
    overlay.classList.remove('visible');
    isVisible = false;
  }
}

function toggle(mode = 'setup') {
  if (isVisible) {
    hide();
  } else {
    show(mode);
  }
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggle-search') {
    toggle('setup');
    sendResponse({ success: true });
  } else if (message.action === 'toggle-user-search') {
    toggle('user');
    sendResponse({ success: true });
  }
});

// Keyboard shortcut: Cmd/Ctrl + K for setup search
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    toggle('setup');
  }
  // Cmd/Ctrl + Shift + U for user search
  if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'u') {
    e.preventDefault();
    toggle('user');
  }
});
