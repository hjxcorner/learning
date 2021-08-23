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
      dependencise.push(node.source.value + '.js')
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
    id: 'abcd' + ID++
  }
}

function createGraph(entry) {
  const mainAsset = createAsset(entry)
  const queue = [mainAsset]

  for (const asset of queue) {
    // const dirName = path.dirname(asset.fileName)
    asset.mapping = {}
    asset.dependencise.forEach(relativePath => {
      const child = createAsset(relativePath)
      asset.mapping[relativePath] = child.id
      queue.push(child)
    });
  }

  return queue
}

function bundle(graph) {
  let modules = ''
  graph.forEach(item => {
    modules += `
    '${item.id}': [
      function (require, module, exports) {
        ${item.code}
      },
      ${JSON.stringify(item.mapping)}
    ],
    `
  }) 
  const ret = `
    (function (modules) {

      function foo(id) {
        const [fn, mapping] = modules[id]

        function localRequire(relativePath) {
          return require(mapping[relativePath])
        }

        const module = {
          exports: {}
        }

        fn(localRequire, module, module.exports)

        return module.exports 
      }

      foo('abcd0')
    })({${modules}})
  `
  return ret
}


const a =  createGraph('./index.js')
console.log(a)

console.log(bundle(a))
// console.log(createAsset('./index.js'))