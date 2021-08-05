
const paraSlicer = (paragraph,slicerIndex) => {
    return [paragraph.slice(slicerIndex,slicerIndex+27), slicerIndex+27]

}


export default paraSlicer;