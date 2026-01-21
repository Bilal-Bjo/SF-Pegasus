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

// Get API base URL from current URL
function getApiBaseUrl(currentUrl) {
  const url = new URL(currentUrl);
  const host = url.host;

  // Setup domains need to convert to main salesforce domain
  if (host.includes('salesforce-setup.com')) {
    return url.protocol + '//' + host.replace('salesforce-setup.com', 'salesforce.com');
  }

  return url.origin;
}

// Get session ID from cookies
async function getSessionId(url) {
  const apiUrl = new URL(getApiBaseUrl(url));

  // Try to get sid cookie from the target domain
  const cookies = await chrome.cookies.getAll({ domain: apiUrl.hostname });
  const sidCookie = cookies.find(c => c.name === 'sid');

  if (sidCookie) return sidCookie.value;

  // Try the original domain if different
  const originalUrl = new URL(url);
  if (originalUrl.hostname !== apiUrl.hostname) {
    const originalCookies = await chrome.cookies.getAll({ domain: originalUrl.hostname });
    const originalSid = originalCookies.find(c => c.name === 'sid');
    if (originalSid) return originalSid.value;
  }

  return null;
}

// Handle messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'searchUsers') {
    handleUserSearch(message.query, sender.tab.url)
      .then(sendResponse)
      .catch(err => sendResponse({ error: err.message }));
    return true; // Keep channel open for async response
  }
});

// Handle user search API call
async function handleUserSearch(query, tabUrl) {
  const API_VERSION = 'v59.0';
  const baseUrl = getApiBaseUrl(tabUrl);
  const sessionId = await getSessionId(tabUrl);

  if (!sessionId) {
    throw new Error('Could not get session. Make sure you\'re logged in.');
  }

  const escapedQ = query.replace(/'/g, "\\'");
  const soql = `SELECT Id, Name, Email, Username, IsActive, SmallPhotoUrl FROM User WHERE Name LIKE '%${escapedQ}%' OR Email LIKE '%${escapedQ}%' OR Username LIKE '%${escapedQ}%' ORDER BY Name LIMIT 15`;

  const response = await fetch(`${baseUrl}/services/data/${API_VERSION}/query?q=${encodeURIComponent(soql)}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${sessionId}`
    }
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return await response.json();
}
