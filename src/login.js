function handleCredentialResponse(response) {
    try {
        // Decode the ID token using a custom JWT parser
        const user = parseJwt(response.credential);

        // Display user information
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-picture').src = user.picture;

        // Hide the sign-in button
        document.querySelector('.g_id_signin').classList.add('hidden');

        // Redirect to the main page after sign-in
        setTimeout(() => {
            window.location.href = 'index.html'; // Replace 'index.html' with the path to your main page
        }, 1000); // Optional delay to show user information briefly
    } catch (error) {
        console.error('Error decoding JWT:', error);
        alert('An error occurred during sign-in. Please try again.');
    }
}

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error parsing JWT:', error);
        throw new Error('Invalid token');
    }
}

// Add sign-out functionality
document.getElementById('sign-out').addEventListener('click', () => {
    // Clear user information
    document.getElementById('user-info').classList.add('hidden');
    document.querySelector('.g_id_signin').classList.remove('hidden');
});
