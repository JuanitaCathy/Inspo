import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        primary: "#0FA958",
        dark:"#1E1E1E",
        light:"#ffffff",
        accent:"#363636",
        darkAlt:"#455A64",
        error: "#FF0000"
    },
    fonts: {
        heading: `"Quicksand", sans-serif`,
        body: `"Quicksand", sans-serif`,
    },
})

export default theme;