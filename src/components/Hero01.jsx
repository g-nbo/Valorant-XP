/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import AgentContext from '../context/AgentContext';
import { useContext } from 'react';
import { createTheme } from '@mui/material';
import { red, grey } from '@mui/material/colors';

export default function HeroLeft01(props) {

    const [mode, setMode] = React.useState('dark');
    const context = useContext(AgentContext)
    const agent = props.agent;

    const defaultTheme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: red,
                    divider: red[200],
                    text: {
                        primary: grey[900],
                        secondary: grey[800],
                    },
                }
                : {
                    // palette values for dark mode
                    primary: red,
                    divider: red[900],
                    background: {
                        default: grey[900],
                        paper: grey[900],
                    },
                    text: {
                        primary: '#fff',
                        secondary: grey[500],
                    },
                }),
        },
    });


    return (
        <>

            <TwoSidedLayout img={agent.fullPortrait}>
                <Typography textColor="red" fontSize="lg" fontWeight="lg">
                    {agent.role.displayName}
                </Typography>
                <Typography
                    level="h1"
                    textColor="white"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    {agent.displayName}
                </Typography>
                <Typography fontSize="lg" textColor="white" lineHeight="lg">
                    {agent.description}
                </Typography>
                <a href="/">
                    <Button style={{ backgroundColor: "dimgrey" }} size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
                        Home
                    </Button>
                </a>
                <a href={context.agents.indexOf(agent) + 1 >= context.agents.length ? context.agents[0].uuid : context.agents[context.agents.indexOf(agent) + 1].uuid}>
                    <Button style={{ backgroundColor: "crimson" }} size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
                        Next Agent
                    </Button>
                </a>

                <Typography
                    level="body-xs"
                    sx={{
                        position: 'absolute',
                        top: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >

                </Typography>
            </TwoSidedLayout>
            <hr />
            <TwoSidedLayout img={agent.abilities[0].displayIcon}>
                <div>

                    {agent.abilities.map((a, i) => {
                        return <>
                            <div key={i}>
                                <h3>{a.displayName}</h3>
                                <p>{a.description} </p>
                            </div>
                        </>

                    })}</div>
            </TwoSidedLayout>
            <hr />
            <TwoSidedLayout img={agent.role.displayIcon}>
                <div>
                    <h2>{agent.role.displayName}</h2>
                    <p>{agent.role.description}</p>
                </div>
            </TwoSidedLayout>
            <hr />
        </>
    );
}