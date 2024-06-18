async function getAgents() {
    try {
        
        const response = await fetch('https://valorant-api.com/v1/agents')
        const data = await response.json()
        
        
        return data.data

    } catch (err) {
        console.log(err);
    }
}



export default getAgents