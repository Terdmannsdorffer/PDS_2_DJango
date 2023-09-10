import React from "react";






function CircuitDiagramComponent(props) {
    const { components } = props.data;

    const startingPoint={ x: 100, y: 250 }
    let currentPoint = { ...startingPoint }; // copy the starting point to initialize the current point
    const componentDimensions = {
        battery: { width: 70, height: 100 },
        resistor_horizontal: { width: 126, height: 60 },
        resistor_vertical: { width: 60, height: 136 },
        parallel_spacing: 40  // space between parallel resistors
    };


    return (
        <svg width="500" height="500">
            {components.map((component, index) => {
                if (component.type === "battery") {
                    const battery = (
                        <g key={index}>
                            <line x1={currentPoint.x - 20} x2={currentPoint.x - 50} y1={currentPoint.y - 10} y2={currentPoint.y - 10} stroke="black" strokeWidth="2"/> {/* horizontal line */}
                            <line x1={currentPoint.x - 35} x2={currentPoint.x - 35} y1={currentPoint.y - 10} y2={currentPoint.y - 50} stroke="black" strokeWidth="2"/> {/* vertical line */}

                            <text x={currentPoint.x - 90} y={currentPoint.y - 10}>{component.voltage} V</text> {/* voltage */}

                            <line x1={currentPoint.x - 35} x2={currentPoint.x - 35} y1={currentPoint.y} y2={currentPoint.y + 40} stroke="black" strokeWidth="2"/> {/* vertical line */}
                            <line x1={currentPoint.x} x2={currentPoint.x - 70} y1={currentPoint.y} y2={currentPoint.y} stroke="black" strokeWidth="2"/> {/* horizontal line */}

                        </g>
                    );
                    currentPoint.x -= componentDimensions.battery.width/2;
                    currentPoint.y = currentPoint.y - componentDimensions.battery.height / 2;
                    return battery;
                }

                if (component.type === "resistor" && component.orientation === "horizontal") {
                    const resistor = (
                        <g key={index}>
                            <line x1={currentPoint.x} x2={currentPoint.x + 30} y1={currentPoint.y} y2={currentPoint.y} stroke="black" strokeWidth="2"/>
                            <polyline points={`${currentPoint.x + 30},${currentPoint.y} ${currentPoint.x + 40},${currentPoint.y + 30} ${currentPoint.x + 50},${currentPoint.y - 30} ${currentPoint.x + 60},${currentPoint.y + 30} ${currentPoint.x + 70},${currentPoint.y - 30} ${currentPoint.x + 80},${currentPoint.y} ${currentPoint.x + 90},${currentPoint.y}`} stroke="black" strokeWidth="2" fill="none"/>
                            <line x1={currentPoint.x + 80} x2={currentPoint.x + 126} y1={currentPoint.y} y2={currentPoint.y} stroke="black" strokeWidth="2"/>
                            <text x={currentPoint.x + 40} y={currentPoint.y - 40}>{component.resistance} Ω</text>
                        </g>
                    );
                    currentPoint.x += componentDimensions.resistor_horizontal.width;
                    return resistor;
                }

                if (component.type === "resistor" && component.orientation === "vertical") {
                    const resistor = (
                        <g key={index}>
                            <line x1={currentPoint.x} x2={currentPoint.x} y1={currentPoint.y} y2={currentPoint.y + 30} stroke="black" strokeWidth="2"/> {/* vertical line */}
                        </g>
                    );
                    currentPoint.y -= componentDimensions.resistor_vertical.height;
                    return resistor;
                }

                if (component.type === "parallel") {
                    let parallelGroup = [];
                    let startX = currentPoint.x;
                    component.resistors.forEach((resistor, resistorIndex) => {
                        const resistorElement = (
                            <g key={`parallel-${index}-${resistorIndex}`}>
                                <polyline points={`${startX},${currentPoint.y} ${startX + 30},${currentPoint.y - 10} ${startX - 30},${currentPoint.y - 20} ${startX + 30},${currentPoint.y - 30} ${startX - 30},${currentPoint.y - 40} ${startX},${currentPoint.y - 50}`} stroke="black" strokeWidth="2" fill="none"/>
                                <text x={startX + 40} y={currentPoint.y - 30}>{resistor.resistance} Ω</text>
                                <line x1={startX} x2={startX} y1={currentPoint.y - 50} y2={currentPoint.y - 90} stroke="black" strokeWidth="2"/>
                            </g>
                        );
                        parallelGroup.push(resistorElement);
                        startX -= (componentDimensions.resistor_vertical.width + componentDimensions.parallel_spacing);
                    });
                    currentPoint.y -= componentDimensions.resistor_vertical.height;
                    return parallelGroup;
                }

                return null;
            })}
        </svg>
    );
}
export default CircuitDiagramComponent;
