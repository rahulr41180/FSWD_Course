
export const SlowItem = ({number, text}) => {

    console.log("SlowItem");
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // Do nothing for 1 ms per item to emulate extremely slow code
    }

    return (
        <li className="item">
            Text {number}: {text}
        </li>
    )
}