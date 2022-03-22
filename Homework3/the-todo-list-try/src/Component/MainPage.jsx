import { useState } from "react"

export function MainPage() {
    const [buildAssignment, setBuildAssignment] = useState(' ');
    const [listOfAssignment, setListOfAssignment] = useState([]);
    const [theListActivated, setTheListActived] = useState([]);
    const [theListArrange, setTheListArrange] = useState([]);
    const [numOfAssignment, setNumOfAssignment] = useState(0);
    const [theUserStage, setTheUserStage] = useState([0, 1]);
    return (
        <div className="todoapp">
            <h1>todos</h1>
            <header className="header">
                <TextBox setBuildAssignment={setBuildAssignment} />
            </header>
        </div>
    )
}