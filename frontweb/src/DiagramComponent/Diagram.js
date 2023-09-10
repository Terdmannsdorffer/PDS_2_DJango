import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './Diagram.css';

function getRandomInt() {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Diagram() {
    const svgRef = useRef();
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        
        // Limpia el SVG antes de dibujar elementos nuevos
        svg.selectAll('*').remove();
        // Crea la línea con zigzag (representación de la resistencia)
        //LADO DERECHO

        const R3 = getRandomInt() * 100
        console.log(R3)
        const pathData_Right =
            'M320,50 ' +          // Mueve a la posición inicial (línea recta)
            'L320,80 ' +          // Línea recta hacia abajo
            'L325,85 ' +          // Primer punto del zigzag
            'L320,90 ' +          // Segundo punto del zigzag
            'L325,95 ' +          // Tercer punto del zigzag
            'L320,100 ' +         // Cuarto punto del zigzag
            'L325,105 ' +         // Quinto punto del zigzag
            'L320,110 ' +         // Sexto punto del zigzag
            'L325,115 ' +         // Séptimo punto del zigzag
            'L320,120 ' +         // Octavo punto del zigzag
            'L320,150';           // Línea recta final

        svg
            .append('path')
            .attr('d', pathData_Right)
            .attr('fill', 'none')   // Sin relleno
            .attr('stroke', 'black') // Color del borde
            .attr('stroke-width', 2); // Grosor del borde
        svg
            .append('text')
            .attr('x', 330) // Posición x del texto
            .attr('y', 110)  // Posición y del texto
            .attr('font-weight', 'bold') 
            .text(`${R3}Ω`);     // El número que deseas mostrar

        // Define las coordenadas del cuadrado
        const x = 170;         // Posición x del cuadrado
        const y = 50;          // Posición y del cuadrado
        const width = 150;     // Ancho del cuadrado
        const height = 100;    // Altura del cuadrado
        const strokeWidth = 2; // Grosor del borde

        // Crea un cuadrado usando cuatro líneas
        
        //LADO DE ARRIBA
        const R1 = getRandomInt() * 100
        const R2 = getRandomInt() * 100
        const pathData_Upper =
            'M170,50 ' +          // Mueve a la posición inicial (línea recta)
            'L185,50 ' +          // Línea recta hacia abajo
            'L190,45 ' +          // Primer punto del zigzag
            'L195,50 ' +          // Segundo punto del zigzag
            'L200,45 ' +          // Tercer punto del zigzag
            'L205,50 ' +         // Cuarto punto del zigzag
            'L210,45 ' +         // Quinto punto del zigzag
            'L215,50 ' +         // Sexto punto del zigzag
            'L220,45 ' +         // Séptimo punto del zigzag
            'L225,50 ' +

            'L260,50 ' +
            'L265,45 ' +
            'L270,50 ' +
            'L275,45 ' +
            'L280,50 ' +
            'L285,45 ' +
            'L290,50 ' +
            'L295,45 ' +
            'L300,50 ' +       // Octavo punto del zigzag
            'L320,50';           // Línea recta final

        svg
            .append('path')
            .attr('d', pathData_Upper)
            .attr('fill', 'none')   // Sin relleno
            .attr('stroke', 'black') // Color del borde
            .attr('stroke-width', 2); // Grosor del borde
        svg
            .append('text')
            .attr('x', 190) // Posición x del texto
            .attr('y', 41)  // Posición y del texto
            .attr('font-weight', 'bold') 
            .text(`${R1}Ω`);     // El número que deseas mostrar
        svg
            .append('text')
            .attr('x', 270) // Posición x del texto
            .attr('y', 41)  // Posición y del texto
            .attr('font-weight', 'bold') 
            .text(`${R2}Ω`);     // El número que deseas mostrar

        // Línea izquierda
        const V1 = getRandomInt() * 10
        const pathData_Left =
            'M170,50' +
            'L170,90' +
            'L165,90' +
            'L175,90' +
            'M170,105' +
            'L160,105' +           // Mueve a la posición inicial (línea recta)
            'L180,105' +
            'L170,105' +
            'L170,150';           // Línea recta final

        svg
            .append('path')
            .attr('d', pathData_Left)
            .attr('fill', 'none')   // Sin relleno
            .attr('stroke', 'black') // Color del borde
            .attr('stroke-width', 2); // Grosor del borde

        svg
            .append('text')
            .attr('x', 120) // Posición x del texto
            .attr('y', 110)  // Posición y del texto
            .attr('font-weight', 'bold') 
            .text(`${V1}V`);     // El número que deseas mostrar


        // Línea inferior
        const R4 = getRandomInt() * 100
        const pathData_Under =
            'M170,150' +          // Mueve a la posición inicial (línea recta)
            'L240,150' +
            'L245,153' +
            'L250,148' +
            'L255,153' +
            'L260,148' +
            'L265,153' +
            'L270,148' +
            'L275,153' +
            'L280,148' +
            'L285,153' +
            'L290,150' +
            'L320,150';           // Línea recta final

        svg
            .append('path')
            .attr('d', pathData_Under)
            .attr('fill', 'none')   // Sin relleno
            .attr('stroke', 'black') // Color del borde
            .attr('stroke-width', 2); // Grosor del borde

        svg
            .append('text')
            .attr('x', 260) // Posición x del texto
            .attr('y', 170)  // Posición y del texto
            .attr('font-weight', 'bold') 
            .text(`${R4}Ω`);     // El número que deseas mostrar


        }, []);
      
    return (
    <div>
        <h1>Diagrama de Circuito</h1>
        <svg ref={svgRef} width="500" height="300">
        {/* Elementos SVG del circuito se crean dinámicamente aquí */}
        </svg>
    </div>
    );  
}

export default Diagram;
