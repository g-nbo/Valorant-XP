/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function HeroLeft01(props) {

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
                <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
                    Next Agent
                </Button>
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
            <TwoSidedLayout>
                    <div>Something</div>
            </TwoSidedLayout>
        </>
    );
}