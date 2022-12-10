export default function Farm(props) {
//     return (
//         <div>
//             <p>{props.farmer} had a farm</p>
//             <p>On his farm, he had some {props.animals[0]}</p>
//             <p>On his farm, he had some {props.animals[1]}</p>
//             <p>On his farm, he had some {props.animals[2]}</p>

//         </div>
//     )
    
    let onHisFarm = [];
    if(props.animals){
        onHisFarm = props.animals.map((animal,index)=>
        <p key={index}>On his faim he had some {animal}</p>
        )
    }
    return (
        <>
        <p>{props.farmer} had a farm</p>
        {onHisFarm}</>
    )


}

