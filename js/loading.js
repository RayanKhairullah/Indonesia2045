window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    
    // Hilangkan animasi loading setelah halaman selesai dimuat
    loading.style.display = 'none';
    content.style.display = 'block';
    });
