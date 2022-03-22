import { readdirSync } from 'fs'
import { join } from 'path'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import progress from 'rollup-plugin-progress'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json'

const pathDefault = join(__dirname, 'src')
const regexExtension = /[aA-zZ].*\.(ts$|tsx$)/

const files = readdirSync(pathDefault).map(file => join(pathDefault, file))

const input = []

const recursiveDirectory = files => {
  for (let index = 0; index < files.length; index++) {
    const isFile = regexExtension.test(files[index])

    if (!isFile) {
      const teste = readdirSync(files[index]).map(file =>
        join(files[index], file),
      )

      recursiveDirectory(teste)
    } else {
      const file = files[index].replace(join(__dirname, '/'), '')

      input.push(file)
    }
  }
}

recursiveDirectory(files)

const plugins = [
  peerDepsExternal(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  babel({
    babelHelpers: 'bundled',
    include: ['src/**/*'],
    exclude: 'node_modules/**',
    extensions: ['.ts', '.tsx'],
  }),
  nodePolyfills(),
  terser(),
  progress(),
]

export default [
  {
    input,
    output: [
      { dir: pkg.main, format: 'cjs', exports: 'named', sourcemap: true },
      { dir: pkg.module, format: 'es', exports: 'named', sourcemap: true },
    ],
    preserveModules: true,
    plugins,
  },
]
