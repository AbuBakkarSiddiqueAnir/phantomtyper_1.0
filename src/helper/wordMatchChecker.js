const wordMatchChecker = (a,b) => {

    return a.props.children[0].replace(/\s+/g,"")===b.replace(/\s+/g,"")

}

export default wordMatchChecker;