export default function Tech(props) {
    let langlearned =[]
    if (props.languages) {
        langlearned = props.languages.map((languages,index)=>
        <span key="index">{languages}, </span>)
    }
    return(
        <>
            <p>{props.programmer} is a programmer. </p>
            <p>{props.pronoun} has learnt the following languages, {langlearned} </p>
        </>
    )
    
}