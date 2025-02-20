// Subscribe Popup Component
document.addEventListener('DOMContentLoaded', function() {
    // Create popup container
    const popup = document.createElement('div');
    popup.id = 'subscribe-popup';
    popup.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        width: 300px;
        display: none;
    `;

    // Create popup content
    popup.innerHTML = `
        <h3>Subscribe to My Newsletter</h3>
        <p>Get the latest updates on HR trends and recruitment strategies</p>
        <form id="subscribe-form">
            <input type="email" placeholder="Enter your email" required>
            <button type="submit">Subscribe</button>
        </form>
        <button id="close-popup" style="position: absolute; top: 10px; right: 10px; background: none; border: none; cursor: pointer;">×</button>
    `;

    // Add popup to body
    document.body.appendChild(popup);

    // Show popup after 5 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 5000);

    // Handle form submission
    document.getElementById('subscribe-form').addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7056700107915726848&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEy1oUqXeRRCUXd%2FZHvIwvA%3D%3D';
    });

    // Close popup functionality
    document.getElementById('close-popup').addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
