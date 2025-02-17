# Gwizard
Un creador de temas para Ghostty Terminal

## Motivo
Surge con la necesidad de no encontrar una herramienta para crear dichos temas.

## Dependencias
- Deno 2^

## Instalación
1. Clonar el repositorio
2. Instalar las dependencias con el siguiente comando
```
deno i
```
3. Compilar el proyecto con el siguiente comando
```
deno task build
```
4. Mover el ejecutable al directorio de binarios
```
cp ./gwizard ~/.local/bin/
```
5. Cerrar la terminal, abrir una nueva y ejecutar el comando `gwizard`

## Uso
1. Ejecutar el comando `gwizard`
2. Escojer los 4 colores del tema e introducirlos el los respectivos campos tocando los números 1,2,3,4 en el teclado
3. Ver el tema previsualizado con la letra 't'
4. Introducir un nombre al tema tocando la letra 'n'
5. Crear el tema con la letra 'w'
6. Si tiene alguna duda con los atajos puede tocar el caracter '?'
7. El archivo se guarda en la dirección ~/.config/ghostty/themes/
8. Puede ver una vista previa del tema con el comando `ghostty +list-themes`

