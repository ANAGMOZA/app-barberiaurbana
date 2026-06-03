# 💈 Barbería Urbana - Landing Page

Esta es una propuesta de sitio web frontend moderno e individual para una **Barbería Urbana**, desarrollado como parte de la **Evaluación N°1** para la asignatura de **Taller de Desarrollo Web** en la carrera de **Ingeniería en Informática**.

El proyecto consiste en una Landing Page completamente responsiva construida exclusivamente con tecnologías nativas (HTML5 y CSS3 puro), aplicando estándares de semántica, accesibilidad visual y control de versiones.

---

## 📋 Requisitos del Proyecto Cumplidos

- **HTML5 Semántico:** Uso de etiquetas estructurales (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) validado bajo los estándares del W3C.
- **CSS3 Puro y Variables:** Estilos centralizados en una hoja externa usando variables CSS (`--primary-color`, `--accent-color`, etc.) para mantener la consistencia del diseño. Sin frameworks de terceros.
- **Diseño Responsivo (Mobile First / Desktop):** Adaptabilidad total mediante Media Queries con un breakpoint principal establecido a partir de los `768px`.
- **Accesibilidad (WCAG AA):** Contraste mínimo garantizado de 4.5:1 para el texto sobre el fondo, uso estricto del atributo `alt` en imágenes y etiquetas `label` vinculadas correctamente en el formulario.
- **Validación con JavaScript:** Control de errores personalizado en el lado del cliente para asegurar que todos los campos del formulario de reserva estén validados antes de procesar la solicitud.

---

## 📁 Estructura de Carpetas

El proyecto sigue una organización limpia y estricta en minúsculas y sin espacios, manteniendo la modularidad de los recursos dentro de la carpeta `src/`:

```text
barberia-urbana/
├── index.html          # Punto de entrada principal de la Landing Page
├── .gitignore          # Exclusión de archivos locales de rastreo de Git
├── README.md           # Documentación general del proyecto (este archivo)
└── src/
    ├── css/
    │   └── styles.css  # Estilos generales, layouts y media queries
    ├── js/
    │   └── form.js    # Lógica de validación del formulario de contacto
    └── assets/         # Recursos estáticos (Logotipos e imágenes)
        ├── logo.jpg
        └── barberia.jpg

file:///C:/Users/UltraBook/Desktop/App-BarberiaUrbana/index.html