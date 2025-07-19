// Global data storage
let allData = [];
let filteredData = [];

// DOM elements
const nameSearchInput = document.getElementById('nameSearch');
const sha256SearchInput = document.getElementById('sha256Search');
const clearSearchBtn = document.getElementById('clearSearch');
const resultsContainer = document.getElementById('results');
const noResultsDiv = document.getElementById('noResults');
const resultCountSpan = document.getElementById('resultCount');

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    setupEventListeners();
    displayResults(allData);
});

// Load CSV data
async function loadData() {
    try {
        const [debianData, ubuntuData, ubuntuServerData] = await Promise.all([
            fetchAndParseCSV('debian.csv'),
            fetchAndParseCSV('ubuntu.csv'),
            fetchAndParseCSV('ubuntu-server.csv')
        ]);

        allData = [...debianData, ...ubuntuData, ...ubuntuServerData];
        console.log(`Loaded ${allData.length} total records`);
    } catch (error) {
        console.error('Error loading data:', error);
        showError('Failed to load data. Please refresh the page.');
    }
}

// Fetch and parse CSV file
async function fetchAndParseCSV(filename) {
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        return parseCSV(csvText);
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        return [];
    }
}

// Parse CSV text to array of objects
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index] || '';
        });
        return obj;
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search inputs
    nameSearchInput.addEventListener('input', debounce(performSearch, 300));
    sha256SearchInput.addEventListener('input', debounce(performSearch, 300));
    
    // Clear button
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
}

// Debounce function to limit search frequency
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Perform search based on current input values
function performSearch() {
    const nameQuery = nameSearchInput.value.toLowerCase().trim();
    const sha256Query = sha256SearchInput.value.toLowerCase().trim();
    
    if (!nameQuery && !sha256Query) {
        filteredData = allData;
    } else {
        filteredData = allData.filter(item => {
            const nameMatch = !nameQuery || 
                item.Name.toLowerCase().includes(nameQuery) ||
                item.Version.toLowerCase().includes(nameQuery);
            
            const sha256Match = !sha256Query || 
                item.Sha256.toLowerCase().includes(sha256Query);
            
            return nameMatch && sha256Match;
        });
    }
    
    displayResults(filteredData);
}

// Clear search inputs and show all results
function clearSearch() {
    nameSearchInput.value = '';
    sha256SearchInput.value = '';
    filteredData = allData;
    displayResults(filteredData);
    nameSearchInput.focus();
}

// Display search results
function displayResults(data) {
    resultCountSpan.textContent = data.length;
    
    if (data.length === 0) {
        resultsContainer.innerHTML = '';
        noResultsDiv.classList.remove('hidden');
        return;
    }
    
    noResultsDiv.classList.add('hidden');
    
    const resultsHTML = data.map(item => createResultCard(item)).join('');
    resultsContainer.innerHTML = resultsHTML;
}

// Create a result card HTML
function createResultCard(item) {
    const formattedDate = formatDate(item.Date);
    
    return `
        <div class="result-card rounded-lg p-6 hover:shadow-lg">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                        <h3 class="text-xl font-semibold text-white">${escapeHtml(item.Name)}</h3>
                        <span class="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">${escapeHtml(item.Version)}</span>
                    </div>
                    <p class="text-gray-400 text-sm">Released: ${formattedDate}</p>
                </div>
                <div class="flex-1 md:text-right">
                    <div class="mb-2">
                        <span class="text-xs text-gray-500 uppercase tracking-wide">SHA256 Hash</span>
                    </div>
                    <div class="sha256-text bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 break-all">
                        ${escapeHtml(item.Sha256)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Format date for display
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return dateString;
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Show error message
function showError(message) {
    const errorHTML = `
        <div class="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">
            <div class="flex items-center">
                <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                ${escapeHtml(message)}
            </div>
        </div>
    `;
    
    resultsContainer.innerHTML = errorHTML;
    noResultsDiv.classList.add('hidden');
} 