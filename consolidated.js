const fs = require('fs')
const path = require('path')

const folderPath = ''

const fileNames = [
  `F:/fullStackDeveloper/platzi/platzi-nextjs/cors-middleware.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/index.d.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/next-env.d.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/CartItemList/CartItemList.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/CartSummary/CartSummary.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/KawaiiHeader/AnimatedHeader.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/KawaiiHeader/KawaiiHeader.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/KawaiiHeader/ModalHeaderContent.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/KawaiiHeader/RottenHeader.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/Layout/Layout.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/Navbar/Navbar.tsx`,
  /* `F:/fullStackDeveloper/platzi/platzi-nextjs/components/Navbar/ShoppingCartIcon.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/ProductList/ProductList.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/ProductSummary/AddToCart.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/ProductSummary/ProductAttributes.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/ProductSummary/ProductSummary.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/SVGIcons/Avocado.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/SVGIcons/Basket.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/SVGIcons/index.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/SVGIcons/PosMeMuero.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/components/SVGIcons/svg.types.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/database/data.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/database/db.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/cart.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/index.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/yes-or-no.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/_app.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/_document.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/about/index.tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/api/avo/index.ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/api/avo/[id].ts`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/pages/product/[id].tsx`,
  `F:/fullStackDeveloper/platzi/platzi-nextjs/store/Cart.tsx`, */
]

const consolidateFiles = async () => {
  const consolidatedContent = []

  for (const fileName of fileNames) {
    const filePath = path.join(folderPath, fileName)

    try {
      const fileContent = await readFile(filePath)

      // Agregar líneas al inicio y al final del archivo
      const startLine = `- Inicio del archivo ${folderPath}${fileName}`
      const endLine = `- Final del archivo ${folderPath}${fileName}`
      const separador = '\n'

      consolidatedContent.push(startLine, ...fileContent, endLine, separador)
    } catch (error) {
      console.error(`Error al leer el archivo ${fileName}:`, error)
    }
  }

  // Escribir el contenido consolidado en el archivo final
  const finalFilePath = path.join(folderPath, 'consolidated.txt')
  await writeFile(finalFilePath, consolidatedContent.join('\n'))

  console.log('Archivos consolidados con éxito.')
}

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        // Dividir el contenido del archivo por líneas
        const fileContent = data.split('\n')
        resolve(fileContent)
      }
    })
  })
}

const writeFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (error) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

// Ejecutar la función para consolidar los archivos
consolidateFiles()
