import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const useMedia = (): { isPad: boolean; isPc: boolean; isPhone: boolean } => {
  const theme = useTheme()
  // 1200 up
  const isPc = useMediaQuery(theme.breakpoints.up('lg'))
  // 600-1200
  const isPad = useMediaQuery(theme.breakpoints.between('sm', 'lg'))
  // 600 down
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'))
  return {
    isPad,
    isPc,
    isPhone,
  }
}

export default useMedia
