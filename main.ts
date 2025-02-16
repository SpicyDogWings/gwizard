import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.4/ansi/colors.ts";
import {
  keypress,
  KeyPressEvent,
} from "https://deno.land/x/cliffy@v1.0.0-rc.4/keypress/mod.ts";
import { Input } from "https://deno.land/x/cliffy@v1.0.0-rc.4/prompt/mod.ts";
import { showMenu, showColors, showCancel, showHelp, showTheme } from './messages.ts'

let color = ['000000', '000000', '000000', '000000']

let fail = false

console.clear()
showMenu()
showColors()
for await (const event: KeyPressEvent of keypress()) {
  if (["1", "2", "3", "4"].includes(event.key)){
    console.clear()
    console.log(colors.bgBlue.black("  Selección de colores  "))
    console.log("")
    color[event.key - 1] = await Input.prompt(`Color ${event.key}`);
  }  else if (event.key === "t") {
    await showTheme(color[0], color[1], color[2], color[3])
  } else if (event.key === "q") {
    console.clear()
    showCancel()
    Deno.exit()
  } else if (event.key === "?") {
    await showHelp()
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
  }
}
