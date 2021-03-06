export const AddIcon = ({width}) => {
    return <div>
        <svg style={{marginRight: '9px'}} width={width ? width : '16'} height={width ? width : '16'} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <rect x="6" width="4" height="16" fill="white"/>
        <rect y="10" width="4" height="16" transform="rotate(-90 0 10)" fill="white"/>
        </svg>
    </div>
}