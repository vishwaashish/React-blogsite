

export const StyleCSS = ({ colortoggle }) => {
    const root = document.documentElement;
    root?.style.setProperty(
        '--background-color',
        colortoggle ? "#1c1c27" : "#fff"
    );
    root?.style.setProperty(
        "--background-color-shade",
        colortoggle ? "#1c1c27" : "#f9f9f9"
    );
    root?.style.setProperty(
        "--color",
        colortoggle ? "#f6f9fc" : "#162039"
    );
    root?.style.setProperty(
        "--box-background-color",
        colortoggle ? "#28293d" : "#fff"
    );
    root?.style.setProperty(
        "--box-background-color-shade",
        colortoggle ? "#28293d" : "#f9f9f9"
    );
    root?.style.setProperty(
        "--pcolor",
        colortoggle ? "#adb5bd" : "#6f6f6f"
    );
    root?.style.setProperty(
        "--shadow",
        colortoggle ? "#adb5bd" : "#6f6f6f"
    );
    root?.style.setProperty(
        "--footer",
        colortoggle ? "#28293d" : "#162039"
    );
}
