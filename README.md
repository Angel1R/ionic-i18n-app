# Ionic i18n - Aplicación Multilenguaje Dinámica

Este proyecto es una aplicación móvil híbrida desarrollada con **Ionic v8** y **Angular**, diseñada para demostrar la implementación profesional de la internacionalización (i18n) y localización (l10n) en arquitecturas modernas de software.

La aplicación utiliza reactividad de vanguardia mediante **Angular Signals** y la nueva sintaxis de **Control Flow (`@if`, `@for`)**, eliminando por completo el uso de módulos tradicionales (`NgModule`) y directivas estructurales obsoletas (`*ngIf`, `*ngFor`).

---

## Características Principales

* **Cambio de Idioma en Caliente:** Soporte dinámico para tres idiomas en tiempo de ejecución: Español (`es`), Inglés (`en`) y Chino Simplificado (`zh`).
* **Arquitectura Standalone:** Configuración e inyección de dependencias puras mediante `bootstrapApplication` y funciones funcionales de Angular.
* **Internacionalización en Capa de Negocio:** Uso del servicio de traducción directamente en TypeScript para componentes interactivos (`ToastController`).
* **UI/UX Premium:** Interfaz oscura con estética *Glassmorphism* (cristal esmerilado) y orbes de fondo animados nativamente con CSS3 (`@keyframes`).

---

## Requisitos Previos

Antes de levantar el proyecto, asegúrate de tener instalado lo siguiente en tu sistema:

1.  **Node.js** (Versión LTS recomendada)
2.  **Ionic CLI** instalado de forma global:
    ```bash
    npm install -g @ionic/cli
    ```

---

## 💻 Instrucciones para Levantar el Proyecto

Sigue estos pasos en tu terminal para ejecutar la aplicación localmente:

### 1. Clonar el repositorio
```bash
git clone <https://github.com/Angel1R/ionic-i18n-app>
cd <AppI18n>