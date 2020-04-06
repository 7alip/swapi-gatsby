import React from 'react'
import { theme } from "@chakra-ui/core"


const movieIcon = {
  path: <path fill="currentColor" d="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18ZM13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54ZM9.07001 4.5L7.10001 4.91L9.85001 8.44L11.81 8.05L9.07001 4.5ZM4.16001 5.5L3.18001 5.69C2.92241 5.7408 2.67737 5.84195 2.45894 5.98765C2.24051 6.13335 2.05299 6.32073 1.90713 6.53905C1.76127 6.75738 1.65994 7.00234 1.60896 7.25991C1.55797 7.51748 1.55833 7.78257 1.61001 8.04L2.00001 10L6.90001 9.03L4.16001 5.5ZM20 12V20H4.00001V12H20ZM22 10H2.00001V20C2.00001 20.5304 2.21073 21.0391 2.5858 21.4142C2.96087 21.7893 3.46958 22 4.00001 22H20C21.11 22 22 21.11 22 20V10Z" />,
  viewBox: "0 0 24 24"
}

export default { ...theme, icons: {
  ...theme.icons,
  movieIcon
} }
