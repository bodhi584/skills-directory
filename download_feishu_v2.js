const axios = require('axios');
const fs = require('fs');

const APP_ID = 'cli_a9f45a42d7789cc6';
const APP_SECRET = 'dKN2KGn49SDSiFUkIl3qwed4wq4dRaSq';
const FILE_KEY = 'file_v3_00uk_451dc8cc-c91d-4025-94a0-9d261bd7a43g';
const FILE_NAME = 'Student life in Deggendorf.pdf';
const MESSAGE_ID = 'om_x100b570b16c378a4b246a939a94f8cf';

async function main() {
  try {
    // 1. Get Token
    console.log('Getting token...');
    const tokenRes = await axios.post('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      app_id: APP_ID,
      app_secret: APP_SECRET
    });
    const token = tokenRes.data.tenant_access_token;
    console.log('Got token.');

    // 4. Download Resource
    console.log(`Downloading resource from message ${MESSAGE_ID}...`);
    const fileRes = await axios.get(`https://open.feishu.cn/open-apis/im/v1/messages/${MESSAGE_ID}/resources/${FILE_KEY}?type=file`, {
      headers: { 'Authorization': `Bearer ${token}` },
      responseType: 'arraybuffer'
    });

    fs.writeFileSync(FILE_NAME, fileRes.data);
    console.log(`Saved to ${FILE_NAME}`);

  } catch (e) {
    console.error('Error:', e.message);
    if (e.response) {
        console.error('Status:', e.response.status);
        console.error('Data:', JSON.stringify(e.response.data));
    }
  }
}

main();
