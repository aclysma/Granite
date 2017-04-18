#version 310 es
precision mediump float;

layout(set = 2, binding = 0) uniform samplerCube uSkybox;
layout(location = 0) in highp vec3 vDirection;
layout(location = 0) out vec4 FragColor;

void main()
{
    FragColor = texture(uSkybox, vDirection);
}