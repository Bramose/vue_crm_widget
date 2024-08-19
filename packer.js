import AdmZip from 'adm-zip'
import fs from 'fs'

async function createZipArchive() {
  const zip = new AdmZip()

  if (!fs.existsSync('./build')) {
    fs.mkdirSync('./build')
  }

  const outputFile = './build/app.zip'
  zip.addLocalFolder('./dist')
  zip.writeZip(outputFile)
  console.log(`Created ${outputFile} successfully`)
}

createZipArchive()
