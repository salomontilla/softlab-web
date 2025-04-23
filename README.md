# SoftLab web
**SoftLab** es una plataforma web orientada a la gestión y visualización de proyectos de software desarrollados por estudiantes universitarios como parte de su proceso de grado bajo la modalidad de **registro de software**.

## 🌐 Tecnologías utilizadas

- [Astro](https://astro.build/) – Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) – Estilos rápidos con clases utilitarias
- HTML + CSS personalizado
- [Figma](https://figma.com) – Para diseño de interfaz

# Instalación Astro

```sh
npm create astro@latest
```
## 🧞 Comandos basicos Astro

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
# 🎨 Instalación de Tailwind CSS + Montserrat en Astro
```bash
npm install -D tailwindcss
npm install @fontsource-variable/montserrat
```
## En el archivo global.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## En el archivo donde quieras usar tailwind
```bash
import './src/styles/global.css'
```
## En el global.css para usar la fuente
```bash
@theme{
    --font-montserrat: 'Montserrat Variable', sans-serif;
}
```


## 🚀 Estructura del proyecto

```
softlab/
├── public/
│   └── logos/               # Archivos estáticos: logos, imágenes, íconos, etc.
│
├── styles/
│   └── global.css           # Estilos globales del sitio
│
├── components/              # Componentes reutilizables de la interfaz
│   ├── Contacto.astro       # Sección de contacto final
│   ├── Cta.astro            # Call to Action fuerte al final de la página
│   ├── Footer.astro         # Footer principal con enlaces y datos
│   ├── Header.astro         # Encabezado con navegación principal
│   ├── Hero.astro           # Sección inicial (Hero principal)
│   ├── HeroCard.astro       # Tarjetas informativas dentro del Hero o valores
│   ├── ProjectCard.astro    # Tarjeta individual de proyecto destacado
│   └── Proyectos.astro      # Contenedor para la galería de proyectos
│
├── layouts/
│   └── Layout.astro         # Layout base que estructura la página (header/footer global)
│
├── pages/
│   └── index.astro          # Página principal del sitio (landing page)
│
└── README.md (o documentación)
```
