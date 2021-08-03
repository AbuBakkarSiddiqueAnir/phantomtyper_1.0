const wordMatchChecker = (a,b) => {
    return a.replace(/\s+/g,"")===b.replace(/\s+/g,"")
}

export default wordMatchChecker;