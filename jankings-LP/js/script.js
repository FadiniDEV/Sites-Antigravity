// ==============================================================================
// SCRIPT DE APLICAÇÃO DOS LINKS E DINÂMICA - JANKINGS
// ==============================================================================
// Este script lê as configurações do arquivo /config/links.js e aplica
// automaticamente aos respectivos banners, ícones sociais e rodapé.
// ==============================================================================

(function () {
    'use strict';

    function initPage() {
        // Atualiza ano no rodapé
        const yearEl = document.getElementById('current-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        if (typeof links === 'undefined' || !links) {
            console.warn('Aviso: Objeto de links não encontrado em /config/links.js');
            return;
        }

        // Mapeamento dos Banners de Ofertas
        const bannerMap = [
            { id: 'banner-link-1', url: links.banner1 },
            { id: 'banner-link-2', url: links.banner2 },
            { id: 'banner-link-3', url: links.banner3 }
        ];

        bannerMap.forEach(function (item) {
            const element = document.getElementById(item.id);
            if (element && item.url) {
                element.href = item.url;
                element.target = '_blank';
                element.rel = 'noopener noreferrer';
            }
        });

        // Mapeamento das 3 Redes Sociais Principais (TikTok, Instagram, YouTube)
        const socialMap = [
            { id: 'social-instagram', url: links.instagram },
            { id: 'social-youtube',   url: links.youtube },
            { id: 'social-tiktok',    url: links.tiktok }
        ];

        socialMap.forEach(function (item) {
            const element = document.getElementById(item.id);
            if (!element) return;

            if (item.url && item.url.trim() !== '') {
                element.href = item.url;
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });

        // Mapeamento dos Links do Rodapé
        const footerMap = [
            { id: 'link-privacidade', url: links.privacidade },
            { id: 'link-termos',      url: links.termos }
        ];

        footerMap.forEach(function (item) {
            const element = document.getElementById(item.id);
            if (element && item.url) {
                element.href = item.url;
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();
