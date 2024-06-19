import { useState, useEffect, useContext } from "react";
import getAgents from "../services/valAPI.jsx";
import { Card, CardContent, CardCover } from "@mui/joy";
import BasicCard from "../components/BasicCard.jsx";
import AgentContext from "../context/AgentContext.jsx";


function SelectAgentsPage() {
    
    const agentUrl = "/agents/"
    const context = useContext(AgentContext)
    const roles = [
        {
            role: "Duelist",
            img: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
            description: "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first."
        },
        {
            role: "Initiator",
            img: "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
            description: "Initiators challenge angles by setting up their team to enter contested ground and push defenders away."
        },
        {
            role: "Controller",
            img: "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
            description: "Controllers are experts in slicing up dangerous territory to set their team up for success."
        },
        {
            role: "Sentinel",
            img: "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
            description: "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds."
        },
    ]
    

    return (
        <>
            <h1>Select your Agent</h1>
            <div style={{margin: "5em 0"}}  className="agents">


                {/* Display each agent */}
                {context.agents.map((a, i) => {
                    return (
                        <a key={i} href={agentUrl + a.uuid}>
                            <BasicCard key={i} agent={a} />
                        </a>
                    )
                })}
            </div>
            <div>
                {
                    roles.map((r) => {
                        return <span style={{margin: "2em"}}>
                            <img src={r.img}></img>
                            
                        </span>
                    })
                }
            </div>
        </>
    )
}

export default SelectAgentsPage


