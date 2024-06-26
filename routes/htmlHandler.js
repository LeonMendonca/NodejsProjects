import { Router } from 'express';
import { resolve, join } from 'path';

const htmlHandler = Router();

const absPath = resolve('./dist');

htmlHandler.get('/worko',function(_,res) {
  res.sendFile( join(absPath,'index.html') );
})

htmlHandler.get('/findordelete',function(_,res) {
  res.sendFile( join(absPath, 'idInput.html') );
})

htmlHandler.get('/postorpatchorput',function(_,res) {
  res.sendFile( join(absPath, 'idBodyInput.html') );
})

export { htmlHandler };
