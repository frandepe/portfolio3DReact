# Finanflix - Plataforma educativa de finanzas

Finanflix es una plataforma web de educación online orientada a cursos, suscripciones y clases en vivo sobre finanzas, inversiones y criptomonedas. El proyecto fue desarrollado como una solución integral para centralizar la experiencia del alumno, la venta de contenidos digitales y la administración interna del negocio desde una misma aplicación.

## Panorama general

El desarrollo incluye una experiencia pública para explorar cursos y suscripciones, un área privada para usuarios registrados y un dashboard administrativo para gestionar contenidos, ventas, usuarios, banners promocionales, clases en vivo y configuraciones operativas.

La plataforma permite que los usuarios se registren, inicien sesión, compren cursos individuales, contraten suscripciones, accedan a contenido según permisos, continúen su progreso de aprendizaje y reciban notificaciones o correos transaccionales según el estado de sus pagos y servicios.

## Principales funcionalidades desarrolladas

- Catálogo de cursos con filtros, búsqueda, paginación/infinite scroll y páginas de detalle.
- Sistema de autenticación con credenciales, Google y Discord mediante NextAuth.
- Gestión de usuarios, perfiles, preferencias, datos de facturación y recuperación de contraseña.
- Compra de cursos y suscripciones con integración de Mercado Pago y PayPal.
- Procesamiento de webhooks para pagos aprobados, rechazados, cancelaciones y renovaciones.
- Área de usuario con cursos comprados, progreso de clases, certificados, órdenes y continuación de aprendizaje.
- Módulo de clases en vivo con creación, edición, visualización y acceso para usuarios.
- Dashboard administrativo para cursos, órdenes, suscripciones, usuarios, banners, categorías, clases en vivo y tipo de cambio.
- Automatización de correos transaccionales para pagos, suscripciones, recuperación de contraseña y avisos administrativos.
- Integración con Discord para conectar usuarios y asignar/remover roles según cursos comprados, suscripciones activas o vencimientos.
- Componentes reutilizables de UI, navegación responsive, loaders, modales, tablas, formularios y cards.

## Stack técnico

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS, Radix UI, shadcn/ui, Framer Motion.
- **Backend:** API Routes de Next.js, MongoDB, Mongoose.
- **Autenticación:** NextAuth con credenciales, Google OAuth y Discord OAuth.
- **Pagos:** Mercado Pago, PayPal y manejo de webhooks.
- **Media y contenido:** Vimeo Player, Cloudinary, visor de PDF y recursos multimedia.
- **Comunicación:** Nodemailer para emails transaccionales.
- **Comunidad:** Discord API para conexión de usuarios y administración de roles.
- **Deploy:** configuración preparada para Vercel.

## Rol y aporte

Mi trabajo se enfocó en construir una plataforma completa y escalable para la operación digital de Finanflix, integrando frontend, backend, base de datos, pagos, automatizaciones y panel administrativo. El objetivo fue transformar una oferta educativa en un producto web funcional, con flujos de compra, acceso a contenido, gestión interna y comunicación automatizada con usuarios.

El proyecto combina desarrollo de producto, integración de servicios externos y resolución de procesos operativos reales: alta de cursos, control de accesos, administración de suscripciones, seguimiento del aprendizaje, soporte a pagos offline/online y sincronización con la comunidad de Discord.

## Resultado

El resultado es una plataforma educativa a medida, pensada para vender y distribuir contenido digital, administrar alumnos y automatizar tareas clave del negocio. El desarrollo permite que Finanflix opere cursos, suscripciones y clases en vivo desde una aplicación centralizada, reduciendo tareas manuales y mejorando la experiencia de usuarios y administradores.

web: https://plataforma.finanflix.com/
