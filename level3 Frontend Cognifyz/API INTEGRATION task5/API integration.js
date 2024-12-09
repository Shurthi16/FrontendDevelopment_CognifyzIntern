// Multiple API Integration Options with English Content

// Option 1: Free English Quote API
async function fetchQuotes() {
    try {
        const response = await fetch('https://api.quotable.io/quotes?limit=5');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const quotesContainer = document.getElementById('quotes-container');
        quotesContainer.innerHTML = '';
        
        data.results.forEach(quote => {
            const quoteElement = document.createElement('div');
            quoteElement.classList.add('quote');
            quoteElement.innerHTML = `
                <blockquote>"${quote.content}"</blockquote>
                <cite>- ${quote.author}</cite>
            `;
            quotesContainer.appendChild(quoteElement);
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
        const quotesContainer = document.getElementById('quotes-container');
        quotesContainer.innerHTML = `
            <p class="error">Unable to load quotes. Please try again later.</p>
        `;
    }
}

// Option 2: Random User Generator API (English-based)
async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5&nat=us,gb,ca');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const usersContainer = document.getElementById('users-container');
        usersContainer.innerHTML = '';
        
        data.results.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user');
            userElement.innerHTML = `
                <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
            `;
            usersContainer.appendChild(userElement);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        const usersContainer = document.getElementById('users-container');
        usersContainer.innerHTML = `
            <p class="error">Unable to load users. Please try again later.</p>
        `;
    }
}

// Option 3: News API (English News Headlines)
async function fetchNews() {
    try {
        // Note: This API requires an API key in real-world usage
        const apiKey = '677fdfeeb50c49a6b85bf5bc2744abcf'; // Replace with actual API key
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';
        
        // Limit to first 5 articles
        data.articles.slice(0, 5).forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available'}</p>
                <small>Source: ${article.source.name}</small>
            `;
            newsContainer.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = `
            <p class="error">Unable to load news. Please try again later.</p>
        `;
    }
}

// Option 4: Dog Facts API (Fun English Content)
async function fetchDogFacts() {
    try {
        const response = await fetch('https://dogapi.dog/api/facts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const dogFactsContainer = document.getElementById('dog-facts-container');
        dogFactsContainer.innerHTML = '';
        
        data.facts.slice(0, 5).forEach(fact => {
            const factElement = document.createElement('div');
            factElement.classList.add('dog-fact');
            factElement.innerHTML = `
                <p>🐶 ${fact}</p>
            `;
            dogFactsContainer.appendChild(factElement);
        });
    } catch (error) {
        console.error('Error fetching dog facts:', error);
        const dogFactsContainer = document.getElementById('dog-facts-container');
        dogFactsContainer.innerHTML = `
            <p class="error">Unable to load dog facts. Please try again later.</p>
        `;
    }
}

// Initialize event listeners
function initializeAPI() {
    document.getElementById('load-quotes').addEventListener('click', fetchQuotes);
    document.getElementById('load-users').addEventListener('click', fetchUsers);
    document.getElementById('load-news').addEventListener('click', fetchNews);
    document.getElementById('load-dog-facts').addEventListener('click', fetchDogFacts);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAPI);