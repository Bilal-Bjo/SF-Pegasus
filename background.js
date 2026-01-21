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

// Shortcut paths
const SHORTCUT_PATHS = {
  'setup': '/lightning/setup/SetupOneHome/home',
  'flows': '/lightning/setup/Flows/home',
  'objects': '/lightning/setup/ObjectManager/home',
  'debug': '/lightning/setup/ApexDebugLogs/home'
};

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
  const path = SHORTCUT_PATHS[command];
  if (!path) return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) return;

  const baseUrl = getBaseUrl(tab.url);
  if (!baseUrl) return;

  chrome.tabs.update(tab.id, { url: baseUrl + path });
});
