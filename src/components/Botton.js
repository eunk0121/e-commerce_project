import {useState} from "react"

const Button = () => {
    const [numOfClicks, SetNumOfClicks] = useState(0);
    
    console.log(numOfClicks);
const handleClick = () => {
    SetNumOfClicks(numOfClicks +1);
};

    return <Button onClick={handleClick}>clicked ({numOfClicks})</Button>

};

export default Button;