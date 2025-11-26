// Configuration file for the server
module.exports = {
    // Telegram Bot Configuration
    telegram: {
        botToken: '838382690555:AAHTnGnLT4F9-XRACV6334KKClhJZQzVH6k',
        chatId: '-5084029761'
    },
    
    // News API Configuration
    news: {
        apiKey: 'your_news_api_key_here', // Replace with your actual News API key
        apiUrl: 'https://newsapi.org/v2/top-headlines',
        country: 'il', // Israel
        language: 'he' // Hebrew
    },
    
    // Server Configuration
    server: {
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'development'
    }
};




