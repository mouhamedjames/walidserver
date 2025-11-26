// Configuration file for the server
module.exports = {
    // Telegram Bot Configuration
    telegram: {
        botToken: '8501268893:AAEREhmdnFv-o6W3V9J9hShxDXUsU-XSvHc',
        chatId: '-5052409140'
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




