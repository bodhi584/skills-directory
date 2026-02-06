const { google } = require('googleapis');
const fs = require('fs');

// Load credentials
const credentials = JSON.parse(fs.readFileSync('./ga4-credentials.json', 'utf8'));

async function getGA4Data() {
    try {
        // Authenticate with service account
        const auth = new google.auth.GoogleAuth({
            credentials: credentials,
            scopes: ['https://www.googleapis.com/auth/analytics.readonly']
        });

        const analyticsData = google.analyticsdata({ version: 'v1beta', auth });
        
        // Property ID for skills-directory
        const propertyId = 'properties/G-J56JCF02B1';
        
        console.log('✅ Connected to GA4 successfully!');
        console.log('📊 Fetching analytics data...');
        
        // Get basic metrics for the last 7 days
        const response = await analyticsData.properties.runReport({
            property: propertyId,
            requestBody: {
                dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
                dimensions: [{ name: 'date' }],
                metrics: [
                    { name: 'totalUsers' },
                    { name: 'sessions' },
                    { name: 'screenPageViews' },
                    { name: 'averageSessionDuration' }
                ]
            }
        });
        
        console.log('✅ GA4 Data retrieved successfully!');
        console.log('📈 Last 7 days summary:');
        
        const rows = response.data.rows || [];
        if (rows.length > 0) {
            const totals = response.data.totals?.[0]?.metricValues || [];
            console.log(`Total Users: ${totals[0]?.value || 0}`);
            console.log(`Total Sessions: ${totals[1]?.value || 0}`);
            console.log(`Total Page Views: ${totals[2]?.value || 0}`);
            console.log(`Avg Session Duration: ${parseFloat(totals[3]?.value || 0).toFixed(2)} seconds`);
        } else {
            console.log('No data available for the last 7 days.');
        }
        
        return response.data;
        
    } catch (error) {
        console.error('❌ Error fetching GA4 data:', error.message);
        throw error;
    }
}

// Run the function
getGA4Data().catch(console.error);