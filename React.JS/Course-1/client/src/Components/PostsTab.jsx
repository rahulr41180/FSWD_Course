
import { SlowPost } from "./SlowPost";

export const PostsTab = () => {
    // Log once. The actual slowdown is inside SlowPost.
    console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

    let items = [];
    for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }


    return (
        <ul className="items">
            {items}
        </ul>
    )
}