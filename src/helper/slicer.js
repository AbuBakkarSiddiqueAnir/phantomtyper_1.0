
const paraSlicer = (paragraph,slicerIndex) => {
    return [paragraph.slice(slicerIndex,slicerIndex+20), slicerIndex+20]

}


export default paraSlicer;