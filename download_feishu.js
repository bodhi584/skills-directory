const axios = require('axios');
const fs = require('fs');

const APP_ID = 'cli_a9f45a42d7789cc6';
const APP_SECRET = 'dKN2KGn49SDSiFUkIl3qwed4wq4dRaSq';
const FILE_KEY = 'file_v3_00uk_451dc8cc-c91d-4025-94a0-9d261bd7a43g';
const FILE_NAME = 'Student life in Deggendorf.pdf';

async function main() {
  try {
    // 1. Get Tenant Access Token
    console.log('Getting token...');
    const tokenRes = await axios.post('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      app_id: APP_ID,
      app_secret: APP_SECRET
    });
    const token = tokenRes.data.tenant_access_token;
    if (!token) throw new Error('No token: ' + JSON.stringify(tokenRes.data));
    console.log('Got token.');

    // 2. Download File
    console.log(`Downloading ${FILE_KEY}...`);
    // Try im/v1/files endpoint
    const fileRes = await axios.get(`https://open.feishu.cn/open-apis/im/v1/files/${FILE_KEY}`, {
      headers: { 'Authorization': `Bearer ${token}` },
      responseType: 'arraybuffer'
    });

    fs.writeFileSync(FILE_NAME, fileRes.data);
    console.log(`Saved to ${FILE_NAME}`);
  } catch (e) {
    console.error('Error:', e.message);
    if (e.response) console.error('Response:', e.response.data.toString());
  }
}

main();
