# Kasutusjuhend

Kõik tehtud Yarniga  
Kui alguses ei lubanud BUILD'i kasutada, andis errori, siis soovitati lisada package.json faili `"main":` järgi nõnda:

```json
{
  "main": "unrelated.js",
  "targets": {
    "main": false
  }
}
```
