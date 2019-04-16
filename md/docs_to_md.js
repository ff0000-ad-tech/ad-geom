'use strict'
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')
const path = require('path')

const outputDir = __dirname + '/../'
const outputDocsDir = outputDir + 'docs'

if (!fs.existsSync(outputDocsDir)) {
	fs.mkdirSync(outputDocsDir)
}

/* input and output paths */
const inputFile = __dirname + '/../lib/*.js'
const config = __dirname + '/config.jsdoc.json'
// const outputDir = __dirname

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: inputFile, configure: config })

/* reduce templateData to an array of class names */
const classNames = templateData.reduce((classNames, identifier) => {
	if (identifier.kind === 'class') classNames.push(identifier.name)
	return classNames
}, [])

/* create a documentation file for each class */
for (const className of classNames) {
	const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`
	// console.log(`rendering ${className}, template: ${template}`)
	const output = jsdoc2md.renderSync({ data: templateData, template: template })
	fs.writeFileSync(path.resolve(outputDocsDir, `${className}.md`), output)
}

/* create the main README */
fs.readFile(__dirname + '/README.hbs', (err, data) => {
	if (err) return console.error(err)
	const templateDataMain = jsdoc2md.getTemplateDataSync({ files: inputFile, configure: config })
	console.log(templateDataMain)
	const output = jsdoc2md.renderSync({
		data: templateDataMain,
		template: data.toString()
	})

	const classes = templateDataMain
		.filter(item => item.kind === 'class')
		.map(item => item.name)
		.join('|')
	// console.log(classes)

	const convertLinkToHeader = output.replace(/(<a\sname=")(.*)(">)(<\/a>)/gm, (full, a, b, c, d) => {
		console.log('=>', full, '|', a, '|', b, '|', c, '|', d)
		return '## ' + a + b + '" href="./docs/' + b + '.md' + c + b + d
	})

	const removeVisibleHeader = convertLinkToHeader.replace(new RegExp('## (' + classes + ')', 'g'), '')

	const delink = removeVisibleHeader.replace(/(\[)([^\]]+)(\]\(#[^\)]+\))/g, (full, a, b, c) => b)

	fs.writeFileSync(path.resolve(outputDir, `README.md`), delink)
})

// store former script
// "jsdoc2md --template md/README.hbs -c md/.jsdoc.json --no-cache --files index.js lib/* > README.md"
