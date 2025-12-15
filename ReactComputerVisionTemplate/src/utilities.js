export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        // Get prediction results
        const [x, y, width, height] = prediction['bbox'];
        const text = prediction['class'];

        // Set styling
        const color = 'black'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fi11Sty1e = color
        
        // Draw retangles and text
        
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}


// $env:NODE_OPTIONS="--openssl-legacy-provider"
// npm start

