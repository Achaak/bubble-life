import { createTheme } from '@pikas-ui/styles';

export const defaultTheme: ReturnType<typeof createTheme> = createTheme({
  colors: {
    BLACK: '#000000',
    BLACK_LIGHT: 'rgba(0, 0, 0, 0.5)',
    BLACK_LIGHTER: 'rgba(0, 0, 0, 0.25)',
    BLACK_LIGHTEST_2: 'rgba(0, 0, 0, 0.1)',
    BLACK_LIGHTEST_1: 'rgba(0, 0, 0, 0.05)',

    WHITE: '#FFFFFF',
    WHITE_LIGHT: 'rgba(249, 247, 247, 0.7)',
    WHITE_LIGHTER: 'rgba(249, 247, 247, 0.5)',
    WHITE_LIGHTEST_2: 'rgba(249, 247, 247, 0.35)',
    WHITE_LIGHTEST_1: 'rgba(249, 247, 247, 0.25)',

    BACKGROUND: '#000000',
  },
});
