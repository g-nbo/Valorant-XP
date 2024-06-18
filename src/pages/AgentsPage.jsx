import { useParams } from "react-router-dom"
import AgentContext from "../context/AgentContext.jsx";
import { useContext, useEffect, useState } from "react";


let selectedAgent = 0;

function AgentsPage() {


    const { id } = useParams();
    const context = useContext(AgentContext)

    const selectedAgent = context.agents.find((a) => a.displayName.toLowerCase() === id.toLowerCase())
    console.log(selectedAgent)










    return (

        <div>
            {
                selectedAgent ?
                    selectedAgent.displayName :
                    ""
            }
        </div>
    )
}

export default AgentsPage