const koffi = require('koffi');
const path = require('path');

const dllFilePath = path.join(process.cwd(), 'assets/addons', 'koffi.dll');
const lib = koffi.load(dllFilePath);

const func_0 = lib.func('func_0', 'void', []);
const func_1 = lib.func('func_1', 'int', []);
const func_2 = lib.func('func_2', 'int', ['int']);

func_0();
console.log(func_1());
console.log(func_2(10));
