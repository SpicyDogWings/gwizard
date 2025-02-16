import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.4/ansi/colors.ts";
import {
  keypress,
  KeyPressEvent,
} from "https://deno.land/x/cliffy@v1.0.0-rc.4/keypress/mod.ts";
import { Input } from "https://deno.land/x/cliffy@v1.0.0-rc.4/prompt/mod.ts";
import { showMenu, showColors, showCancel, showHelp, showTheme, showSuccess } from './messages.ts'
import { generateFile, generateTheme } from "./themes.ts"

let color = ['001A6E', '074799', '009990', 'E1FFBB']
let name

let fail = false
let valid = true
let file

console.clear()
showMenu()
showColors(color[0], color[1], color[2], color[3])
for await (const event: KeyPressEvent of keypress()) {
  if (["1", "2", "3", "4"].includes(event.key)){
    console.clear()
    console.log(colors.bgBlue.black("  Selección de colores  "))
    console.log("")
    color[event.key - 1] = await Input.prompt(`Color ${event.key}`);
  }  else if (event.key === "t") {
    const theme = generateTheme(color[0], color[1], color[2], color[3])
    await showTheme(color[0], color[1], color[2], color[3], theme)
  } else if (event.key === "n") {
    console.clear()
    console.log(colors.bgBlue.black("  Nombre del tema  "))
    console.log("")
    valid = true
    name = await Input.prompt(`Nombre`);
  } else if (event.key === "w") {
    if (!name) {
      valid = false
    } else {
      const theme = generateTheme(color[0], color[1], color[2], color[3])
      let file = generateFile(theme)
      const absHomeDir = Deno.env.get("HOME")!;
      const path = `${absHomeDir}/.config/ghostty/themes/${name}`;
      await Deno.writeTextFile(path, file);
      showSuccess()
      Deno.exit()
    }
  } else if (event.key === "?") {
    await showHelp()
  } else if (event.key === "q") {
    console.clear()
    showCancel()
    Deno.exit()
  } else {
    fail = true 
  }
  console.clear()
  showMenu()
  showColors(color[0], color[1], color[2], color[3])
  if (fail === true) {
    console.log("")
    console.log(colors.red("?  Acción no reconocida"))
    fail = false
  } else if ( valid === false) {
    console.log("")
    console.log(colors.yellow("!  Falta el nombre"))
    valid = false
  }
}
