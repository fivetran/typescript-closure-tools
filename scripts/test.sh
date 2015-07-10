tsc --module commonjs definition-generator/src/*.ts
tsc --module commonjs definition-generator/test/*.ts

./node_modules/jasmine-node/bin/jasmine-node definition-generator/test/*.js