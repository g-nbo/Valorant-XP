/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import AgentContext from '../context/AgentContext';
import { useContext } from 'react';

export default function HeroLeft01(props) {

    const context = useContext(AgentContext)
    const agent = props.agent;


    return (
        <>
            <TwoSidedLayout img={agent.fullPortrait}>
                <Typography color="primary" fontSize="lg" fontWeight="lg">
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
                <a href={context.agents.indexOf(agent) + 1 >= context.agents.length ? context.agents[0].uuid : context.agents[context.agents.indexOf(agent) + 1].uuid}>
                    <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
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
                            <h3>{a.displayName}</h3>
                            <p key={i}>{a.description} </p>
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