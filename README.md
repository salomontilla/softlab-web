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

## 🚀 Estructura del proyecto
```
softlab/
├── public/
│   ├── img/                          # Imágenes públicas generales
│   └── logos/
│       ├── base/                     # Logos base del branding
│       ├── social/                   # Íconos/redes sociales
│       └── techs/                    # Logos de tecnologías usadas
├── src/
│   ├── assets/
│   │   ├── authors/                  # Recursos relacionados con autores
│   │   ├── base/                     # Recursos base compartidos
│   │   └── products/                 # Imágenes y datos relacionados a productos
│   ├── components/                   # Componentes reutilizables de la interfaz
│   │   ├── Contacto.astro            # Sección de contacto final
│   │   ├── Cta.astro                 # Call to Action fuerte al final de la página
│   │   ├── Footer.astro              # Footer principal con enlaces y datos
│   │   ├── Header.astro              # Encabezado con navegación principal
│   │   ├── Hero.astro                # Sección inicial (Hero principal)
│   │   ├── HeroCard.astro            # Tarjetas informativas dentro del Hero o valores
│   │   ├── ProjectCard.astro         # Tarjeta individual de proyecto destacado
│   │   └── Proyectos.astro           # Contenedor para la galería de proyectos
│   ├── layouts/
│   │   └── Layout.astro              # Layout base que estructura la página (header/footer global)
│   └── pages/
│       ├── index.astro               # Página principal del sitio (landing page)
│       ├── productos/               # Página de listado de productos
│       └── producto-detalle/        # Página individual para detalle de producto
├── styles/
│   └── global.css                    # Estilos globales del sitio
└── README.md                         # Documentación principal del proyecto
```
