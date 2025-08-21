const FileInput = ({onFileSelect})=> {

    const handleFile = (e) => {
        const file = e.target.files[0];
        onFileSelect(file);
    }
    return (
        <input type="file" onChange={handleFile}/>
    )
}

export default FileInput;