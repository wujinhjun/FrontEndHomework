export function TextBox(props) {
    const {theListActivated, setTheListActived, theListArrange, setNumOfAssignment} = props;

    return (
        <span>
            <input type="checkbox" className="toggle-all" id="toggle-all" />
        </span>
    )
}