import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const incrementButton = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

function reducer(state, action) {
  switch (action.type) {
    case incrementButton.INCREMENT:
      console.log(state.count)
      return { count: state.count + 1 };
    case incrementButton.DECREMENT:
      console.log(state.count)
      return { count: state.count - 1 };
    default:
      return state;
  }
}



export default function Hero() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 })

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #FFF, #FFF)'
            : `linear-gradient(#4F0E00, ${alpha('#000000', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Valorant-XP&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >

            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Discover and compare top agents effortlessly. Access accurate, consistently updated information. Make confident, informed decisions about your next game with ease.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >

            <Button onClick={() => dispatch({ type: incrementButton.INCREMENT })} href='/agents' style={{ minWidth: "20em" }} variant="contained" color="primary">
              Start Here
            </Button>

          </Stack>

        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("https://www.cnet.com/a/img/resize/85aa642126780beeeb22809375b4bf2c6509f99e/hub/2021/09/02/1511ef05-2457-4272-918d-6719d4897e65/beta-key-art-valorant.jpg?auto=webp&fit=crop&height=900&width=1200")'
                : 'url("https://www.cnet.com/a/img/resize/85aa642126780beeeb22809375b4bf2c6509f99e/hub/2021/09/02/1511ef05-2457-4272-918d-6719d4897e65/beta-key-art-valorant.jpg?auto=webp&fit=crop&height=900&width=1200")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#FFFFF', 0.5)
                : alpha('#000000', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
