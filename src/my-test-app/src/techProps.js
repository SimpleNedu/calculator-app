import Tech from "./tech"

export default function Techs() {
   return(
    <>
    <Tech
    programmer="Simple"
    languages={['c++', 'ruby', "HTML", "Javascript", "React", "Vue.js", "Angular"]}
    pronoun="he" />

    <Tech
    programmer="Nenye"
    pronoun="she"
    languages={[ "HTML", "Javascript", "React", "Vue.js", "Angular"]} />
    </>
   )
}