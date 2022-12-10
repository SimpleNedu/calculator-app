import Farm from "./farm";

export default function Farms() {
    return(
        <>
            <Farm
                farmer="Simple boi"
                animals={['pigs', 'cows', 'chickens']}
                />
            <Farm 
                farmer="My man"
                animals={['pigs', 'horses', 'donkey', 'goat' ]}
                />
        </>
    )
}