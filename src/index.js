const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const value = fs.readFile(fileName, 'utf8')
	return value
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
