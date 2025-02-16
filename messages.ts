import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.4/ansi/colors.ts";
import {
  keypress,
  KeyPressEvent,
} from "https://deno.land/x/cliffy@v1.0.0-rc.4/keypress/mod.ts";
import { darken, lighten, mix, toHex } from 'https://cdn.skypack.dev/color2k?min';
import { keymaps, maxKeySize } from "./keymaps.ts"

const showMenu = () => {
  console.log(colors.bgBlue.black("  GWizard ⊂(´・◡・⊂ )  "))
  console.log("")
  console.log("Colores de tu tema")
}

const showColors = (c1, c2, c3, c4) => {
  console.log(
    colors.rgb24("██", parseInt(c1, 16)),
    colors.rgb24("██", parseInt(c2, 16)),
    colors.rgb24("██", parseInt(c3, 16)),
    colors.rgb24("██", parseInt(c4, 16)),
  );
}

const showCancel = () => {
  console.log(colors.bgRed.black("  Adiós ⊂(´ T n T ⊂ )  "))
  console.log(colors.red("X  Operación cancelada"))
}

const showHelp = async () => {
  console.clear()
  console.log(colors.bgCyan.black("  Atajos ⊂(´ O _ O ⊂ )  "))
  console.log("")
  for(const [key, value] of keymaps.entries()) {
    const voidSpace = " ".repeat(maxKeySize - key.length);
    console.log(key, voidSpace, " - ", value)
  }
  for await (const event: KeyPressEvent of keypress()) {
    if (event.key === "?") {
      break 
    }
  }
}

const showTheme = async (c1, c2, c3, c4) => {
  console.clear()
  console.log(colors.bgCyan.black("  Tema generado ⊂(´ ★ u ★ ⊂ )  "))
  console.log("")
  const black = toHex(darken("#" + c1, 0.4)).slice(1)
  const red = c1
  const green = c2
  const yellow = c3
  const blue = c4
  const magenta = toHex(mix("#" + c1, "#" + c4, 0.5)).slice(1)
  const cyan = toHex(mix("#" + c2, "#" + c4, 0.5)).slice(1)
  const white = toHex(lighten("#" + c1, 0.4)).slice(1)
  console.log(
    colors.rgb24("██", parseInt(black, 16)), "0",
    colors.rgb24("██", parseInt(red, 16)), "1",
    colors.rgb24("██", parseInt(green, 16)), "2",
    colors.rgb24("██", parseInt(yellow, 16)), "3",
    colors.rgb24("██", parseInt(blue, 16)), "4",
    colors.rgb24("██", parseInt(magenta, 16)), "5",
    colors.rgb24("██", parseInt(cyan, 16)), "6",
    colors.rgb24("██", parseInt(white, 16)), "7",
  )
  for await (const event: KeyPressEvent of keypress()) {
    if (event.key === "t") {
      break 
    }
  }
}

export { showMenu, showColors, showCancel, showHelp, showTheme }
