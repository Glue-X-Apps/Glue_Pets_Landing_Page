"use client"

import React from 'react';

interface LandingPetSvgProps {
    species?: 'dog' | 'cat';
    color?: string;
}

export const LandingPetSvg: React.FC<LandingPetSvgProps> = ({ species = 'dog', color = '#F2DCC5' }) => {
    // Colores Base
    const colors = {
        light: color,
        dark: species === 'dog' ? '#C4A484' : '#D35400',
        detail: '#3B2B20',
        whiteLight: '#FFFFFF',
        whiteDark: '#E8E8E8',
        earDark: '#8B8B8B',
        earLight: '#B8B8B8'
    };

    return (
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl">
            {/* SOMBRA SUELO */}
            <ellipse cx="250" cy="440" rx="140" ry="20" fill="#000" fillOpacity="0.15" />

            <g>
                {species === 'dog' ? (
                    <g id="dog-model">
                        <g id="back-legs">
                            <polygon points="135,400 155,350 175,375 150,425" fill={colors.light} />
                            <polygon points="150,425 135,400 160,425" fill={colors.whiteDark} />
                            <polygon points="365,400 345,350 325,375 350,425" fill={colors.dark} />
                            <polygon points="350,425 365,400 340,425" fill="#C8C8C8" />
                        </g>
                        <g id="body-group">
                            <polygon points="170,320 220,262 160,255" fill={colors.light} />
                            <polygon points="330,320 280,262 340,255" fill={colors.dark} />
                            <polygon points="170,320 250,395 250,270" fill={colors.whiteLight} />
                            <polygon points="330,320 250,395 250,270" fill={colors.whiteDark} />
                            <polygon points="170,320 230,375 230,420 175,375" fill={colors.dark} />
                            <polygon points="330,320 270,375 270,420 325,375" fill={colors.dark} />
                            <polygon points="230,375 250,395 250,420 230,420" fill={colors.earDark} />
                            <polygon points="270,375 250,395 250,420 270,420" fill={colors.earDark} opacity={0.8} />
                            <polygon points="175,375 230,375 230,440 190,440" fill={colors.whiteLight} />
                            <polygon points="175,375 190,440 150,415" fill={colors.whiteDark} />
                            <polygon points="325,375 270,375 270,440 310,440" fill={colors.whiteDark} />
                            <polygon points="325,375 310,440 350,415" fill="#D0D0D0" />
                        </g>
                        {/* CABEZA PERRO */}
                        <g>
                            <polygon points="150,60 225,115 155,180" fill={colors.earLight} />
                            <polygon points="150,60 155,165 200,130" fill={colors.earDark} />
                            <polygon points="350,60 275,115 345,180" fill={colors.dark} />
                            <polygon points="350,60 345,165 300,130" fill={colors.earDark} opacity={0.8} />
                            <polygon points="225,115 145,170 145,220 220,225" fill={colors.light} />
                            <polygon points="275,115 355,170 355,220 280,225" fill={colors.dark} />
                            <polygon points="225,115 250,110 250,215 220,225" fill={colors.whiteLight} />
                            <polygon points="275,115 250,110 250,215 280,225" fill={colors.whiteDark} />
                            <polygon points="145,220 160,255 220,262 220,225" fill={colors.light} />
                            <polygon points="355,220 340,255 280,262 280,225" fill={colors.dark} />
                            <polygon points="225,262 275,262 250,315" fill="#B8B8B8" />
                            <polygon points="225,262 250,315 250,270" fill={colors.whiteDark} />
                            <polygon points="275,262 250,315 250,270" fill="#A0A0A0" />
                            <polygon points="220,225 160,255 225,262 250,245" fill={colors.whiteLight} />
                            <polygon points="280,225 340,255 275,262 250,245" fill={colors.whiteDark} />
                            <polygon points="235,225 265,225 265,240 250,252 235,240" fill={colors.detail} />
                            <polygon points="250,225 250,252 235,240" fill={colors.detail} opacity={0.5} />
                            <circle cx="210" cy="202" r="7" fill={colors.detail} />
                            <circle cx="212" cy="200" r="2" fill="#FFFFFF" opacity="0.6" />
                            <circle cx="290" cy="202" r="7" fill={colors.detail} />
                            <circle cx="292" cy="200" r="2" fill="#FFFFFF" opacity="0.6" />
                        </g>
                    </g>
                ) : (
                    <g id="cat-model">
                        {/* COLA GATO */}
                        <g id="tail">
                            <polygon points="85,340 130,300 110,380" fill={colors.light} />
                            <polygon points="110,380 130,300 180,440 140,440" fill={colors.earDark} />
                        </g>
                        {/* PATAS */}
                        <g id="back-legs">
                            <polygon points="135,400 155,350 175,375 150,425" fill={colors.light} />
                            <polygon points="150,425 135,400 160,425" fill={colors.whiteLight} opacity={0.8} />
                            <polygon points="365,400 345,350 325,375 350,425" fill={colors.dark} />
                            <polygon points="350,425 365,400 340,425" fill="#E0E0E0" />
                        </g>
                        {/* CUERPO */}
                        <g id="body-group">
                            <polygon points="170,320 220,260 180,250" fill={colors.light} />
                            <polygon points="330,320 280,260 320,250" fill={colors.earDark} />
                            <polygon points="170,320 250,395 250,270" fill={colors.whiteLight} />
                            <polygon points="330,320 250,395 250,270" fill={colors.whiteDark} />
                            <polygon points="170,320 230,375 230,420 175,375" fill={colors.light} />
                            <polygon points="230,375 250,395 250,420 230,420" fill={colors.earDark} />
                            <polygon points="330,320 270,375 270,420 325,375" fill={colors.dark} />
                            <polygon points="270,375 250,395 250,420 270,420" fill={colors.earDark} />
                            <polygon points="175,375 230,375 230,440 190,440" fill={colors.whiteLight} />
                            <polygon points="175,375 190,440 150,415" fill={colors.whiteDark} />
                            <polygon points="325,375 270,375 270,440 310,440" fill={colors.whiteDark} />
                            <polygon points="325,375 310,440 350,415" fill="#D0D0D0" />
                        </g>

                        {/* CABEZA GATO */}
                        <g>
                            <polygon points="160,50 210,100 150,180" fill={colors.light} />
                            <polygon points="160,50 200,120 210,100" fill={colors.earDark} opacity={0.9} />
                            <polygon points="340,50 290,100 350,180" fill={colors.dark} />
                            <polygon points="340,50 300,120 290,100" fill={colors.whiteLight} opacity={0.7} />
                            <polygon points="210,100 250,85 250,200 150,180" fill={colors.light} />
                            <polygon points="290,100 250,85 250,200 350,180" fill={colors.dark} />
                            <polygon points="150,180 250,200 250,250 170,230" fill={colors.whiteLight} opacity={0.9} />
                            <polygon points="350,180 250,200 250,250 330,230" fill={colors.earDark} />
                            <polygon points="170,230 250,250 250,270" fill={colors.light} />
                            <polygon points="330,230 250,250 250,270" fill={colors.earDark} />
                            <polygon points="200,240 300,240 250,280" fill="#9E9E9E" opacity={0.2} />
                            <polygon points="235,195 265,195 250,215" fill="#D4B5B0" />
                            <polygon points="185,150 215,150 220,175 200,190 180,175" fill={colors.detail} />
                            <circle cx="195" cy="160" r="4" fill="#FFFFFF" />
                            <polygon points="285,150 315,150 320,175 300,190 280,175" fill={colors.detail} />
                            <circle cx="305" cy="160" r="4" fill="#FFFFFF" />
                            <g stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round">
                                <line x1="210" y1="205" x2="140" y2="195" />
                                <line x1="210" y1="215" x2="135" y2="215" />
                                <line x1="210" y1="225" x2="145" y2="230" />
                                <line x1="290" y1="205" x2="360" y2="195" />
                                <line x1="290" y1="215" x2="365" y2="215" />
                                <line x1="290" y1="225" x2="355" y2="230" />
                            </g>
                        </g>
                    </g>
                )}
            </g>
        </svg>
    );
};
