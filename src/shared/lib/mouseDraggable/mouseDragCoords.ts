import React from "react";

export const mouseDragCoords = (e: React.DragEvent<HTMLDivElement>) => {
    const obj = e.target as HTMLElement
    const objRect = obj.getBoundingClientRect()
    let shiftX = 0;
    let shiftY = 0;
    shiftX = e.clientX - objRect.left;
    shiftY = e.clientY - objRect.top;
    return {
        x: Math.round(shiftX),
        y: Math.round(shiftY)
    }
}
