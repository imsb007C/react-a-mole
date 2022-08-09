import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


function MoleContainer(props){
    let [theMole, setTheMole] = useState(false)
    let displayMole = <EmptySlot/>

    const handleClick = (e) => {
        props.setScore(props.score+1)
        setTheMole(false)
    }   
    
    if(theMole){
        displayMole = <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick}/>
    }
    else{
        displayMole = <EmptySlot toggle={setTheMole}/>
    }

    //let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick}/> :<EmptySlot toggle={setTheMole}/>
    return(
        <div style={{'display': 'inline-block', 'width': '30vw'}}>  
            {displayMole}
        </div>
    )
}

export default MoleContainer;