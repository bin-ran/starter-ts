import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    plugins: {},
    rules: {},
  },
  tseslint.configs.recommended,
])
