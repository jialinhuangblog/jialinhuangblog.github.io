import { proxy } from 'valtio'
import palettes from '~/modules/styling/palettes'

export const themeProxy = proxy({ color: palettes[Math.floor(Math.random() * palettes.length)] })
