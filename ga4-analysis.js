const { google } = require('googleapis');

// Load service account credentials
const credentials = require('./ga4-credentials.json');
const propertyId = '521089012';

async function getTopPages() {
    try {
        // Authenticate with service account
        const auth = new google.auth.GoogleAuth({
            credentials: credentials,
            scopes: ['https://www.googleapis.com/auth/analytics.readonly']
        });

        // Create analytics data client
        const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });

        // Run report request
        const response = await analyticsdata.properties.runReport({
            property: `properties/${propertyId}`,
            requestBody: {
                dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
                dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
                metrics: [
                    { name: 'screenPageViews' },
                    { name: 'averageSessionDuration' },
                    { name: 'bounceRate' }
                ],
                orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
                limit: 20
            }
        });

        console.log('✅ Top pages analysis:');
        console.log('Rank | Page Path | Views | Avg Duration | Bounce Rate');
        console.log('-----|-----------|-------|--------------|------------');
        
        if (response.data.rows) {
            response.data.rows.forEach((row, index) => {
                const pagePath = row.dimensionValues[0].value;
                const pageTitle = row.dimensionValues[1].value;
                const views = row.metricValues[0].value;
                const avgDuration = parseFloat(row.metricValues[1].value).toFixed(1);
                const bounceRate = parseFloat(row.metricValues[2].value).toFixed(1);
                
                console.log(`${index + 1} | ${pagePath} | ${views} | ${avgDuration}s | ${bounceRate}%`);
            });
        } else {
            console.log('No data available for the specified period.');
        }

        return response.data;
    } catch (error) {
        console.error('❌ Error fetching GA4 data:', error.message);
        return null;
    }
}

// Execute the analysis
getTopPages().catch(console.error);