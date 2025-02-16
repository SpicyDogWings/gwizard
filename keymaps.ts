const keymaps = new Map()
keymaps.set("?", "Alternar ayuda")
keymaps.set("1,2,3,4", "Seleccionar color hex 1,2,3,4")
keymaps.set("q", "Cancelar el tema")
keymaps.set("t", "Alternar tema")

let maxKeySize = 0

for (const key of keymaps.keys()) {
  maxKeySize = Math.max(maxKeySize, key.length);
}

export { keymaps, maxKeySize }
