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

// Direct navigation paths
const SHORTCUT_PATHS = {
  'flows': '/lightning/setup/Flows/home',
  'objects': '/lightning/setup/ObjectManager/home'
};

function isSalesforceUrl(url) {
  return SF_PATTERNS.some(pattern => pattern.test(url));
}

function getBaseUrl(url) {
  for (const pattern of SF_PATTERNS) {
    if (pattern.test(url)) {
      const urlObj = new URL(url);
      return `${urlObj.protocol}//${urlObj.host}`;
    }
  }
  return null;
}

// Listen for keyboard shortcut commands
chrome.commands.onCommand.addListener(async (command) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url || !isSalesforceUrl(tab.url)) return;

  if (command === 'search') {
    // Send message to content script to open setup search
    chrome.tabs.sendMessage(tab.id, { action: 'toggle-search' });
  } else if (command === 'users') {
    // Send message to content script to open user search
    chrome.tabs.sendMessage(tab.id, { action: 'toggle-user-search' });
  } else {
    // Direct navigation for other shortcuts
    const path = SHORTCUT_PATHS[command];
    if (path) {
      const baseUrl = getBaseUrl(tab.url);
      if (baseUrl) {
        chrome.tabs.update(tab.id, { url: baseUrl + path });
      }
    }
  }
});
