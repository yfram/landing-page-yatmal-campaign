import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
    direction: 'rtl',
});

const RtlMui = ({ children }) => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CacheProvider>
    );
};

export default RtlMui;