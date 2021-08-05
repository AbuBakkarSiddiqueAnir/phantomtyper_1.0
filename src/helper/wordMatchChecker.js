const wordMatchChecker = (a,b) => {
    if(a.props.children[0])
      return a.props.children[0].replace(/\s+/g,"")===b.replace(/\s+/g,"")
    
      return false;
}

export default wordMatchChecker;