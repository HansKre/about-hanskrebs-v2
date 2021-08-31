import {useState, useLayoutEffect, useRef} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

import statsPreviewCardImgDesktop from '../assets/works/fem-stats-preview-card-desktop.png'
import statsPreviewCardImgMobile from '../assets/works/fem-stats-preview-card-mobile.png'
import orderSummaryImg from '../assets/works/fem-order-summary.png'
import carbonImg from '../assets/works/carbon-emissions.gif'
import dionysosImg from '../assets/works/dionysos.png'
import pomodoroImg from '../assets/works/pomodoro.gif'
import calcImg from '../assets/works/calc.gif'

const MARGINS_TOP = 200;
const MARGINS_LEFT_RIGHT = 60;

type StyleProps = {
    flexRowWidth: number;
}

const useStyles = makeStyles({
    hoverable: {
        transition: 'all .2s ease-in-out',
        "&:hover": {
            transform: 'scale(1.29)',
        },
    },
    img: {
        borderRadius: '10px',
        position: 'relative',
    },
    scale10: {
        transform: 'scale(1.25)',
    },
    landscapeImg: (props: StyleProps) => ({
        width: `${(props.flexRowWidth - 2 * MARGINS_LEFT_RIGHT) / 1.5}px`,
    }),
    portraitSideImg: (props: StyleProps) => ({
        height: `${(props.flexRowWidth - 2 * MARGINS_LEFT_RIGHT) / 2.6 * 0.59}px`,
    }),
    portraitImg: {
        height: `${window.visualViewport.height * 0.6}px`,
    },
    marginRight: {
        marginRight: `${MARGINS_LEFT_RIGHT}px`,
    },
    marginLeft: {
        marginLeft: `${MARGINS_LEFT_RIGHT}px`,
    },
});

