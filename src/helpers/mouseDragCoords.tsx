import React from "react";

export const mouseDragCoords = (e: React.DragEvent<HTMLDivElement>) => {
    let obj = e.target as HTMLElement
    let objRect = obj.getBoundingClientRect()
    let shiftX = 0;
    let shiftY = 0;
    shiftX = e.clientX - objRect.left;
    shiftY = e.clientY - objRect.top;
    return {
        x: Math.round(shiftX),
        y: Math.round(shiftY)
    }
}
