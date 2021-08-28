import {Parallax} from 'react-scroll-parallax'

export default function ParallaxContent(props: {children: React.ReactNode; yOffset: number[]}) {
    return (
        <Parallax className="custom-class" y={props.yOffset} tagOuter="figure">
            {props.children}
        </Parallax>
    )
}
