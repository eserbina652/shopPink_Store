import React, {useCallback, useEffect, useRef, useState} from "react";
import {Effect} from "./classes/Effect";
import {IAnimate, ISymbol} from "./types";
import {BodyCanvas, Canvas, CanvasPage} from "./styles";

let lastTime = 0;
const fps = 40;
const nextFrame = 1000 / fps;
let timer = 0;
const CanvasComponent: React.FC = () => {//идентичні компоненти але в тому проєкті працює а в цьому  висота канвасу змінюється при кожному ресайзі
    let canvasRef = useRef<HTMLCanvasElement | null>(null);
    let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
    let requestRef = useRef();
    const effect = useRef<any>();
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });


    useEffect(() => {
        window.addEventListener('resize', handleResize, false);
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            if (canvasCtxRef.current) {
                effect.current = new Effect(dimensions.width, dimensions.height);
                canvasCtxRef.current.canvas.width = window.innerWidth;
                canvasCtxRef.current.canvas.height = window.innerHeight-135;
            }
            //@ts-ignore
            requestRef.current = requestAnimationFrame(animate);
            // @ts-ignore
            return () => cancelAnimationFrame(requestRef.current);
        }
    },[dimensions])


    const animate = useCallback((timeStamp: IAnimate) => {
        // @ts-ignore
        const deltaTime = timeStamp - lastTime;
        // @ts-ignore
        lastTime = timeStamp;
        if (timer > nextFrame) {
            if (canvasCtxRef.current && effect.current) {
                canvasCtxRef.current.fillStyle = 'rgba(0, 0, 0, 0.05)';
                canvasCtxRef.current.fillRect(
                    0,
                    0,
                    canvasCtxRef.current?.canvas.width,
                    canvasCtxRef.current?.canvas.height
                );
                canvasCtxRef.current.font = effect.current.fontSize + 'px monospace';
                effect.current.symbols.forEach((symbol: ISymbol) =>
                    symbol.draw(canvasCtxRef.current)
                );
            }
            timer = 0;
        } else {
            timer += deltaTime
        }
        if (requestRef.current !== null) {
            // @ts-ignore
            requestRef.current = requestAnimationFrame(animate);
        }
    },[]);
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    return (
        <>
            <CanvasPage>
                <BodyCanvas>
                    <Canvas ref={canvasRef}/>
                </BodyCanvas>
            </CanvasPage>
        </>
    )
}
export default CanvasComponent