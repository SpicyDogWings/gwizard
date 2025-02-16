const keymaps = new Map()
keymaps.set("?", "Alternar ayuda")
keymaps.set("t", "Alternar previsualización del tema")
keymaps.set("1,2,3,4", "Seleccionar color hex 1,2,3,4")
keymaps.set("n", "Introducir nombre del tema")
keymaps.set("w", "Crear el tema")
keymaps.set("q", "Cancelar el tema")

let maxKeySize = 0

for (const key of keymaps.keys()) {
  maxKeySize = Math.max(maxKeySize, key.length);
}

export { keymaps, maxKeySize }
