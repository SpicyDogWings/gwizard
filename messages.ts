import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.4/ansi/colors.ts";
import { keypress } from "https://deno.land/x/cliffy@v1.0.0-rc.4/keypress/mod.ts";
import { keymaps, maxKeySize } from "./keymaps.ts"
import Theme from "./theme.d.ts"


const showMenu = () => {
  console.log(colors.bgBlue.black("  GWizard ⊂(´・◡・⊂ )  "))
  console.log("")
  console.log("Colores de tu tema")
}

const showColors = (c1: string, c2: string, c3: string, c4: string) => {
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

const showSuccess = () => {
  console.clear()
  console.log(colors.bgGreen.black("  Tema creado con éxito ⊂(´ W u W ⊂ )  "))
  console.log("")
  console.log("")
}

const showHelp = async () => {
  console.clear()
  console.log(colors.bgCyan.black("  Atajos ⊂(´ O _ O ⊂ )  "))
  console.log("")
  for(const [key, value] of keymaps.entries()) {
    const voidSpace = " ".repeat(maxKeySize - key.length);
    console.log(key, voidSpace, "   -   ", value)
  }
}

const showTheme = async (theme: Theme) => {
  console.clear()
  console.log(colors.bgCyan.black("  Tema generado ⊂(´ ★ u ★ ⊂ )  "))
  console.log("")
  const black = theme.black
  const red = theme.red
  const green = theme.green
  const yellow = theme.yellow
  const blue = theme.blue
  const magenta = theme.magenta
  const cyan = theme.cyan
  const white = theme.white
  const softBlack = theme.softBlack 
  const softRed = theme.softRed
  const softGreen= theme.softGreen
  const softYellow = theme.softYellow
  const softBlue = theme.softBlue
  const softMagenta = theme.softMagenta
  const softCyan = theme.softCyan
  const softWhite = theme.softWhite
  const background = theme.background 
  const foreground = theme.foreground
  const cursorColor = theme.cursorColor
  const cursorText = theme.cursorText
  const selectionBackground = theme.selectionBackground
  const selectionForeground = theme.selectionForeground
  console.log(
    colors.rgb24("██", parseInt(black, 16)), " 0",
    colors.rgb24("██", parseInt(red, 16)), " 1",
    colors.rgb24("██", parseInt(green, 16)), " 2",
    colors.rgb24("██", parseInt(yellow, 16)), " 3",
    colors.rgb24("██", parseInt(blue, 16)), " 4",
    colors.rgb24("██", parseInt(magenta, 16)), " 5",
    colors.rgb24("██", parseInt(cyan, 16)), " 6",
    colors.rgb24("██", parseInt(white, 16)), " 7",
  )
  console.log(
    colors.rgb24("██", parseInt(softBlack, 16)), " 8",
    colors.rgb24("██", parseInt(softRed, 16)), " 9",
    colors.rgb24("██", parseInt(softGreen, 16)), "10",
    colors.rgb24("██", parseInt(softYellow, 16)), "11",
    colors.rgb24("██", parseInt(softBlue, 16)), "12",
    colors.rgb24("██", parseInt(softMagenta, 16)), "13",
    colors.rgb24("██", parseInt(softCyan, 16)), "14",
    colors.rgb24("██", parseInt(softWhite, 16)), "15",
  )
  console.log("")
  console.log(
    colors.rgb24("██", parseInt(background, 16)), "background",
  )
  console.log(
    colors.rgb24("██", parseInt(foreground, 16)), "foreground",
  )
  console.log(
    colors.rgb24("██", parseInt(cursorColor, 16)), "cursor-color",
  )
  console.log(
    colors.rgb24("██", parseInt(cursorText, 16)), "cursor-text",
  )
  console.log(
    colors.rgb24("██", parseInt(selectionBackground, 16)), "selection-background",
  )
  console.log(
    colors.rgb24("██", parseInt(selectionForeground, 16)), "selection-foreground",
  )
}

export { showMenu, showColors, showCancel, showHelp, showTheme, showSuccess }
