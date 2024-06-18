import { useState, useEffect, useContext } from "react";
import getAgents from "../services/valAPI.jsx";
import { Card, CardContent, CardCover } from "@mui/joy";
import BasicCard from "../components/BasicCard.jsx";
import AgentContext from "../context/AgentContext.jsx";

function SelectAgentsPage() {
    
    const agentUrl = "/agents/"
    const context = useContext(AgentContext)
    

    return (
        <>
            <div className="agents">


                {/* Display each agent */}
                {context.agents.map((a, i) => {
                    return (
                        <a key={i} href={agentUrl + a.uuid}>
                            <BasicCard key={i} agent={a} />
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export default SelectAgentsPage


