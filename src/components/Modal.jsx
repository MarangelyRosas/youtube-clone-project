import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50",
    transform: "transform(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000
}
const OVERLAY_STYLES ={
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: white,
    zIndex: 1000

}

export default function Modal({open, children, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} onClock={onClose} />
        <div style={MODAL_STYLES}>{children}
        <button onClick={onClose}>X</button>
        </div>
        </>,
        document.getElementById("portal")
    )
}