// Salesforce URL patterns
const SF_PATTERNS = [
  /^https?:\/\/([a-zA-Z0-9-]+)\.sandbox\.my\.salesforce-setup\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.my\.salesforce-setup\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.sandbox\.lightning\.force\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.lightning\.force\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.sandbox\.my\.salesforce\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.my\.salesforce\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.develop\.my\.salesforce\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.scratch\.my\.salesforce\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.salesforce\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.cloudforce\.com/,
  /^https?:\/\/([a-zA-Z0-9-]+)\.visualforce\.com/
];

let baseUrl = null;
let shortcuts = [];
let filteredShortcuts = [];
let selectedIndex = 0;

document.addEventListener('DOMContentLoaded', async () => {
  const searchInput = document.getElementById('searchInput');
  const orgBadge = document.getElementById('orgBadge');
  const notSalesforce = document.getElementById('notSalesforce');
  const mainContent = document.getElementById('mainContent');
  const noResults = document.getElementById('noResults');

  // Get current tab URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const currentUrl = tab?.url || '';

  // Check if on Salesforce
  const sfMatch = detectSalesforceOrg(currentUrl);

  if (sfMatch) {
    baseUrl = sfMatch.baseUrl;
    orgBadge.textContent = sfMatch.orgName;
    orgBadge.title = sfMatch.orgName;
    notSalesforce.style.display = 'none';
    mainContent.style.display = 'block';
  } else {
    orgBadge.textContent = 'Not SF';
    notSalesforce.style.display = 'block';
    mainContent.style.display = 'none';
    return;
  }

  // Initialize shortcuts
  shortcuts = Array.from(document.querySelectorAll('.shortcut'));
  filteredShortcuts = [...shortcuts];

  // Add click handlers
  shortcuts.forEach(shortcut => {
    shortcut.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(shortcut.dataset.path);
    });
  });

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterShortcuts(query);
  });

  // Keyboard navigation
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectNext();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectPrevious();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      openSelected();
    }
  });

  // Focus search on open
  searchInput.focus();
});

function detectSalesforceOrg(url) {
  for (const pattern of SF_PATTERNS) {
    const match = url.match(pattern);
    if (match) {
      // Extract base URL
      const urlObj = new URL(url);
      const baseUrl = `${urlObj.protocol}//${urlObj.host}`;

      // Extract org name from subdomain
      let orgName = match[1];

      // Clean up org name for display
      if (orgName.includes('--')) {
        // Sandbox format: orgname--sandboxname
        const parts = orgName.split('--');
        orgName = parts[parts.length - 1];
      }

      // Capitalize first letter
      orgName = orgName.charAt(0).toUpperCase() + orgName.slice(1);

      return { baseUrl, orgName };
    }
  }
  return null;
}

function filterShortcuts(query) {
  const noResults = document.getElementById('noResults');
  selectedIndex = 0;

  if (!query) {
    // Show all shortcuts
    shortcuts.forEach(s => s.classList.remove('hidden', 'selected'));
    filteredShortcuts = [...shortcuts];
    document.querySelectorAll('.section, .divider').forEach(el => el.style.display = '');
    noResults.style.display = 'none';
    updateSelection();
    return;
  }

  let hasVisible = false;
  const sections = new Set();

  shortcuts.forEach(shortcut => {
    const name = shortcut.querySelector('.shortcut-name').textContent.toLowerCase();
    const desc = shortcut.querySelector('.shortcut-desc').textContent.toLowerCase();
    const searchTerms = shortcut.dataset.search?.toLowerCase() || '';

    const matches = name.includes(query) ||
                   desc.includes(query) ||
                   searchTerms.includes(query);

    if (matches) {
      shortcut.classList.remove('hidden');
      hasVisible = true;
      // Track which section this belongs to
      const section = shortcut.closest('.section');
      if (section) sections.add(section.id);
    } else {
      shortcut.classList.add('hidden');
    }
    shortcut.classList.remove('selected');
  });

  // Hide empty sections
  document.querySelectorAll('.section').forEach(section => {
    if (sections.has(section.id)) {
      section.style.display = '';
    } else {
      section.style.display = 'none';
    }
  });

  // Hide dividers when filtering
  document.querySelectorAll('.divider').forEach(divider => {
    divider.style.display = query ? 'none' : '';
  });

  // Update filtered list
  filteredShortcuts = shortcuts.filter(s => !s.classList.contains('hidden'));

  // Show no results message
  noResults.style.display = hasVisible ? 'none' : 'block';

  updateSelection();
}

function updateSelection() {
  filteredShortcuts.forEach((s, i) => {
    if (i === selectedIndex) {
      s.classList.add('selected');
      s.style.background = '#16213e';
    } else {
      s.classList.remove('selected');
      s.style.background = '';
    }
  });
}

function selectNext() {
  if (filteredShortcuts.length === 0) return;
  selectedIndex = (selectedIndex + 1) % filteredShortcuts.length;
  updateSelection();
  filteredShortcuts[selectedIndex].scrollIntoView({ block: 'nearest' });
}

function selectPrevious() {
  if (filteredShortcuts.length === 0) return;
  selectedIndex = (selectedIndex - 1 + filteredShortcuts.length) % filteredShortcuts.length;
  updateSelection();
  filteredShortcuts[selectedIndex].scrollIntoView({ block: 'nearest' });
}

function openSelected() {
  if (filteredShortcuts.length > 0 && filteredShortcuts[selectedIndex]) {
    navigateTo(filteredShortcuts[selectedIndex].dataset.path);
  }
}

function navigateTo(path) {
  if (!baseUrl || !path) return;

  const fullUrl = baseUrl + path;

  // Open in current tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: fullUrl });
    window.close();
  });
}
