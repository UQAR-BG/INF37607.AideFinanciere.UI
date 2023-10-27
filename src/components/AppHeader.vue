<template>
    <header class="header">
        <div class="container">
            <div class="header-container">
                <section class="logo-section">
                    <img class="logo" src="@/assets/images/logo.png" alt="Logo">
                    <h1 class="title">Ministère de l'Éducation</h1>
                </section>
                <nav>
                    <ul class="header-links">
                        <RouterLink class="header-link" to="/">Accueil</RouterLink>
                        <RouterLink class="header-link" to="/">Déconnexion</RouterLink>
                        <RouterLink class="header-link" to="/inscription">Inscription</RouterLink>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>