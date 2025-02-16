import { darken, lighten, mix, toHex } from 'https://cdn.skypack.dev/color2k?min';
import Theme from "./theme.d.ts"

function createEmptyTheme(): Theme {
  return {
    black: "",
    softBlack: "",
    red: "",
    softRed: "",
    green: "",
    softGreen: "",
    yellow: "",
    softYellow: "",
    blue: "",
    softBlue: "",
    magenta: "",
    softMagenta: "",
    cyan: "",
    softCyan: "",
    white: "",
    softWhite: "",
    background: "",
    foreground: "",
    cursorColor: "",
    cursorText: "",
    selectionBackground: "",
    selectionForeground: "",
  };
}

function generateTheme (c1: string, c2: string, c3: string, c4: string): Theme {
  const theme = createEmptyTheme()
  theme.black = toHex(darken("#" + c1, 0.2)).slice(1)
  theme.softBlack = toHex(lighten("#" + theme.black, 0.1)).slice(1)
  theme.red = c1
  theme.softRed = toHex(lighten("#" + theme.red, 0.1)).slice(1)
  theme.green = c2
  theme.softGreen= toHex(lighten("#" + theme.green, 0.1)).slice(1)
  theme.yellow = c3
  theme.softYellow = toHex(lighten("#" + theme.yellow, 0.1)).slice(1)
  theme.blue = c4
  theme.softBlue = toHex(lighten("#" + theme.blue, 0.1)).slice(1)
  theme.magenta = toHex(mix("#" + c1, "#" + c4, 0.5)).slice(1)
  theme.softMagenta = toHex(lighten("#" + theme.magenta, 0.1)).slice(1)
  theme.cyan = toHex(mix("#" + c2, "#" + c4, 0.5)).slice(1)
  theme.softCyan = toHex(lighten("#" + theme.cyan, 0.1)).slice(1)
  theme.white = toHex(lighten("#" + c1, 0.4)).slice(1)
  theme.softWhite = toHex(lighten("#" + theme.white, 0.1)).slice(1)
  theme.background = toHex(darken("#" + theme.red, 0.3)).slice(1)
  theme.foreground = toHex(lighten("#" + theme.red, 0.5)).slice(1)
  theme.cursorColor = toHex(lighten("#" + theme.blue, 0.2)).slice(1)
  theme.cursorText = toHex(darken("#" + theme.blue, 0.2)).slice(1)
  theme.selectionBackground = toHex(lighten("#" + theme.cyan, 0.2)).slice(1)
  theme.selectionForeground = toHex(darken("#" + theme.cyan, 0.2)).slice(1)
  return theme
}

function generateFile (theme: Theme) {
  const file = 
  `palette = 0=#${theme.black}
palette = 1=#${theme.red}
palette = 2=#${theme.green}
palette = 3=#${theme.yellow}
palette = 4=#${theme.blue}
palette = 5=#${theme.magenta}
palette = 6=#${theme.cyan}
palette = 7=#${theme.white}
palette = 8=#${theme.softBlack}
palette = 9=#${theme.softRed}
palette = 10=#${theme.softGreen}
palette = 11=#${theme.softYellow}
palette = 12=#${theme.softBlue}
palette = 13=#${theme.softMagenta}
palette = 14=#${theme.softCyan}
palette = 15=#${theme.softWhite}
background = #${theme.background}
foreground = #${theme.foreground}
cursor-color = #${theme.cursorColor}
cursor-text = #${theme.cursorText}
selection-background = #${theme.selectionBackground}
selection-foreground = #${theme.selectionForeground}`
  return file
}

export { generateFile, generateTheme }
