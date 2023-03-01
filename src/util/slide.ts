export const slide = (direction: "up" | "down") => {
    const scroll = document.documentElement.scrollTop ?? document.body.scrollTop;

    const down =
        scroll + document.documentElement.clientHeight > document.body.scrollHeight
            ? document.body.scrollHeight - document.documentElement.clientHeight
            : scroll + document.documentElement.clientHeight;
    const up =
        scroll - document.documentElement.clientHeight <= 0
            ? 0
            : scroll - document.documentElement.clientHeight;
    const scrollValue = direction === "down" ? down : up;
    const calValue =
        Math.round(scrollValue / document.documentElement.clientHeight) *
        document.documentElement.clientHeight;
    console.table({
        scroll,
        up,
        down,
        scrollValue,
        calValue:
            Math.round(scrollValue / document.documentElement.clientHeight) *
            document.documentElement.clientHeight,
    });
    window.scrollTo({
        behavior: "smooth",
        top: calValue,
    });
};