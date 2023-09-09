# Prueba tecnica

### ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

La decsion que tome para el desarrollo de esta prueba tecnica fue modulerizar los components como funciones, que se van ha usar para que todo este centralizado algo de principios de atomic design.

Las carpetas estas de forma que se recomiendo en la [documentación de Next JS](https://nextjs.org/docs/getting-started/project-structure "documentación de Next JS"); tambien la carpeta main que esta en dentro de app la hice de esa forma para tener separado cada ruta de cada pagina en [Grupos de rutas](https://nextjs.org/docs/app/building-your-application/routing/route-groups "Grupos de rutas").

El **loading** y **control de errores ** no se uso recoil debido que el propio next tiene sus archivos que controlan los errores y el loading cada vez que se carga la data que son `error.tsx` y `loading.tsx` que son el [archivo de errores](https://nextjs.org/docs/app/api-reference/file-conventions/error "archivo de errores") y [archivo de loading](https://nextjs.org/docs/app/api-reference/file-conventions/loading "archivo de loading").

La libreria Mui se implento para el [modal](https://mui.com/material-ui/react-modal/ "modal") de cada card, se utilixo mas que usar [serve components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns "serve components") y brinda mayor segiridad y no reduce la carga de archivos en el lado del cliente [aquí la documentación](https://nextjs.org/docs/app/building-your-application/rendering/server-components "aquí la documentación").

esta implementado [Recoil JS](https://recoiljs.org/ "Recoil JS"), se configuro y se establecio el store base pero no se uso debido que no habia informacion para que o almacenar informacion en algun estado, pues next brinda mucho ya ayudas para manejar ciertas cosas.

Para el testing se uso [vitest](https://vitest.dev/guide/ "vitest") donde se implemento al proyecto y se hizo unas pruebas en dos components.

### ¿Hay alguna mejora que pueda hacer en su envío?

Mas que mejoras al codigo, es mas que todo agregar mas funcionalidades que se pueden mejorar al funcionalidad a la pagina.

### ¿Qué haría de manera diferente si se le asignara más tiempo?

Un diseño mas moderno a los distintos componentes, una section de register y login con cuentas de google 


------------



#### Instalacion
`npm install `

#### Deploy en ambiente de desarrollo
`npm run dev`

#### Build

`npm run build`

#### run test

`npm run test`


------------

[ver el proyecto en la Web](https://devontic-prueba-tecnica.vercel.app/ "ver el proyecto en la Web")
