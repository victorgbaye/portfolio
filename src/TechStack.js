import React from 'react';

import './TechStack.css';

import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiMaterialUi } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { DiGit } from "react-icons/di";



const stacks =[
    {   
        id: 1,
        Logo: <DiReact/> ,
        name:'React'
    },
    {   
        id: 2,
        Logo: <SiJavascript/>,
        name:'JavaScript'
    },
    {   
        id: 3,
        Logo: <DiHtml5/>,
        name:'HTML5'
    },
     {  
        id: 4,
        Logo: <DiCss3/>,
        name:'CSS3'
    },
     {
        id: 5,
        Logo: <SiMaterialUi/>,
        name:'MaterialUI'
    },
    {   
        id: 6,
        Logo: <DiBootstrap/>,
        name:'Bootstrap'
    },
    {
        id: 7,
        Logo: <DiGit/>,
        name:'Git'
    },
]

const TechStack = () => {
    return (
        <>
            <main className='techstack'>

                <div className="headline">
                    <h4>Tech Stack</h4>
                </div>
            <article className='stack'>
                {stacks.map((stack)=>{
                    const {id, Logo, name}=stack
                    return(
                        <section className='stack__container' key={id}>
                            <div className="logo">
                               <h3> {Logo}</h3> 
                            </div>
                            <p className='logo__text'>{name}</p>
                        </section>
                    )
                })}
            </article>
            </main>
        </>
    )
}

export default TechStack
