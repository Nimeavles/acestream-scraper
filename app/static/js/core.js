/**
 * Core functionality for the Acestream Scraper application
 */

// Show alert message to the user
function showAlert(type, message, duration = 5000) {
    // Create alert container if it doesn't exist
    let alertContainer = document.getElementById('alertContainer');
    if (!alertContainer) {
        alertContainer = document.createElement('div');
        alertContainer.id = 'alertContainer';
        alertContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        document.body.appendChild(alertContainer);
    }
    
    // Generate a unique ID for this alert
    const alertId = 'alert-' + Date.now();
    
    // Create the alert element
    const alertHTML = `
        <div id="${alertId}" class="toast align-items-center text-white bg-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'primary'}" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    
    // Add the alert to the container
    alertContainer.insertAdjacentHTML('beforeend', alertHTML);
    
    // Initialize and show the toast
    const toastElement = document.getElementById(alertId);
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: duration
    });
    toast.show();
    
    // Remove the toast from DOM after it's hidden
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

// Show loading spinner
function showLoading() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'inline-block';
    }
}

// Hide loading spinner
function hideLoading() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

// Format date with local timezone
function formatLocalDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString();
}

/**
 * Handle API response and show appropriate message
 * @param {Response} response - Fetch API response object
 * @param {string} successMessage - Message to show on success
 * @param {Function} refreshCallback - Optional callback function to refresh data
 * @returns {Promise<Object>} - The parsed response data and success status
 */
async function handleApiResponse(response, successMessage = 'Operation successful', refreshCallback = null) {
    try {
        const data = await response.json();
        
        if (response.ok) {
            showAlert('success', data.message || successMessage);
            
            // Refresh data if callback provided
            if (typeof refreshCallback === 'function') {
                setTimeout(() => refreshCallback(), 1000);
            // If no specific callback is provided, try to use common refresh functions
            } else if (typeof refreshData === 'function') {
                setTimeout(() => refreshData(), 1000);
            } else if (typeof loadConfigData === 'function') {
                setTimeout(() => loadConfigData(), 1000);
            }
            
            return { success: true, data };
        } else {
            showAlert('error', data.message || data.error || 'Operation failed');
            return { success: false, data };
        }
    } catch (error) {
        console.error('Error processing response:', error);
        showAlert('error', 'Error processing response');
        return { success: false, error };
    }
}

/**
 * Make an API request with standardized handling
 * @param {string} url - API endpoint URL
 * @param {Object} options - Fetch API options
 * @param {string} successMessage - Message to show on success 
 * @param {Function} refreshCallback - Optional callback function to refresh data
 * @returns {Promise<Object>} - The result of handleApiResponse
 */
async function makeApiRequest(url, options, successMessage, refreshCallback = null) {
    showLoading();
    try {
        console.log('Making API request to:', url, options); // Add debugging
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
        
        console.log('Response:', response); // Add debugging
        
        if (!response.ok) {
            // Log more details about error responses
            console.error('API error:', response.status, await response.text());
        }
        
        return await handleApiResponse(response, successMessage, refreshCallback);
    } catch (error) {
        console.error('API request error:', error);
        showAlert('error', 'Network error while making request');
        return { success: false, error };
    } finally {
        hideLoading();
    }
}

// Debounce function to limit API calls
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

// Update statistics in the footer
function updateStats(stats) {
    // Check if elements exist before updating them
    const totalChannelsEl = document.getElementById('totalChannels');
    const channelsCheckedEl = document.getElementById('channelsChecked');
    const channelsOnlineEl = document.getElementById('channelsOnline');
    const channelsOfflineEl = document.getElementById('channelsOffline');
    
    if (totalChannelsEl) totalChannelsEl.textContent = stats.total_channels || 0;
    if (channelsCheckedEl) channelsCheckedEl.textContent = stats.channels_checked || 0;
    if (channelsOnlineEl) channelsOnlineEl.textContent = stats.channels_online || 0;
    if (channelsOfflineEl) channelsOfflineEl.textContent = stats.channels_offline || 0;
}

// Fetch stats and update UI elements
async function fetchStats() {
    try {
        const statsResponse = await fetch('/api/stats/');
        return await statsResponse.json();
    } catch (error) {
        console.error('Error fetching stats:', error);
        return {};
    }
}

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Update stats on page load - only if we're on a page with stats elements
    fetchStats().then(stats => {
        // Only call updateStats if at least one of the elements exists
        if (document.getElementById('totalChannels') || 
            document.getElementById('channelsChecked') || 
            document.getElementById('channelsOnline') || 
            document.getElementById('channelsOffline')) {
            updateStats(stats);
        }
    });
});