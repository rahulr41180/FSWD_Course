
import { memo } from "react";
import { SlowItem } from "./SlowItem";

export const SlowList = memo(({text}) => {

    console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

    let items = [];
    for (let i = 0; i < 100; i++) {
        items.push(<SlowItem key={i} number={i+1} text={text} />);
    }


    return (
        <ul className="items">
            {items}
        </ul>
    )
})