export default function Works() {
    const flexRowRef = useRef<HTMLDivElement>(null);
    const [flexRowWidth, setWidth] = useState(0);
    const classes = useStyles({flexRowWidth});

    useLayoutEffect(() => {
        setWidth(flexRowRef.current?.offsetWidth || 0);
    }, [flexRowRef])

    return (
        <>
            <h1>Works 🔮</h1>
            <h2 >
                As my preferred techstack I'm using <span>React</span> with <span>Typescript</span> and <span>Material-UI</span> 💻.
            </h2>
            <div
                ref={flexRowRef}
                id='flexRow'
                style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}} >
                {flexRowWidth && <div style={{display: 'flex', flex: '1 1 100%', marginTop: `${MARGINS_TOP}px`}}>
                    <Paper elevation={12} style={{display: 'flex', flex: '1 1 100%'}}>
                        <div style={{display: 'flex', flex: '0 1 50%', justifyContent: 'flex-end'}}>
                            <a style={{marginBottom: '-5px'}} href='https://vigorous-wright-d3c341.netlify.app/' target='_blank' rel='noreferrer' ><img
                                className={`${classes.img} ${classes.portraitImg} ${classes.marginRight} ${classes.scale10} ${classes.hoverable}`}
                                src={orderSummaryImg}
                                alt={orderSummaryImg} /></a>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', flex: '0 1 50%', height: '100%', justifyContent: 'center'}}>
                            <h1>Order Summary Component</h1>
                            <h2 style={{paddingTop: 0}}>A beautiful, responsive & reuseable order summary component.</h2>
                        </div>
                    </Paper>
                </div>}
                {flexRowWidth && <div style={{display: 'flex', flex: '1 1 100%', marginTop: `${MARGINS_TOP}px`}}>
                    <Paper elevation={12} style={{display: 'flex', flex: '1 1 100%'}} >
                        <div style={{display: 'flex', flexDirection: 'column', flex: '0 1 50%', alignItems: 'flex-end', height: '100%', justifyContent: 'center'}}>
                            <h1 style={{textAlign: 'end'}} >React Calculator</h1>
                            <h2 style={{textAlign: 'end', paddingLeft: '70px', paddingTop: 0}}>Showcase for passing data between components using <span>props</span>, <span>grid layout</span> and hand-picked fonts to get that digital look.</h2>
                        </div>
                        <div style={{display: 'flex', flex: '0 1 50%', justifyContent: 'flex-start'}}>
                            <a style={{marginBottom: '-5px'}} href='https://calculator4711.s3.eu-central-1.amazonaws.com/index.html' target='_blank' rel='noreferrer' ><img
                                className={`${classes.img} ${classes.portraitImg} ${classes.marginLeft} ${classes.scale10} ${classes.hoverable}`}
                                src={calcImg}
                                alt={calcImg} /></a>
                        </div>
                    </Paper>
                </div>}
                {flexRowWidth && <div style={{display: 'flex', flex: '1 1 100%', marginTop: `${MARGINS_TOP}px`}}>
                    <Paper elevation={12} style={{display: 'flex', flex: '1 1 100%'}} >
                        <div style={{display: 'flex', flex: '0 1 50%', justifyContent: 'flex-end'}}>
                            <a style={{marginBottom: '-5px'}} href='https://hardcore-bhabha-ce15d5.netlify.app/' target='_blank' rel='noreferrer' ><img
                                className={`${classes.img} ${classes.portraitImg} ${classes.marginRight} ${classes.scale10} ${classes.hoverable}`}
                                src={carbonImg}
                                alt={carbonImg} /></a>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', flex: '0 1 50%', height: '100%', justifyContent: 'center'}}>
                            <h1>Electricity to Carbon Emissions</h1>
                            <h2 style={{paddingTop: 0}}>Showcase for interactive <span>3rd party API</span> usage.</h2>
                        </div>
                    </Paper>
                </div>}
                {flexRowWidth && <div style={{display: 'flex', flex: '1 1 100%', marginTop: `${MARGINS_TOP}px`}}>
                    <Paper elevation={12} style={{display: 'flex', flex: '1 1 100%'}} >
                        <div style={{display: 'flex', flexDirection: 'column', flex: '0 1 50%', alignItems: 'flex-end', height: '100%', justifyContent: 'center'}}>
                            <h1 style={{textAlign: 'end'}} >Greek Restaurant</h1>
                            <h2 style={{textAlign: 'end', paddingLeft: '70px', paddingTop: 0}}>Responsive page for Dionysos Restaurant with design inspiration from <span>Behance</span>.</h2>
                        </div>
                        <div style={{display: 'flex', flex: '0 1 50%', justifyContent: 'flex-start'}}>
                            <a style={{marginBottom: '-5px'}} href='https://reverent-benz-f8a629.netlify.app/' target='_blank' rel='noreferrer' ><img
                                className={`${classes.img} ${classes.portraitImg} ${classes.marginLeft} ${classes.scale10} ${classes.hoverable}`}
                                src={dionysosImg}
                                alt={dionysosImg} /></a>
                        </div>
                    </Paper>
                </div>}
                {flexRowWidth && <div style={{display: 'flex', flex: '1 1 100%', marginTop: `${MARGINS_TOP}px`}}>
                    <Paper elevation={12} style={{display: 'flex', flex: '1 1 100%'}} >
                        <div style={{display: 'flex', flex: '0 1 50%', justifyContent: 'flex-end'}}>
                            <a style={{marginBottom: '-5px'}} href='https://pomodoro4711.s3.eu-central-1.amazonaws.com/index.html' target='_blank' rel='noreferrer' ><img
                                className={`${classes.img} ${classes.portraitImg} ${classes.marginRight} ${classes.scale10} ${classes.hoverable}`}
                                src={pomodoroImg}
                                alt={pomodoroImg} /></a>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', flex: '0 1 50%', height: '100%', justifyContent: 'center'}}>
                            <h1>React Pomodoro Click</h1>
                            <h2 style={{paddingTop: 0}}>Another showcase for passing data between components using <span>props</span> for interactivity.</h2>
                        </div>
                    </Paper>
                </div>}
                {flexRowWidth && <div style={{display: 'flex', flex: '1 1 100%', marginTop: `${MARGINS_TOP}px`}}>
                    <Paper elevation={12} style={{display: 'flex', flex: '1 1 100%', flexDirection: 'column'}} >
                        <h1 style={{textAlign: 'center', marginBottom: '70px'}} >Stats Preview Card</h1>
                        <div style={{display: 'flex'}}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: '0 1 50%', alignItems: 'flex-end', height: '100%', justifyContent: 'center'}}>
                                <h2 style={{textAlign: 'end', paddingLeft: '70px', paddingTop: 0}}>Yet another beautiful, responsive & reuseable react component.</h2>
                            </div>
                            <div style={{display: 'flex', flex: '0 1 50%', justifyContent: 'flex-start'}}>
                                <a style={{marginBottom: '-5px'}} href='https://dazzling-roentgen-c2c3a7.netlify.app/' target='_blank' rel='noreferrer' ><img
                                    className={`${classes.img} ${classes.portraitImg} ${classes.marginLeft} ${classes.hoverable}`}
                                    src={statsPreviewCardImgMobile}
                                    alt={statsPreviewCardImgMobile} /></a>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: `${MARGINS_TOP * 0.4}px`, marginBottom: '70px'}}>
                            <a style={{marginBottom: '-5px'}} href='https://dazzling-roentgen-c2c3a7.netlify.app/' target='_blank' rel='noreferrer' ><img
                                className={`${classes.img} ${classes.landscapeImg} ${classes.marginLeft} ${classes.hoverable}`}
                                src={statsPreviewCardImgDesktop}
                                alt={statsPreviewCardImgDesktop} /></a>
                        </div>
                    </Paper>
                </div>}
            </div>
        </>
    )
}
