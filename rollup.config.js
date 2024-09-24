import path from 'path';
import babel from 'rollup-plugin-babel';
import { dts } from 'rollup-plugin-dts';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

pkg.name = 'panax'

 
export default [
  {
    input: 'src/index.ts',
    plugins: [
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    output: [
      {
        file: path.resolve('dist/index.js'),
        format: 'cjs',
        sourcemap: true,
        plugins: [dts()]
      }
    ],
    extensions: ['.ts']
  },
  {
    input: 'src/iife-index.ts',
    plugins: [
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    output: [
      {
        file: path.resolve('dist', `${pkg.name}.iife.js`),
        format: 'iife', // 立即执行函数
        sourcemap: true,
        plugins: [terser()],
      }
    ],
    extensions: ['.ts']
  }
]