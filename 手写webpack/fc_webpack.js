const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const babel = require('@babel/core')
const traverse = require('@babel/traverse').default
const { dirname } = require('path')

let ID = 0

function createAsset(fileName) {
  const content = fs.readFileSync(fileName, 'utf-8')
  // console.log(content)

  const AST = parser.parse(content, { sourceType: 'module' })  // 代码生成抽象语法树
  // console.log(AST);

  // 通过AST得到文件所依赖的文件
  const dependencise = [] // 当前文件所依赖的文件的路径
  traverse(AST, {
    ImportDeclaration: ({ node }) => {
      // console.log(node.source.value)
      dependencise.push(node.source.value)
    }
  })

  // 拿到通过babel转义后的代码
  const { code } = babel.transformFromAst(AST, null, {
    presets: ['@babel/preset-env']
  })


  // console.log(code)
  return {
    fileName,
    code,
    dependencise,
    id: ID++
  }
}

function createGraph(entry) {
  const mainAsset = createAsset(entry)
  const queue = [mainAsset]
  for (const asset of queue) {
    const dirName = path.dirname(asset.fileName)
    // console.log(dirName)
    asset.mapping = {}
    asset.dependencise.forEach(relativePath => {
      // console.log(dirName, relativePath)
      const absolutePath = path.join(dirName, relativePath)
      const child = createAsset(absolutePath)
      asset.mapping[relativePath] = asset.id
      queue.push(child)
    });
  }

  return queue
}


const a =  createGraph('src/index.js')
console.log(a)
// console.log(createAsset('src/index.js'))