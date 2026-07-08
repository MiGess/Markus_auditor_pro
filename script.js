<script>
        // 1. Seleccionamos los elementos del HTML
        const toggleBtn = document.getElementById('toggleBtn');
        const sidebar = document.getElementById('sidebar');

        // 2. Escuchamos el evento de clic en el botón
        toggleBtn.addEventListener('click', () => {
            // 3. Alternamos la clase 'collapsed' en el menú
            sidebar.classList.toggle('collapsed');
        });
    </script>