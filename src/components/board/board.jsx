import React, { useLayoutEffect } from 'react';
import './board.css';
import Grid from './index';

function Board({ start }) {

    // grid.create()

    useLayoutEffect(() => {
        const grid = new Grid(10)
        grid.create()
        console.log(grid)
    }, [])

    return (
        <div className={"board" + (start ? "show" : "hidden")} >
            fdgdfg
        </div >
    );
}

export default React.memo(Board);
