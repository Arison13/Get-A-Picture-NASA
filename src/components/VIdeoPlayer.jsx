import React from "react";


export default function VideoPlayer({state}) {


    return (
        <iframe 
        width="560" 
        height="315" 
        src={state.url} 
        title={state.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen /> 
    )

}