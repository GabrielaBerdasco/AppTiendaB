# PROYECTO E-COMMERCE TIENDA BONACHONA

Proyecto desarrollado para el curso Desarrollo de Aplicaciones de CoderHouse, camada 19215.

## Sobre la tienda

Tienda Bonachona es un e-commerce que vende productos del hogar y accesorios útiles con el fin de donar parte de la ganancia a distintas causas benéficas.

## Descripción del proyecto

El desarrollo hasta ahora está pensando como un e-commerce user-friendly, claro y simple de entender para el usuario. En TIENDA se encuentran los enlaces a las distintas categorías donde el usuario podrá seleccionar productos para luego realizar una orden desde el carrito. El CARRITO se encuentra en un tab independiente de la tienda, cuenta con la posibilidad de eliminar productos, el flujo exige seleccionar productos, elegir la ubicación para poder ver el botón de confirmación de compra.
El tercer tab es una lista de ordenes realizadas por el cliente, con datos como el número de la misma, el total y la dirección de entrega. Estos datos son persistentes gracias al uso de SQLite. 

### Dependencias extras:

* Expo: Utilizado para la creación de la aplicación y así obtener desarrollo optimizado del e-commerce.

* react-navigation: Utilizado para la navegación entre pantallas y tomar parámetros de las mismas. Bottom-tabs se ultilizó para la navegación entre los tabs mencionados previamente. 

* expo-app-loading y expo-font: Para la implementación de tipografía seleccionada en Google Fonts.

* expo-location: Paquete que permite el uso de los servicios de gps del dispositivo.

* Firebase: Se utilizó para almacenar colecciones de datos, a través de Realtime y también para la autenticación del usuario.

* React-Native-dotenv: Dependencia utilizada para almacenar de forma segura información sensible del proyecto.

* React-Native-Paper: empleado para el uso de Snackbar al confirmar el pedido en el carrito.

* Este proyecto cuenta también con el uso de react-redux, redux y redux-thunk para el tratamiento de estados.