document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Dicionário de Usuários e Perfis
    // ==========================================
    const users = {
        // PERFIS DE DESENVOLVEDOR: ACESSO TOTAL
        'dev01': { password: 'senhaDev01', role: 'desenvolvedor' },
        'dev02': { password: 'senhaDev02', role: 'desenvolvedor' },
        'admin': { password: 'admin123', role: 'desenvolvedor' },

        // Você pode adicionar outros perfis se desejar
        'cliente': { password: 'cliente123', role: 'usuario' } 
    };

    const messageElement = document.getElementById('message');
    const devLoginForm = document.getElementById('devLoginForm');
    const loginComumButton = document.getElementById('loginComumButton');

    // ==========================================
    // 2. Lógica de Login Restrito (Desenvolvedor)
    // ==========================================
    if (devLoginForm) {
        devLoginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio tradicional do formulário

            const username = document.getElementById('username').value.toLowerCase();
            const password = document.getElementById('password').value;

            const user = users[username];

            if (user && user.password === password) {
                // Login bem-sucedido: Armazena o perfil e redireciona
                localStorage.setItem('userRole', user.role);
                window.location.href = 'projetos.html';
            } else {
                // Login falhou
                messageElement.textContent = 'Credenciais inválidas. Tente novamente.';
                messageElement.style.color = 'red';
            }
        });
    }

    // ==========================================
    // 3. Lógica de Login Comum (Acesso Direto)
    // ==========================================
    if (loginComumButton) {
        loginComumButton.addEventListener('click', () => {
            // Define o perfil como 'usuario' (sem a função 'desenvolvedor')
            localStorage.setItem('userRole', 'usuario');
            window.location.href = 'projetos.html';
        });
    }
});
