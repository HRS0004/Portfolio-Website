"use client";

import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl");
        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        // Vertex shader: Simple pass-through
        const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        // Fragment shader: Gradient + Grain
        const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      // GLSL Simplex Noise 2D
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float ratio = u_resolution.x / u_resolution.y;
        
        // Correct aspect ratio for noise shape
        vec2 st_corrected = vec2(st.x * ratio, st.y);

        // Faster moving time for perceptible liquid flow
        float t = u_time * 0.35;

        // --- BACKGROUND GRADIENT ---
        // Generates organic movement using noise
        // Larger shapes for smooth flow (lower frequency)
        float n1 = snoise(st_corrected * 0.6 + vec2(t * 0.2, t * 0.1));
        
        // Secondary flow for detail
        float n2 = snoise(st_corrected * 1.2 - vec2(t * 0.15, t * 0.3));
        
        // Third noise layer for extra complexity in movement
        float n3 = snoise(st_corrected * 0.9 + t * 0.1);

        // Define Palette
        // Base: Deep Charcoal / Navy
        vec3 colorBg = vec3(0.06, 0.08, 0.12); 
        
        // Mid: Steel Blue
        vec3 colorMid = vec3(0.15, 0.22, 0.32);
        
        // Highlight: Desaturated Soft Cyan / Slate
        vec3 colorLight = vec3(0.25, 0.35, 0.42);

        // Mix colors based on noise
        // Create a flowing field
        float mix1 = smoothstep(-0.8, 0.8, n1);
        float mix2 = smoothstep(-0.8, 0.8, n2);
        float mix3 = smoothstep(-1.0, 1.0, n3);

        vec3 color = mix(colorBg, colorMid, mix1);
        color = mix(color, colorLight, mix2 * 0.6 * mix3); // Modulate highlight with third noise
        
        // Add a subtle vignette or gradient falloff to keep edges darker
        float dist = distance(st, vec2(0.5));
        color = mix(color, colorBg, dist * 0.7);

        // --- FILM GRAIN ---
        // High frequency static noise
        float grain = fract(sin(dot(gl_FragCoord.xy + u_time * 10.0, vec2(12.9898,78.233))) * 43758.5453);
        
        // Soften the grain
        float grainStrength = 0.035; 
        
        // Blend grain
        vec3 grainColor = vec3(grain);
        color += (grainColor - 0.5) * grainStrength;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

        // Shader compilation helpers
        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Shader compile error:", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program link error:", gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);

        // Set up full-screen quad
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const vertices = new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            -1, 1,
            1, -1,
            1, 1,
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const timeLocation = gl.getUniformLocation(program, "u_time");
        const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

        let animationFrameId: number;
        const startTime = performance.now();

        const render = () => {
            // Handle resize
            const displayWidth = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            const currentTime = (performance.now() - startTime) / 1000;

            gl.uniform1f(timeLocation, currentTime);
            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.deleteBuffer(positionBuffer);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
            style={{ display: "block" }} // avoids whitespace issues
        />
    );
};

export default AnimatedBackground;
