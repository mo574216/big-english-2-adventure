import fs from 'node:fs';import Ajv from 'ajv/dist/2020.js';
const data=JSON.parse(fs.readFileSync('curriculum/course-structure.json','utf8'));const schema=JSON.parse(fs.readFileSync('curriculum/course-structure.schema.json','utf8'));
const ajv=new Ajv({allErrors:true});if(!ajv.validate(schema,data)){console.error(ajv.errorsText());process.exit(1)}
const ids=new Set();for(const u of data.units){if(ids.has(u.id)) throw new Error(`Duplicate unit id ${u.id}`);ids.add(u.id)}
for(const id of ['welcome','unit-1']) if(!ids.has(id)) throw new Error(`Missing ${id}`);
console.log(`Content valid: ${data.units.length} units, ${ids.size} unique IDs.`);
