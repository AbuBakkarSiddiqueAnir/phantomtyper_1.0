
const paraSlicer = (paragraph,slicerIndex) => {
    return [paragraph.slice(slicerIndex,slicerIndex+15), slicerIndex+15]

}


export default paraSlicer;