import React from "react";
import {Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts'

function Armor({armor}) {

    const resistances = armor.resistance.map(i => {if (!i.amount){i.amount = 0} return i})

    return(
        <div>
            {armor.name}
            {armor.category}
            <img src={armor.image}/>
            <p>{armor.description}</p>
            <RadarChart height={500} width={500} 
                outerRadius="80%" data={armor.dmgNegation}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis domain={[0, 50]} />
                <Radar dataKey="amount" stroke="green" 
                    fill="green" default='0' fillOpacity={0.5} />
            </RadarChart>
            <RadarChart height={500} width={500} 
                outerRadius="80%" data={resistances}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis domain={[0, 50]} />
                <Radar dataKey="amount" stroke="green" 
                    fill="green" fillOpacity={0.5} />
            </RadarChart>
        </div>
    )
}


export default Armor